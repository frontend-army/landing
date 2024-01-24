import { AboutSection } from './components/AboutSection';
import { HeroSection } from './components/HeroSection';
import { EpisodesSection } from './components/EpisodesSection';
import { BlogSection } from './components/BlogSection';
import { DotBackground } from './components/DotBackground';

export default async function Home() {
  return (
    <main>
      <DotBackground/>
      <HeroSection />
      <EpisodesSection />
      <BlogSection />
      <AboutSection />
    </main>
  );
}
