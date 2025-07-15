# 🚀 Bruno Teixeira Lopes - Portfolio

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Brunotlps/noname-1)

Um portfólio moderno e interativo desenvolvido com Next.js 15, React 19 e Framer Motion. Apresenta animações fluidas, design responsivo e uma experiência de usuário envolvente.

## 🖥️ Demo

[Ver Portfolio Online](https://SEU_DOMINIO.vercel.app)

## ✨ Características

- **🎨 Design Moderno**: Interface limpa e profissional com gradientes e animações
- **📱 Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **🎬 Animações Fluidas**: Transições suaves usando Framer Motion
- **⚡ Performance**: Built com Next.js 15 para máxima velocidade
- **🎯 Navegação Intuitiva**: Menu lateral com estados ativos
- **🌟 Animações Interativas**: Elementos animados com p5.js

## 🛠️ Tecnologias Utilizadas

- **Frontend**: Next.js 15, React 19
- **Animações**: Framer Motion, p5.js
- **Estilização**: CSS Modules, CSS Grid/Flexbox
- **Ícones**: React Icons
- **Deploy**: Vercel

## 🚀 Instalação e Uso

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Executar localmente

```bash
# Clone o repositório
git clone https://github.com/Brunotlps/noname-1.git

# Entre no diretório
cd noname-1

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.js          # Layout principal
│   └── page.js            # Página inicial
├── components/
│   ├── Animation.js       # Animações p5.js
│   ├── ClientOnlyAnimation.js
│   ├── Contact.js         # Seção de contato
│   ├── Menu.js            # Navegação lateral
│   ├── Presentation.js    # Apresentação pessoal
│   └── Projects.js        # Galeria de projetos
├── data/
│   └── projects.json      # Dados dos projetos
└── styles/
    └── globals.css        # Estilos globais
```

## 🎯 Seções do Portfolio

1. **Home**: Apresentação pessoal com animações interativas
2. **Projects**: Galeria de projetos com descrições e links
3. **Contact**: Informações de contato e redes sociais

## 🚀 Deploy na Vercel

### Método 1: Deploy Automático (Recomendado)

1. Faça push do código para o GitHub
2. Conecte sua conta GitHub à Vercel
3. Importe o repositório na Vercel
4. A Vercel detectará automaticamente que é um projeto Next.js
5. Deploy será feito automaticamente

### Método 2: Vercel CLI

```bash
# Instale a CLI da Vercel
npm i -g vercel

# Execute o deploy
vercel
```

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run start    # Servidor de produção
npm run lint     # Verificar código
```

## 🎨 Customização

### Projetos
Edite o arquivo `src/data/projects.json` para adicionar/remover projetos:

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Seu Projeto",
      "description": "Descrição do projeto",
      "technologies": ["React", "Next.js"],
      "github": "link-github",
      "demo": "link-demo"
    }
  ]
}
```

### Estilos
Modifique `src/styles/globals.css` para personalizar:
- Cores e gradientes
- Fontes
- Animações
- Layout responsivo

## 🐛 Relatório de Bugs

Encontrou um bug? Abra uma [issue](https://github.com/Brunotlps/noname-1/issues) descrevendo:
- Passos para reproduzir
- Comportamento esperado
- Comportamento atual
- Screenshots (se aplicável)

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Bruno Teixeira Lopes**
- GitHub: [@Brunotlps](https://github.com/Brunotlps)
- LinkedIn: [Bruno Teixeira Lopes](https://linkedin.com/in/brunotlps)
- Email: seu.email@exemplo.com

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) pela incrível framework
- [Framer Motion](https://www.framer.com/motion/) pelas animações
- [Vercel](https://vercel.com/) pelo hosting gratuito
- [p5.js](https://p5js.org/) pelas animações interativas

---

⭐ Se este projeto te ajudou, deixe uma estrela!
