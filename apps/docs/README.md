# 📚 DeepAgent Documentation

This is the documentation site for DeepAgent, built with [Next.js](https://nextjs.org/) and [Fumadocs](https://fumadocs.vercel.app/).

## 🚀 Development

### Prerequisites
- Node.js 18+
- pnpm 8+ (recommended)

### Getting Started

```bash
# Install dependencies (from project root)
pnpm install

# Start development server
pnpm dev

# Or run from the docs directory
cd apps/docs
npm run dev
```

The documentation site will be available at [http://localhost:3002](http://localhost:3002).

## 🏗 Project Structure

```
apps/docs/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with RootProvider
│   │   ├── page.tsx          # Landing page
│   │   ├── globals.css       # Global styles
│   │   └── docs/
│   │       └── layout.tsx    # Documentation layout
├── components/
│   ├── ui/                   # UI components (Alert, etc.)
│   └── core/                 # Core components (Icons, etc.)
├── lib/                      # Utility libraries
└── package.json
```

## 🎨 Customization

### Landing Page
The main landing page (`src/app/page.tsx`) showcases:
- Hero section with project overview
- Statistics and key features
- Installation instructions for all package managers
- Featured integrations with descriptions
- Complete list of all 50+ packages
- Use cases and examples
- Call-to-action sections

### Styling
- Built with [Tailwind CSS](https://tailwindcss.com/)
- Custom color scheme with light/dark mode support
- Responsive design for all screen sizes
- Modern gradient backgrounds and shadows

### Components
- Custom UI components in `components/ui/`
- Icon components for package managers (npm, yarn, pnpm)
- Alert components for highlighting important information
- Responsive grid layouts for package listings

## 📝 Adding Content

### New Pages
To add new documentation pages:
1. Create MDX files in the appropriate directory
2. Update the navigation structure in `lib/source.ts`
3. Follow the existing documentation patterns

### Package Documentation
Each package should include:
- Installation instructions
- Basic usage examples
- API reference
- Configuration options
- Error handling examples

## 🛠 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Quality
npm run lint         # Run ESLint
npm run clean        # Clean build artifacts

# Fumadocs
npm run postinstall  # Process MDX files
```

## 📦 Dependencies

### Core
- **Next.js 15.5.3** - React framework
- **React 19.1.1** - UI library
- **TypeScript 5.5.4** - Type safety

### Documentation
- **fumadocs-ui** - Documentation UI components
- **fumadocs-core** - Core documentation functionality
- **fumadocs-mdx** - MDX processing

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **class-variance-authority** - CSS class variants
- **clsx** - Conditional classes
- **tailwind-merge** - Merge Tailwind classes

### Icons & UI
- **lucide-react** - Beautiful icons
- **@types/mdx** - MDX type definitions

## 🚀 Deployment

The documentation site can be deployed to any platform that supports Next.js:

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build command
npm run build

# Publish directory
.next
```

### Docker
```bash
# Build image
docker build -t deepagent-docs .

# Run container
docker run -p 3002:3002 deepagent-docs
```

## 🤝 Contributing

When contributing to the documentation:

1. **Follow the established patterns** - Keep consistency with existing pages
2. **Test locally** - Run `npm run dev` to preview changes
3. **Update navigation** - Add new pages to the navigation structure
4. **Include examples** - Every integration should have usage examples
5. **Mobile-first** - Ensure responsive design on all screen sizes

## 📋 TODO

- [ ] Add search functionality
- [ ] Create individual package documentation pages
- [ ] Add interactive code examples
- [ ] Implement analytics tracking
- [ ] Add feedback system
- [ ] Create contribution templates
- [ ] Add performance monitoring

---

For more information about the DeepAgent project, see the [main README](../../README.md).
