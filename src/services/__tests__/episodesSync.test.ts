import { describe, it, expect } from "vitest";
import {
  decodeXmlEntities,
  extractFirstParagraph,
  parseChapterTitle,
  parseYouTubePlaylistRss,
} from "../sync/parser";

describe("decodeXmlEntities", () => {
  it("decodes basic XML and HTML entities", () => {
    expect(decodeXmlEntities("Tom &amp; Jerry &quot;Show&quot;")).toBe('Tom & Jerry "Show"');
    expect(decodeXmlEntities("&lt;tag&gt; &#39;test&#39; &apos;val&apos;")).toBe("<tag> 'test' 'val'");
  });
});

describe("parseChapterTitle", () => {
  it("extracts id and title with colon separator", () => {
    const parsed = parseChapterTitle("Capítulo 4: Arquitectura Hexagonal");
    expect(parsed).toEqual({
      episodeId: "4",
      cleanTitle: "Arquitectura Hexagonal",
    });
  });

  it("extracts id and title without accent and dash separator", () => {
    const parsed = parseChapterTitle("Capitulo 66 - Entrevista a un Lead");
    expect(parsed).toEqual({
      episodeId: "66",
      cleanTitle: "Entrevista a un Lead",
    });
  });

  it("handles chapter without subtitle", () => {
    const parsed = parseChapterTitle("Capítulo 10");
    expect(parsed).toEqual({
      episodeId: "10",
      cleanTitle: "Capítulo 10",
    });
  });

  it("returns null for non-chapter titles", () => {
    expect(parseChapterTitle("Trailer Oficial Frontend Army")).toBeNull();
    expect(parseChapterTitle("Random live stream")).toBeNull();
  });
});

describe("extractFirstParagraph", () => {
  it("returns empty string when input is empty", () => {
    expect(extractFirstParagraph("")).toBe("");
  });

  it("extracts only the first paragraph separated by double newlines", () => {
    const raw = "Este es el primer párrafo con la sinopsis.\n\nRedes sociales:\nhttps://twitter.com/fea\n\nSponsors:";
    expect(extractFirstParagraph(raw)).toBe("Este es el primer párrafo con la sinopsis.");
  });

  it("handles windows style CRLF newlines", () => {
    const raw = "Primer párrafo.\r\n\r\nSegundo párrafo.";
    expect(extractFirstParagraph(raw)).toBe("Primer párrafo.");
  });

  it("decodes XML entities properly in descriptions", () => {
    const raw = "Aprender &amp; dominar React &lt;19&gt; &quot;en vivo&#39; &apos;test&apos;.\n\nOtro bloque";
    expect(extractFirstParagraph(raw)).toBe("Aprender & dominar React <19> \"en vivo' 'test'.");
  });
});

describe("parseYouTubePlaylistRss", () => {
  it("returns empty array when no entries exist", () => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?><feed></feed>`;
    expect(parseYouTubePlaylistRss(xml)).toEqual([]);
  });

  it("parses valid entries with standard 'Capítulo X: Título' format", () => {
    const xml = `
      <feed xmlns:yt="http://www.youtube.com/xml/schemas/2015" xmlns:media="http://search.yahoo.com/mrss/">
        <entry>
          <yt:videoId>abc123xyz</yt:videoId>
          <title>Capítulo 42: Arquitectura Hexagonal en Frontend &amp; TypeScript</title>
          <media:description>
            En este episodio exploramos Clean Architecture.

            Seguinos en nuestras redes:
            https://twitter.com/frontendarmy
          </media:description>
        </entry>
      </feed>
    `;

    const result = parseYouTubePlaylistRss(xml);
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      id: "42",
      videoId: "abc123xyz",
      title: "Arquitectura Hexagonal en Frontend & TypeScript",
      description: "En este episodio exploramos Clean Architecture.",
      url: "https://www.youtube.com/watch?v=abc123xyz",
    });
  });

  it("parses entries with dash separator 'Capitulo 66 - Título sin tilde'", () => {
    const xml = `
      <feed xmlns:yt="http://www.youtube.com/xml/schemas/2015" xmlns:media="http://search.yahoo.com/mrss/">
        <entry>
          <yt:videoId>def456uvw</yt:videoId>
          <title>Capitulo 66 - Entrevista especial</title>
          <media:description>Charla a fondo sobre Web Performance.</media:description>
        </entry>
      </feed>
    `;

    const result = parseYouTubePlaylistRss(xml);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("66");
    expect(result[0].title).toBe("Entrevista especial");
    expect(result[0].description).toBe("Charla a fondo sobre Web Performance.");
  });

  it("handles entries without subtitle, retaining full title", () => {
    const xml = `
      <feed xmlns:yt="http://www.youtube.com/xml/schemas/2015" xmlns:media="http://search.yahoo.com/mrss/">
        <entry>
          <yt:videoId>ghi789rst</yt:videoId>
          <title>Capítulo 99</title>
        </entry>
      </feed>
    `;

    const result = parseYouTubePlaylistRss(xml);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("99");
    expect(result[0].title).toBe("Capítulo 99");
  });

  it("ignores non-episode videos that do not match the Chapter pattern", () => {
    const xml = `
      <feed xmlns:yt="http://www.youtube.com/xml/schemas/2015" xmlns:media="http://search.yahoo.com/mrss/">
        <entry>
          <yt:videoId>promo001</yt:videoId>
          <title>Trailer Oficial - Conferencia Frontend Army 2026</title>
        </entry>
      </feed>
    `;

    const result = parseYouTubePlaylistRss(xml);
    expect(result).toHaveLength(0);
  });
});
