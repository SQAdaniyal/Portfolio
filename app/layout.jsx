import '../styles/globals.css'
export const metadata = {
  title: 'Muhammad Daniyal Asif — Executive SQA Engineer',
  description: 'Portfolio - QA Engineer, Automation & Manual Testing, Team Lead'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
