# @tech-devs/ui Component Guidelines

## Architecture: React Components + Vanilla CSS Tokens

**This library uses:**
- ✅ React Components (`.tsx`)
- ✅ Vanilla CSS with CSS Custom Properties (tokens)
- ✅ Light DOM (standard React rendering)
- ❌ No Shadow DOM
- ❌ No Web Components / Custom Elements
- ❌ No CSS-in-JS

---

## Token Architecture

### 1. Primitives (Raw Values)

*These files define the raw values. The AI will rarely use these directly.*

* **`size.css`**: Raw math (`--size-1`, `--size-2`)
* **`motion.css`**: Animations (`--ease-out`, `--duration-fast`)
* **`elevation.css`**: Shadows (`--shadow-1`, `--shadow-2`)
* **`states.css`**: Interaction opacity (`--hover-state`, `--disabled-opacity`)

### 2. Semantics (Design Decisions)

*These are the most common tokens used in components.*

* **`colors.css`**: Brand intent (`--primary`, `--surface`, `--error`)
* **`shape.css`**: Roundness (`--rad-corner-medium`, `--rad-corner-full`)
* **`spacing.css`**: Layout logic (`--space-4`, `--padding-medium`)
* **`typography.css`**: Text classes (`.display-large`, `.body-medium`)

### 3. Component Hooks (The Bridge)

* **`components.css`**: Component-specific variable overrides
* Maps semantic tokens to component hooks
* Example: `:root { --button-radius: var(--rad-corner-medium); }`

---

# AI Generation Rules: @tech-devs/ui

**Role:** You are a Design System Architect generating **React Components** for `@tech-devs/ui`.

**Stack:** React + Vanilla CSS with token hooks. No Shadow DOM, no Web Components.

---

## 1. Context Awareness (Token Sources)

Before building a component, check existing token files:

* **Colors:** `tokens/colors.css` → `--primary`, `--surface`, `--outline`
* **Shape:** `tokens/shape.css` → `--rad-corner-*`
* **Spacing:** `tokens/spacing.css` → `--padding-*`, `--space-*`
* **Typography:** `tokens/typography.css` → `.display-large`, `.body-medium`
* **Component Hooks:** `tokens/components.css` → `--card-padding`, `--btn-radius`

---

## 2. Component Template

### A. React Component (`Component.tsx`)

```tsx
"use client";

import * as React from "react";
import "./Component.css";

export interface ComponentProps {
  children?: React.ReactNode;
  variant?: "filled" | "outlined" | "text";
  className?: string;
}

export const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ children, variant = "filled", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`ui-component ui-component--${variant} ${className || ""}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Component.displayName = "Component";
```

### B. CSS Styling (`Component.css`)

**Use the Hook Pattern:** `var(--hook, var(--semantic-fallback))`

```css
/* Component.css */
.ui-component {
  /* Color from tokens/colors.css */
  background-color: var(--component-bg, var(--surface));
  color: var(--component-text, var(--onSurface));
  
  /* Shape from tokens/shape.css */
  border-radius: var(--component-radius, var(--rad-corner-medium));
  
  /* Spacing from tokens/spacing.css */
  padding: var(--component-padding, var(--space-4));
  
  /* Motion from tokens/motion.css */
  transition: background-color var(--duration-fast) var(--ease-out);
}

/* Variants */
.ui-component--filled {
  background-color: var(--component-filled-bg, var(--primary));
  color: var(--component-filled-text, var(--onPrimary));
}

.ui-component--outlined {
  background-color: transparent;
  border: 1px solid var(--component-border, var(--outline));
}

/* States */
.ui-component:hover {
  background-color: var(--component-hover-bg, var(--surfaceContainerHigh));
}

.ui-component:disabled,
.ui-component[data-disabled="true"] {
  opacity: var(--disabled-opacity, 0.38);
  pointer-events: none;
}
```

### C. Index Export (`index.ts`)

```typescript
export { Component } from "./Component";
export type { ComponentProps } from "./Component";
```

---

## 3. File Structure

When asked to "Create a Badge component", generate:

```
packages/ui/src/components/Badge/
├── Badge.tsx      ← React component
├── Badge.css      ← Vanilla CSS with tokens
└── index.ts       ← Exports
```

**Reminder:** Add `export * from './components/Badge'` to the main `src/index.ts`.

---

## 4. Naming Conventions

| Item | Convention | Example |
|------|------------|---------|
| Component file | PascalCase | `NavigationRail.tsx` |
| CSS file | PascalCase | `NavigationRail.css` |
| CSS class (root) | `ui-{name}` | `.ui-navigation-rail` |
| CSS class (child) | `ui-{name}__{child}` | `.ui-navigation-rail__item` |
| CSS class (variant) | `ui-{name}--{variant}` | `.ui-navigation-rail--expanded` |
| Data attributes | `data-{state}` | `data-active="true"` |

---

## 5. Why React + Vanilla CSS?

| Approach | Pros | Cons |
|----------|------|------|
| **React + CSS (Our Choice)** | SSR-safe, tokens cascade, simple | React-only |
| Web Components | Framework-agnostic | SSR issues, hydration conflicts |
| CSS-in-JS | Co-located styles | Runtime cost, bundle size |
| Tailwind | Rapid prototyping | Less semantic, token mapping harder |

**Decision:** All our projects (CLHub, MyCars, NMJ) use React/Next.js. Simplicity wins.