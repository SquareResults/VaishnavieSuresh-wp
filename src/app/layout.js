import { Inter, Bebas_Neue, Montserrat } from 'next/font/google'
import './globals.css'
import clientData from './clientData.json';

const inter = Inter({ subsets: ['latin'] })
const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin']
})

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: `${clientData.Home.firstName} ${clientData.Home.lastName}`,
  description: `${clientData.Home.titles}`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bebas.className}>{children}</body>
    </html>
  )
}
