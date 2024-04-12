import { DotBackground } from '@/components/DotBackground';
import { HeroSection } from '@/app/home/components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EpisodesSection } from './components/EpisodesSection';
import { BlogSection } from './components/BlogSection';
import { Navbar } from './components/Navbar';

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
    images: ["https://frontendarmy.tech/twitter_og.png"],
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
    <>
      <Navbar />
      <main className="home">
        <DotBackground/>
        <HeroSection />
        <EpisodesSection />
        {/* <BlogSection /> */}
        <AboutSection />
      </main>
    </>
  );
}
