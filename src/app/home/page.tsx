import { AboutSection } from './components/AboutSection';
import { HeroSection } from './components/HeroSection';
import { EpisodesSection } from './components/EpisodesSection';
import { BlogSection } from './components/BlogSection';
import { DotBackground } from './components/DotBackground';
import FeaLogo from '@/assets/fea_logo.png';

export const metadata = {
  title: 'Frontend army',
  description: 'Sumate a nuestro podcast y comunidad para explorar las tendencias en desarrollo web y compartir tu experiencia en el mundo Frontend.',
  image: FeaLogo,
  url: 'https://www.frontend-army.com',
  openGraph: {
    title: 'Frontend army',
    description: 'Sumate a nuestro podcast y comunidad para explorar las tendencias en desarrollo web y compartir tu experiencia en el mundo Frontend.',
    images: ["/fea_logo.png"],
    url: 'https://www.frontend-army.com'
  },
  twitter: {
    card : 'summary_large_image',
    title: 'Frontend army',
    description: 'Sumate a nuestro podcast y comunidad para explorar las tendencias en desarrollo web y compartir tu experiencia en el mundo Frontend.',
    images: ["/fea_logo.png"],
    url: 'https://www.frontend-army.com'
  },
  linkedin: {
    title: 'Frontend army',
    description: 'Sumate a nuestro podcast y comunidad para explorar las tendencias en desarrollo web y compartir tu experiencia en el mundo Frontend.',
    images: ["/fea_logo.png"],
    url: 'https://www.frontend-army.com'
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
