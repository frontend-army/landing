import { ParsedChapter, ParsedVideo } from "./types";

export const decodeXmlEntities = (text: string): string => {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
};

export const extractFirstParagraph = (text: string): string => {
  if (!text) return "";
  const decoded = decodeXmlEntities(text);
  const paragraphs = decoded.split(/\r?\n\s*\r?\n/);
  return (paragraphs[0] || "").trim();
};

export const parseChapterTitle = (rawTitle: string): ParsedChapter | null => {
  const match = rawTitle.match(/Cap[ií]tulo\s+(\d+)(?:\s*[:\-]\s*(.+))?/i);
  if (!match) {
    return null;
  }

  const episodeId = match[1];
  const cleanTitle = match[2] ? match[2].trim() : rawTitle.trim();

  return { episodeId, cleanTitle };
};

export const parseYouTubePlaylistRss = (xml: string): ParsedVideo[] => {
  const entries: ParsedVideo[] = [];
  const entryMatches = xml.match(/<entry>[\s\S]*?<\/entry>/g);

  if (!entryMatches) {
    return entries;
  }

  for (const entryXml of entryMatches) {
    const videoIdMatch = entryXml.match(/<yt:videoId>([\s\S]*?)<\/yt:videoId>/);
    const titleMatch = entryXml.match(/<title>([\s\S]*?)<\/title>/);
    const descMatch = entryXml.match(/<media:description>([\s\S]*?)<\/media:description>/);

    if (!videoIdMatch || !titleMatch) {
      continue;
    }

    const videoId = videoIdMatch[1].trim();
    const rawTitle = decodeXmlEntities(titleMatch[1].trim());
    const chapter = parseChapterTitle(rawTitle);

    if (!chapter) {
      continue;
    }

    const rawDesc = descMatch ? descMatch[1] : "";
    const cleanDescription = extractFirstParagraph(rawDesc);

    entries.push({
      id: chapter.episodeId,
      videoId,
      title: chapter.cleanTitle,
      description: cleanDescription,
      url: `https://www.youtube.com/watch?v=${videoId}`,
    });
  }

  return entries;
};
