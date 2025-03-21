import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "./globals.css"
import Providers from '@/providers'
import {checkServerIdentity} from "node:tls";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ocso',
  description: 'Pagina web de administracion de oxxos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}><Providers>{children}</Providers></body>
    </html>
  )
}
