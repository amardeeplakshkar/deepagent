

<div align="center">
  <h1>🤖 DeepAgent</h1>
  <p><strong>SDK Agéntico para Aplicaciones Modernas</strong></p>
  <p>Un SDK integral de TypeScript para construir agentes inteligentes con más de 50 integraciones preconstruidas</p>
  
  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white)](https://nodejs.org/)
</div>

## 🚀 Características

- **50+ Integraciones Preconstruidas** - Conéctate a APIs y servicios populares al instante
- **100% TypeScript** - Seguridad de tipos completa con definiciones de tipos integrales
- **Sin Configuración** - Empieza en minutos con valores predeterminados sensatos
- **Compatibilidad Universal** - Funciona en Node.js, navegadores y entornos edge
- **Listo para Producción** - Probado rigurosamente con manejo de errores integral
- **Arquitectura Modular** - Instala solo lo que necesitas

## 📦 Inicio Rápido

### Instalación

Instala cualquier paquete de DeepAgent usando tu gestor de paquetes preferido:

```bash
# npm
npm install @deepagent/github

# yarn
yarn add @deepagent/github

# pnpm
pnpm add @deepagent/github
```

### Uso Básico

```typescript
import { GitHubClient } from '@deepagent/github'

// Inicializa el cliente
const github = new GitHubClient({
  apiKey: process.env.GITHUB_TOKEN
})

// Obtener información del repositorio
const repo = await github.getRepository({
  owner: 'amardeeplakshkar',
  repo: 'deepagent'
})

// Crear un issue
const issue = await github.createIssue({
  owner: 'amardeeplakshkar',
  repo: 'deepagent',
  title: 'New feature request',
  body: 'Description of the feature'
})
```

## 🛠 Integraciones Disponibles

DeepAgent proporciona más de 50 integraciones preconstruidas en varias categorías:

### 🤖 IA y Aprendizaje Automático
- `@deepagent/openai` - Modelos GPT de OpenAI
- `@deepagent/midjourney` - Generación de imágenes con IA
- `@deepagent/xsai` - Integración con xAI

### 🔍 Búsqueda y Datos
- `@deepagent/google-custom-search` - API de Búsqueda de Google
- `@deepagent/bing` - API de Búsqueda de Bing
- `@deepagent/brave-search` - Búsqueda centrada en la privacidad
- `@deepagent/duck-duck-go` - Búsqueda de DuckDuckGo
- `@deepagent/tavily` - Búsqueda y recuperación web
- `@deepagent/searxng` - Motor de metabúsqueda
- `@deepagent/exa` - Búsqueda semántica

### 📊 Negocios y CRM
- `@deepagent/airtable` - Gestión de bases de datos
- `@deepagent/notion` - Automatización de espacios de trabajo
- `@deepagent/apollo` - Inteligencia de ventas
- `@deepagent/clearbit` - Datos de empresas
- `@deepagent/hunter` - Buscador de emails
- `@deepagent/leadmagic` - Generación de leads
- `@deepagent/people-data-labs` - Datos de personas
- `@deepagent/predict-leads` - Predicción de leads
- `@deepagent/proxycurl` - Datos de LinkedIn
- `@deepagent/rocketreach` - Información de contacto
- `@deepagent/social-data` - Datos de redes sociales
- `@deepagent/zoominfo` - Base de datos B2B

### 💬 Comunicación
- `@deepagent/slack` - Colaboración de equipos
- `@deepagent/twilio` - SMS y voz
- `@deepagent/novu` - Notificaciones

### 📱 Redes Sociales
- `@deepagent/twitter` - API de Twitter/X
- `@deepagent/reddit` - Integración con Reddit
- `@deepagent/youtube` - Plataforma de video

### 🌐 Web y Contenido
- `@deepagent/firecrawl` - Scraping web
- `@deepagent/diffbot` - Extracción de datos web
- `@deepagent/github` - Gestión de repositorios
- `@deepagent/google-drive` - Almacenamiento de archivos
- `@deepagent/google-docs` - Edición de documentos

### 📖 Conocimiento e Investigación
- `@deepagent/wikipedia` - Datos de enciclopedias
- `@deepagent/arxiv` - Papers académicos
- `@deepagent/wolfram-alpha` - Inteligencia computacional
- `@deepagent/hacker-news` - Noticias tecnológicas
- `@deepagent/wikidata` - Conocimiento estructurado

### 🔧 Utilidades
- `@deepagent/calculator` - Operaciones matemáticas
- `@deepagent/weather` - Datos meteorológicos
- `@deepagent/open-meteo` - APIs meteorológicas
- `@deepagent/e2b` - Entorno aislado de ejecución de código
- `@deepagent/gravatar` - Servicio de avatares
- `@deepagent/jina` - Búsqueda neuronal
- `@deepagent/jigsawstack` - Kit de herramientas API
- `@deepagent/openapi-to-ts` - Generación de TypeScript
- `@deepagent/perigon` - API de noticias
- `@deepagent/polygon` - Datos financieros
- `@deepagent/stdlib` - Biblioteca estándar
- `@deepagent/typeform` - Constructor de formularios

## 🏗 Estructura del Proyecto

Este monorepo está construido con [Turborepo](https://turbo.build/) e incluye:

### Aplicaciones
- `@deepagent/docs` - Sitio de documentación construido con Next.js y Fumadocs

### Paquetes
- Más de 50 paquetes de integración individual bajo el espacio de nombres `@deepagent/*`
- Cada paquete tiene versión y publicación independientes
- Soporte completo para TypeScript con definiciones de tipos integrales

## 🎯 Casos de Uso

### Automatización Impulsada por IA
Construye agentes inteligentes que pueden:
- Automatizar revisiones de código y gestión de PRs con la integración de GitHub
- Crear sistemas de notificación inteligentes en Slack, email y SMS
- Generar y publicar contenido en múltiples plataformas
- Orquestar flujos de trabajo complejos con múltiples integraciones de API

### Inteligencia de Datos y Análisis
Agrega y analiza datos de múltiples fuentes:
- Análisis de sentimiento en redes sociales en Twitter, Reddit y YouTube
- Investigación de mercado y seguimiento de competidores
- Creación de bases de conocimiento a partir de scraping web y APIs de investigación
- Paneles de inteligencia empresarial en tiempo real

### Gestión de Relaciones con Clientes
Mejora tus flujos de trabajo de CRM:
- Generación y calificación automatizada de leads
- Enriquecimiento de contactos desde múltiples fuentes de datos
- Campañas de alcance personalizadas
- Inteligencia de ventas y gestión de embudos

## 🛠 Desarrollo

### Requisitos Previos
- Node.js 18+ 
- pnpm 8+ (recomendado)

### Configuración

```bash
# Clona el repositorio
git clone https://github.com/amardeeplakshkar/deepagent.git
cd deepagent

# Instala las dependencias
pnpm install

# Inicia el servidor de desarrollo
pnpm dev
```

### Comandos Útiles

```bash
# Compila todos los paquetes
pnpm build

# Ejecuta las pruebas
pnpm test

# Analiza el código
pnpm lint

# Formatea el código
pnpm format

# Limpia todos los artefactos de compilación
pnpm clean

# Genera un changeset
pnpm changeset

# Versiona los paquetes
pnpm version-packages

# Publica los paquetes
pnpm release
```

## 📚 Documentación

- **[Sitio de Documentación](http://localhost:3002)** - Guías integrales y referencias de API
- **[Ejemplos](./examples)** - Ejemplos de código listos para usar
- **[Guía de Contribución](./CONTRIBUTING.md)** - Cómo contribuir a DeepAgent

## 🤝 Contribuciones

¡Damos la bienvenida a las contribuciones! Por favor, consulta nuestra [Guía de Contribución](./CONTRIBUTING.md) para más detalles.

### Cómo Contribuir

1. **Haz un fork del repositorio**
2. **Crea una rama de características**: `git checkout -b feature/amazing-feature`
3. **Realiza tus cambios** y agrega pruebas
4. **Ejecuta las pruebas**: `pnpm test`
5. **Confirma tus cambios**: `git commit -m 'Add amazing feature'`
6. **Sube a la rama**: `git push origin feature/amazing-feature`
7. **Abre un Pull Request**

### Agregar Nuevas Integraciones

Para agregar una nueva integración:

1. Crea un nuevo paquete en `packages/[service-name]/`
2. Sigue la estructura y convenciones de los paquetes existentes
3. Agrega tipos de TypeScript integrales
4. Incluye pruebas y documentación
5. Actualiza este README con la nueva integración

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](./LICENSE) para más detalles.

## 👨‍💻 Autor

**Amardeep Lakshkar**
- Sitio web: [amardeep.space](https://amardeep.space)
- GitHub: [@amardeeplakshkar](https://github.com/amardeeplakshkar)
- Twitter: [@amardeeplakshkar](https://twitter.com/amardeeplakshkar)

## 🙏 Agradecimientos

- Construido con [Turborepo](https://turbo.build/) para una gestión óptima del monorepo
- Documentación potenciada por [Fumadocs](https://fumadocs.vercel.app/)
- Componentes de UI con [Tailwind CSS](https://tailwindcss.com/)
- Iconos por [Lucide React](https://lucide.dev/)

## 📈 Estadísticas

- **Más de 50 Integraciones** en múltiples categorías
- **100% TypeScript** para seguridad de tipos completa
- **Listo para Producción** con manejo de errores integral
- **Licenciado bajo MIT** y de código abierto

## 🚢 Publicación

### Versionado y Publicación de Paquetes

La publicación de paquetes está configurada usando [Changesets](https://github.com/changesets/changesets) para versionado y lanzamientos automatizados:

```bash
# Genera un changeset
pnpm changeset

# Versiona los paquetes basándose en los changesets
pnpm version-packages

# Publica en npm
pnpm release
```

### Lanzamientos Automatizados

El proyecto incluye lanzamientos automatizados de npm mediante [GitHub Actions](https://github.com/changesets/action). Para habilitarlo:

1. Crea `NPM_TOKEN` y `GITHUB_TOKEN` en la configuración del repositorio
2. Instala el [bot de Changesets](https://github.com/apps/changeset-bot)
3. Haz push de cambios para activar el flujo de trabajo

Para información detallada, consulta la [documentación de changesets](https://github.com/changesets/changesets/blob/main/docs/automating-changesets.md).

---

<div align="center">
  <p>Hecho con ❤️ por <a href="https://amardeep.space">Amardeep Lakshkar</a></p>
  <p>⭐ ¡Dale estrella a este repositorio si te resulta útil!</p>
</div>
