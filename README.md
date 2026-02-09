# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Project Structure

- src/App.jsx: App-level state orchestration and layout wiring.
- src/components/: UI sections split into focused components (TopBar, Hero, Calculator, Result).
- src/components/*.css: Component-scoped styles (global class names preserved).
- src/hooks/usePercentageCalculator.js: Calculation and formatting logic.
- src/config/examples.js: Example presets data.
- src/utils/: Shared utilities (formatters, result actions).
- src/translations.js: Localization strings.
- src/index.css: Global styles and background.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
