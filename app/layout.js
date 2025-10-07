import './globals.css'

export const metadata = {
  title: 'Muhammad Daniyal Asif — Portfolio',
  description: 'Executive SQA Engineer portfolio built with Next.js + Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
