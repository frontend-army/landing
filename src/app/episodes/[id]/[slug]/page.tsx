import { getEpisode, getEpisodes } from '@/services/episodes';
import Link from 'next/link';
import styles from './styles.module.scss';
import Image from 'next/image';

export const dynamicParams = false;

export async function generateStaticParams() {
  const { episodes } = await getEpisodes();
  return episodes ? episodes.map((episode) => ({
    slug: episode.title.replaceAll(" ", "-").toLowerCase(),
    id: episode.id.toString()
  })) : [];
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string; id: number }>;
}) {
  const { slug, id } = await params;
  const episode = await getEpisode(id);
  if (!episode) {
    return {};
  }
  return {
    metadataBase: new URL("https://frontendarmy.tech"),
    title: `${episode.title} - Frontend Army`,
    description: episode.description,
    images: ["https://frontendarmy.tech/fea_logo.png"],
    url: `https://frontendarmy.tech/episodes/${id}/${slug}`,
    openGraph: {
      title: `${episode.title} - Frontend Army`,
      description: episode.description,
      images: ["https://frontendarmy.tech/fea_logo.png"],
      url: `https://frontendarmy.tech/episodes/${id}/${slug}`
    },
    twitter: {
      card: "summary_large_image",
      title: `${episode.title} - Frontend Army`,
      description: episode.description,
      images: ["https://frontendarmy.tech/twitter_og.png"],
      url: `https://frontendarmy.tech/episodes/${id}/${slug}`
    },
    linkedin: {
      title: `${episode.title} - Frontend Army`,
      description: episode.description,
      images: ["https://frontendarmy.tech/fea_logo.png"],
      url: `https://frontendarmy.tech/episodes/${id}/${slug}`
    }
  };
}

export default async function Episode({ params }: { params: Promise<{ slug: string; id: number }> }) {
  const { slug, id } = await params;
  const episode = await getEpisode(id);

  if (!episode) {
    return null;
  }

  return (
    <div className={styles.episode}>
      <Image src="/fea_logo.png" alt="Logo de Frontend Army" width={200} height={200} />
      <div className={styles.episodeContent}>
        <h1 className={styles.episodeName}>{episode.title}</h1>
        <p className={styles.episodeDescription}>{episode.description}</p>
        <div className={styles.episodeLinks}>
          <Link className={styles.episodeLink} href={episode.youtube_url} target="_blank" rel="noopener noreferrer">
            Watch on YouTube
          </Link>
          <Link className={styles.episodeLink} href={episode.spotify_url} target="_blank" rel="noopener noreferrer">
            Listen on Spotify
          </Link>
        </div>
      </div>

    </div>
  );
}
