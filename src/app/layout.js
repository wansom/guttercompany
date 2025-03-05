import './globals.css'

export const metadata = {
  title: 'The Gutter Company',
  description: 'Professional gutter services in Minneapolis',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Add any font links you're using */}
      </head>
      <body className="antialiased">
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
