import './globals.css';


export const metadata = {
  title: 'Bruno Teixeira',
  description: 'Projetos e experiências de Bruno',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}