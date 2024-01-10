import type { Metadata } from 'next'
import { Montserrat, Anton } from 'next/font/google'
import './globals.css'

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
