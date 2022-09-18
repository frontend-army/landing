import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  let a = '1';
  const b = a + 1;
  return <Component {...pageProps} />;
}

export default MyApp;
