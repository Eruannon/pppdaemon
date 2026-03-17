
# Poradnia Psychologiczno-Pedagogiczna "Magnolia"

## 🚀 Quick Start

| Command | Description |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start development server (localhost:3000) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint and TypeScript checks |

## 🛠 Tech Stack

*   **Core:** Next.js 15 (App Router), TypeScript, React 19
*   **Styling:** Tailwind CSS 4, Shadcn UI
*   **Animation:** Framer Motion, GSAP
*   **Utils:** Lucide React (Icons), `next/font` (Poppins, DM Sans)

## � Project Structure

```text
.
├── app/                        # Next.js App Router (FS-based routing)
│   ├── layout.tsx              # Root layout & Metadata
│   ├── page.tsx                # Home page
│   └── [routes]/               # Specific subpages (e.g., ados-2, oferta)
│
├── components/                 # React Components
│   ├── home/                   # Home page specific components
│   ├── sections/               # Reusable page sections (Hero, Features)
│   ├── layout-components/      # Structural elements (Nav, Footer)
│   └── ui/                     # Shadcn UI primitives
│
├── lib/                        # Utilities & Configuration
│   ├── providers/              # React Context Providers (e.g. Accessibility)
│   └── utils.ts                # Tailwind merger & helpers
│
└── public/                     # Static assets
    ├── assets/                 # Active images/videos
    └── _trash/                 # Archived/Unused assets (safe to delete)
```

## ℹ️ Developer Notes

*   **Strict Mode:** `noUnusedLocals` and `noUnusedParameters` are enabled in `tsconfig.json`. Build will fail on unused code.
*   **Accessibility:** Global `AccessibilityPanel` handles high-contrast, font-sizing, and animation toggles via Context API (`lib/providers/accessibility-context.tsx`).
*   **Optimization:** Large media assets are lazy-loaded. Videos use `poster` images for improved LCP.
