import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from './components/AuthProvider'
import SpotifyContextProvider from '@/context/SpotifyContextProvider'

const inter = Inter({
  subsets: ['latin'],
  weight: ['900', '700', '400', '200']
})

export const metadata = {
  title: 'Jamming | Mat_dweb',
  description: 'This application allows you to create and customize any playlist and send it to your Spotify account using API technology',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <AuthProvider>
            <SpotifyContextProvider>
              <main>
                {children}
              </main>
            </SpotifyContextProvider>
          </AuthProvider>
      </body>
    </html >
  )
}
