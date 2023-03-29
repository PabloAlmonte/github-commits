import './globals.css'

export const metadata = {
  title: 'Github commits',
  description: 'Website made by Pablo Almonte as a test asked by FulltimeForce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
