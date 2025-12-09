# Portfolio Site - AI Coding Instructions

## Project Overview
This is a personal portfolio website built with React 19, TypeScript, and Vite. It uses Tailwind CSS v4 for styling.

## Tech Stack
- **Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Linting**: ESLint

## Core Workflows
- **Development**: `npm run dev` (starts local server)
- **Build**: `npm run build` (type checks and builds for production)
- **Preview**: `npm run preview` (preview production build)

## Project Structure
- `src/` - Source code
  - `App.tsx` - Main application component
  - `main.tsx` - Entry point
  - `index.css` - Global styles (Tailwind imports go here)
- `public/` - Static assets (images, fonts, etc.)
- `vite.config.ts` - Vite configuration

## Coding Conventions
- **Components**: Functional components with TypeScript interfaces for props.
- **Styling**: Use Tailwind utility classes. Avoid custom CSS files unless necessary for complex animations or overrides.
- **State Management**: Use React hooks (`useState`, `useEffect`, etc.).
- **Types**: Explicitly define types for props and state. Avoid `any`.

## Tailwind CSS v4 Setup
- Ensure `@tailwindcss/vite` is added to `vite.config.ts` plugins.
- Import tailwind in `src/index.css`: `@import "tailwindcss";`

## Example: Component Structure
```tsx
import { useState } from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button 
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
```
