# AGENTS.md

## Purpose

This file gives coding agents and collaborators the project-specific context they need to work safely and consistently in this repository.

Use this file as the first source of truth for:

- how the app is structured
- how to run and verify changes
- which conventions matter here
- what kinds of edits should be avoided

If the code and this file disagree, follow the code and update this file.

## Project Summary

- Project: `heltech-online-shop`
- Type: Frontend web app
- Stack: React 19, TypeScript, Vite, React Router
- Styling: CSS Modules plus shared global styles in `src/styles`
- Testing: Vitest + Testing Library
- Tooling: ESLint, Prettier, Husky, lint-staged

## Quick Start

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build for production: `npm run build`
- Run tests: `npm run test`
- Run linting: `npm run lint`
- Auto-fix lint issues: `npm run lint:fix`
- Format files: `npm run format`

## Project Structure

- `src/App.tsx`: main application shell and routing entry
- `src/main.tsx`: app bootstrap
- `src/components`: shared UI components
- `src/features`: feature-oriented pages, logic, and related subcomponents
- `src/hooks`: shared React hooks
- `src/styles`: global CSS, tokens, reset, typography
- `src/testing`: test utilities and example tests
- `src/types`: shared TypeScript types
- `src/utils`: shared utilities
- `public`: static public assets

## Feature Organization

Prefer keeping feature-specific code inside the relevant feature folder.

Examples in this repo:

- `src/features/products`
- `src/features/cart`
- `src/features/contact`
- `src/features/checkout`

When adding new functionality:

- put shared UI in `src/components`
- put feature-only UI, services, hooks, or context inside that feature folder
- keep types close to the feature unless broadly reused

## Coding Guidelines

- Use TypeScript throughout; avoid `any` unless there is a documented reason.
- Follow existing naming patterns before introducing a new one.
- Prefer small, focused components over large multi-purpose components.
- Reuse existing tokens, typography, and layout styles before creating new global styles.
- Preserve the current visual language unless the task explicitly asks for redesign work.
- Keep components and utilities easy to test.
- Add brief comments only where logic is not obvious from the code itself.

## React Guidance

- Prefer functional components and existing project patterns.
- Keep state as local as practical.
- Do not introduce new abstractions unless repetition or complexity justifies them.
- When changing routing, verify page-level behavior and navigation flows.
- When adding hooks or context, check whether similar logic already exists in `src/hooks` or a feature folder.

## Styling Guidance

- Check `src/styles/tokens.css`, `src/styles/typography.css`, and `src/styles/index.css` before adding new colors, spacing, or font rules.
- Prefer CSS Modules for component-specific styling.
- Keep responsive behavior in mind for all UI changes.
- Avoid inline styles unless dynamic behavior makes them the clearest option.

## Testing Expectations

- Add or update tests when behavior changes.
- Prefer Testing Library patterns that reflect user behavior.
- Run at least the relevant tests for the area you changed.
- For broader or risky changes, run `npm run test`, `npm run lint`, and `npm run build`.

## Safe Change Rules

- Do not delete or rename large folders without checking for imports and routes.
- Do not replace project-wide styling patterns casually.
- Do not add new dependencies unless the value is clear and the existing stack cannot cover the need.
- Do not rewrite unrelated files while solving a focused task.

## Pull Request Checklist

Before finishing work, aim to confirm:

- the feature or fix works locally
- linting passes for changed files
- tests cover the changed behavior where appropriate
- no obvious regressions were introduced in routing, styling, or state handling

## Good Requests For An Agent

- `Fix the cart total so it updates when quantity changes, and add a test`
- `Explain how products are fetched in this repo`
- `Refactor the contact form validation without changing the UI`
- `Add a loading state to the product detail page`
- `Review this branch for bugs and risky changes`

## Template For Future Projects

Copy this structure into a new repo and update these sections first:

1. `Project Summary`
2. `Quick Start`
3. `Project Structure`
4. `Coding Guidelines`
5. `Testing Expectations`
6. `Safe Change Rules`

Minimal starter version:

```md
# AGENTS.md

## Purpose

Describe what this repo is and how agents should use this file.

## Project Summary

- Project:
- Type:
- Stack:
- Styling:
- Testing:

## Quick Start

- Install:
- Dev:
- Build:
- Test:
- Lint:

## Project Structure

- `src/`:
- `components/`:
- `features/`:

## Coding Guidelines

- Follow existing patterns.
- Keep changes focused.
- Prefer typed, testable code.

## Testing Expectations

- Update tests when behavior changes.

## Safe Change Rules

- Avoid unrelated refactors.
- Avoid new dependencies unless necessary.
```
