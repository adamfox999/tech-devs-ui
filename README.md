# @tech-devs/ui

**Tech Devs Design System** — Shared UI components and design tokens.

## Installation

```bash
npm install @tech-devs/ui
```

## Usage

### Setup (Next.js / Astro / Angular)

Import components and styles in your root layout:

```tsx
import { Button, Card, Dialog } from '@tech-devs/ui';
import '@tech-devs/ui/style.css';
```

### Theming

Apply a theme by setting `data-theme` on the `<body>`:

```html
<body data-theme="clhub">
```

Each project provides its own theme file that overrides base tokens.

## Exports

| Export | Description |
|--------|-------------|
| `@tech-devs/ui` | All components (Button, Card, Dialog, etc.) |
| `@tech-devs/ui/style.css` | Tokens + component styles |
| `@tech-devs/ui/tokens` | Tokens only (no component styles) |

## Components

### Button

```tsx
import { Button } from '@tech-devs/ui';

<Button variant="filled">Save</Button>
<Button variant="tonal" icon={<PlusIcon />}>Add</Button>
<Button variant="outlined" size="lg">Learn More</Button>
```

**Variants:** `filled`, `tonal`, `outlined`, `elevated`, `text`  
**Sizes:** `xs`, `sm`, `md`, `lg`, `xl`

### Card

```tsx
import { Card, CardHeader, CardHeadline, CardContent, CardActions } from '@tech-devs/ui';

<Card variant="elevated">
  <CardHeader>
    <CardHeadline>Card Title</CardHeadline>
  </CardHeader>
  <CardContent>Body text here</CardContent>
  <CardActions>
    <Button variant="text">Action</Button>
  </CardActions>
</Card>
```

**Variants:** `elevated`, `filled`, `outlined`

### Dialog

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@tech-devs/ui';

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
    </DialogHeader>
    <p>Dialog content here</p>
  </DialogContent>
</Dialog>
```

## Development

```bash
# Build the package
npm run build

# Watch mode
npm run dev
```

## Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| CSS Class | `.ui-{component}` | `.ui-button`, `.ui-card` |
| CSS Modifier | `.ui-{component}--{variant}` | `.ui-button--filled` |
| CSS Element | `.ui-{component}__{element}` | `.ui-button__icon` |
| Token | `--{name}` | `--primary`, `--size-4` |
