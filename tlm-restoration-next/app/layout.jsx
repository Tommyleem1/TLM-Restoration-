// app/layout.jsx
import '../styles/globals.css';

export const metadata = {
  title: 'TLM Restoration | Restoring Properties. Restoring Peace of Mind.',
  description: '24/7 Emergency restoration services across Greater Melbourne and Victoria.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
