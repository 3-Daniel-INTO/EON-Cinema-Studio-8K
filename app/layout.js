import './globals.css';

export const metadata = {
  title: 'EON | SUPREME CINEMATIC STUDIO',
  description: 'Sovereign 16K Hollywood-Grade AI Orchestrator',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, background: '#000', color: '#fff', overflowX: 'hidden' }}>
        <div className="eon-anamorphic-overlay" />
        {children}
      </body>
    </html>
  );
}
