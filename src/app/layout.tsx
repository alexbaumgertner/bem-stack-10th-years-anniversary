
export const metadata = {
  title: 'BEM full stack',
  description: 'BEM full stack: 10th years usage',
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
