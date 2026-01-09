# Fernando Bendala - Portfolio

Personal portfolio website showcasing my work as a Frontend Architect & Tech Lead.

**Live site:** [ferbendala.dev](https://ferbendala.dev)

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build:** Vite
- **Styling:** Sass/SCSS Modules
- **i18n:** react-i18next (EN/ES/CA)
- **State:** Zustand
- **Forms:** EmailJS

## Features

- Multi-language support (English, Spanish, Catalan)
- Dark/Light theme
- Responsive design
- SEO optimized (Open Graph, Twitter Cards, sitemap)
- Performance optimized (WebP images, font subsetting)

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm start

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
src/
├── assets/
│   ├── fonts/          # Poppins font files
│   ├── images/
│   │   ├── svg/        # Icons and logos
│   │   └── webp/       # Optimized images
│   └── scss/           # Global styles, mixins, variables
├── components/         # Reusable UI components
├── content/            # Page sections (Header, Skills, About, Work, Contact)
├── hooks/              # Custom React hooks
├── localization/       # i18n translations (en, es, ca)
└── stores/             # Zustand stores (theme, language)

public/
├── favicon.svg
├── og-image.jpg        # Social media preview
├── robots.txt
├── sitemap.xml
└── *.pdf               # CV downloads
```

## License

MIT
