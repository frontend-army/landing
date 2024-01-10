import { Montserrat, Anton } from 'next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css";
import '@/css/globals.css';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const a = Anton({weight: "400", subsets: ['latin'], variable: '--font-anton'});
const b = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${a.variable} ${b.variable}`}>
      <body>
        <nav>nav</nav>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  )
}
