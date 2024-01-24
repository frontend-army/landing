import { AboutSection } from './components/AboutSection';
import { HeroSection } from './components/HeroSection';
import { EpisodesSection } from './components/EpisodesSection';
import { BlogSection } from './components/BlogSection';

export default async function Home() {
  return (
    <main>
      <HeroSection />
      <EpisodesSection />
      <BlogSection />
      <AboutSection />
    </main>
  );
}
