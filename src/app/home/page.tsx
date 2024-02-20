import { AboutSection } from './components/AboutSection';
import { HeroSection } from './components/HeroSection';
import { EpisodesSection } from './components/EpisodesSection';
import { BlogSection } from './components/BlogSection';
import { DotBackground } from './components/DotBackground';

export const metadata = {
  title: 'Frontend Army',
  description: 'Sumate a nuestro podcast y comunidad para explorar las tendencias en desarrollo web y compartir tu experiencia en el mundo Frontend.',
  images: ["https://frontendarmy.tech/fea_logo.png"],
  url: 'https://frontendarmy.tech',
  openGraph: {
    title: 'Frontend army',
    description: 'Sumate a nuestro podcast y comunidad para explorar las tendencias en desarrollo web y compartir tu experiencia en el mundo Frontend.',
    images: ["https://frontendarmy.tech/fea_logo.png"],
    url: 'https://frontendarmy.tech'
  },
  twitter: {
    card : 'summary_large_image',
    title: 'Frontend army',
    description: 'Sumate a nuestro podcast y comunidad para explorar las tendencias en desarrollo web y compartir tu experiencia en el mundo Frontend.',
    images: ["https://frontendarmy.tech/fea_logo.png"],
    url: 'https://frontendarmy.tech'
  },
  linkedin: {
    title: 'Frontend army',
    description: 'Sumate a nuestro podcast y comunidad para explorar las tendencias en desarrollo web y compartir tu experiencia en el mundo Frontend.',
    images: ["https://frontendarmy.tech/fea_logo.png"],
    url: 'https://frontendarmy.tech'
  }
}

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
