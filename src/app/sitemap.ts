import { getEpisodes } from '@/services/episodes'
import { fetchPosts } from './api/blogpost'

export default async function sitemap() {
  const [{ episodes }, posts] = await Promise.all([
    getEpisodes(),
    fetchPosts(),
  ]);

  return [
    {
      url: 'https://frontendarmy.tech/home',
      lastModified: new Date(),
    },
    {
      url: 'https://frontendarmy.tech/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://frontendarmy.tech/episodes',
      lastModified: new Date(),
    },
    {
      url: 'https://frontendarmy.tech/links',
      lastModified: new Date(),
    },
    ...posts.map((post) => ({
      url: `https://frontendarmy.tech/blog/${post.id}`,
      lastModified: new Date(post.date),
    })),
    ...(episodes ? episodes.map((episode) => ({
      url: `https://frontendarmy.tech/episodes/${episode.id}/${episode.title.replaceAll(" ", "-").toLowerCase()}`,
      lastModified: new Date(episode.created_at),
    })) : []),
  ]
}
