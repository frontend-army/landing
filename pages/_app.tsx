import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <footer>Footer</footer>
    </div>
  );
}

export default MyApp;
