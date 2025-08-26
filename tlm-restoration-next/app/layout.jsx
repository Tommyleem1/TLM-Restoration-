export const metadata = {
  title: "TLM Restoration | Restoring Properties. Restoring Peace of Mind.",
  description: "24/7 Emergency restoration services across Greater Melbourne and Victoria.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <link href="/styles.css" rel="stylesheet" />
        <link rel="stylesheet" href="/styles/globals.css" />
        {children}
      </body>
    </html>
  );
}
