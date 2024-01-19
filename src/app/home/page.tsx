import { AboutSection } from './components/AboutSection';
import { HeroSection } from './components/HeroSection';
import { EpisodesSection } from './components/EpisodesSection';
import { fetchPosts } from '../api/blogpost';

export default async function Home() {
  const posts = await fetchPosts();
  
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <EpisodesSection />
      {/* <section>blog</section> */}
    </main>
  );
}
