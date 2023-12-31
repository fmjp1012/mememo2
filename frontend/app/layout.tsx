import './globals.css'
import type { Metadata } from 'next'
import LoginHeader from './login/LoginHeader'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-gray-300">
        <LoginHeader />
        {children}
      </body>
    </html>
  )
}
