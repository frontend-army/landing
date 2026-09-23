import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";
import { fileURLToPath } from "url";

let parseYouTubePlaylistRss;

try {
  const parser = await import("../src/services/sync/parser.ts");
  parseYouTubePlaylistRss = parser.parseYouTubePlaylistRss;
} catch (err) {
  if (err && (err.code === "ERR_UNKNOWN_FILE_EXTENSION" || err.code === "ERR_MODULE_NOT_FOUND")) {
    const res = spawnSync(
      process.execPath,
      ["--import", "tsx", fileURLToPath(import.meta.url), ...process.argv.slice(2)],
      {
        stdio: "inherit",
        env: process.env,
      }
    );
    process.exit(res.status ?? 0);
  }
  throw err;
}

// Auto-load .env.local o .env si existen
for (const envFile of [".env.local", ".env"]) {
  const envPath = path.resolve(process.cwd(), envFile);
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx > 0) {
        const key = trimmed.slice(0, eqIdx).trim();
        const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, "");
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}

const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || "UCZ-rzg0Rya_le0GtTH3piPQ";
const PLAYLIST_ID = process.env.YOUTUBE_PLAYLIST_ID;
const YOUTUBE_URL = PLAYLIST_ID
  ? `https://www.youtube.com/feeds/videos.xml?playlist_id=${PLAYLIST_ID}`
  : `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

async function checkYouTube() {
  console.log("\n--- [1] PROBANDO YOUTUBE RSS EN VIVO ---");
  console.log(`URL: ${YOUTUBE_URL}`);

  const res = await fetch(YOUTUBE_URL, {
    headers: { "User-Agent": "FEA-CheckSync/1.0" },
  });

  if (!res.ok) {
    console.error(`Error HTTP ${res.status}: ${res.statusText}`);
    return;
  }

  const xml = await res.text();
  const parsed = parseYouTubePlaylistRss(xml);

  console.log(`Capítulos parseados exitosamente con parser compartido: ${parsed.length}`);
  console.log("Capítulos detectados:", parsed.map((p) => `Capítulo ${p.id}: ${p.title}`).join(", "));
  if (parsed.length > 0) {
    console.log("\nCapítulo más reciente (el que se sincronizaría):");
    console.log(JSON.stringify(parsed[0], null, 2));
  }
}

async function checkSpotify() {
  console.log("\n--- [2] PROBANDO SPOTIFY API (Solo Lectura) ---");
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const showId = process.env.SPOTIFY_SHOW_ID || "0sN5AI1KvzNm46qhIPqppT";

  if (!clientId || !clientSecret) {
    console.log("ℹ️  Variables SPOTIFY_CLIENT_ID o SPOTIFY_CLIENT_SECRET no configuradas.");
    console.log("   Para probar Spotify, configuralas en tu .env o terminal.");
    return;
  }

  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
    },
    body: "grant_type=client_credentials",
  });

  if (!tokenRes.ok) {
    console.error(`Error autenticando con Spotify: ${tokenRes.status}`);
    return;
  }

  const { access_token } = await tokenRes.json();
  const epRes = await fetch(`https://api.spotify.com/v1/shows/${showId}/episodes?limit=5`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });

  const epData = await epRes.json();
  console.log(`Episodios obtenidos de Spotify: ${epData.items?.length || 0}`);
  if (epData.items?.[0]) {
    console.log("Último episodio en Spotify:", {
      name: epData.items[0].name,
      spotify_url: epData.items[0].external_urls?.spotify,
    });
  }
}

async function run() {
  await checkYouTube();
  await checkSpotify();
  console.log("\n--- [3] MODO DRY-RUN LOCAL ---");
  console.log("Para probar el sync completo contra Supabase SIN escribir:");
  console.log("1. Levantá Next: pnpm dev");
  console.log("2. Ejecutá en otra terminal:");
  console.log('   curl -H "Authorization: Bearer <TU_CRON_SECRET>" "http://localhost:3000/api/sync-episodes?dryRun=true"');
  console.log("   (Esto comparará los capítulos con Supabase y te dirá qué crearía o actualizaría sin modificar la BD)\n");
}

run();
