# Tech Devs Design System

**Architecture:** Monorepo (NPM Workspaces)  
**Core Structure:** `projects/*` (Consumers) + `packages/*` (Producers)  
**Styling Strategy:** React Components + CSS Tokens (4-Layer System)

---

## 1. Workspace Structure

The repository is divided into **Projects** (Deployable Sites) and **Packages** (Shared Code).

```
/workspace                     # ROOT (Git Repo)
├── package.json               # Workspace Manager
├── turbo.json                 # Build Pipeline Config
│
├── projects/                  # CONSUMERS (Your Client Work)
│   ├── my-cars/               # Next.js App
│   │   ├── package.json       # Dependencies: "@tech-devs/ui"
│   │   └── src/styles/
│   │       └── theme.css      # Project-specific token overrides
│   │
│   ├── nmj-website/           # Astro Site
│   │   └── src/styles/
│   │       └── theme.css      # NMJ brand overrides
│   │
│   └── clhub/                 # Next.js App
│       └── src/styles/
│           └── theme.css      # CLHub brand overrides
│
└── packages/                  # PRODUCERS (Shared Libraries)
    └── ui/                    # Design System
        ├── package.json       # Name: "@tech-devs/ui"
        ├── vite.config.ts     # Library Bundler
        ├── src/
        │   ├── tokens/        # Default tokens (baked-in theme)
        │   └── components/    # React Components
        └── dist/              # Build Artifacts (JS + CSS)
```

---

## 2. Shared Library: @tech-devs/ui

**Location:** `packages/ui`

**Purpose:** The single source of truth for all UI components and design tokens.

**Architecture:** React Components with CSS tokens. Components use plain class names (`.ui-button`, `.ui-card`) that reference CSS custom properties.

---

## 3. 4-Layer Token System

The design system uses a 4-layer token architecture:

| Layer | Location | Purpose | Example |
|-------|----------|---------|---------|
| **1. Primitive** | `tokens/size.css` | Raw values | `--size-4: 12px` |
| **2. Semantic** | `tokens/shape.css` | Purpose-based, references primitives | `--rad-corner-medium: var(--size-4)` |
| **3. Component** | `tokens/components.css` | Component-specific | `--nav-rail-width: var(--size-16)` |
| **4. Implementation** | `projects/*/styles/theme.css` | Project overrides | `--font-brand: 'Playfair Display'` |

**Key:** Layers 1-3 are in `packages/ui` (shared defaults). Layer 4 is in each project (brand overrides).

---

## 4. Theming

### Default Theme
The default theme is baked into `packages/ui`. All projects get this by default.

### Project Overrides
Each project can override tokens by importing a theme file **after** the UI package CSS:

```tsx
// projects/clhub/src/app/layout.tsx
import '@tech-devs/ui/style.css';  // Default tokens + components
import '../styles/theme.css';       // CLHub overrides (loaded last)
```

### Example Override File
```css
/* projects/clhub/src/styles/theme.css */
:root {
  --font-brand: 'Lora', serif;
  --font-plain: 'Roboto', sans-serif;
  --primary: #673ab7;
}
```

---

## 5. Usage

### Installation
```bash
npm install @tech-devs/ui
```

### Setup (Next.js)
Import the styles once in your root layout:

```tsx
// app/layout.tsx
import '@tech-devs/ui/style.css';
import { Button, Card } from '@tech-devs/ui';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### Using Components
```tsx
import { Button, Card, TextField } from '@tech-devs/ui';

export default function MyPage() {
  return (
    <Card>
      <TextField label="Email" />
      <Button variant="filled">Submit</Button>
      <Button variant="outlined">Cancel</Button>
    </Card>
  );
}
```

---

## 6. Development Guide

### Naming Conventions
- **Package Name:** `@tech-devs/ui`
- **CSS Class Prefix:** `.ui-` (e.g., `.ui-button`, `.ui-card`)
- **Token Prefix:** `--` (e.g., `--primary`, `--size-4`)

### Component Rules
1. **Tokens Only:** Never hardcode pixel values. Use `var(--token)` variables.
2. **Plain Class Names:** Use `.ui-button` not CSS Modules hashes (for bundled CSS compatibility).
3. **Forward Refs:** All components use `React.forwardRef` for DOM access.
4. **CVA Variants:** Use `class-variance-authority` for variant management.

---

## 7. Deployment (Vercel/Netlify)

Deploy multiple sites from this single repository by setting the **Root Directory**:

| Project | Root Directory |
|---------|----------------|
| MyCars | `projects/my-cars` |
| NMJ Website | `projects/nmj-website` |
| CLHub | `projects/clhub` |

---

## 8. Quick Reference

### Package Exports
```json
// packages/ui/package.json
{
  "name": "@tech-devs/ui",
  "exports": {
    ".": "./dist/index.js",
    "./style.css": "./dist/style.css"
  }
}
```

### Project Dependency
```json
// projects/clhub/package.json
{
  "dependencies": {
    "@tech-devs/ui": "*"
  }
}
```
