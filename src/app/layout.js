import '../styles/global.css';

export const metadata = {
  title: 'Portfólio de Bruno',
  description: 'Projetos e experiências de Bruno',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}