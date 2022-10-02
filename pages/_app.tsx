import type { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';

import '../styles/globals.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ParallaxProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ParallaxProvider>
    </div>
  );
}

export default MyApp;
