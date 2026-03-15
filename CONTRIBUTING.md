# Enterprise UX Contribution Guidelines

Welcome to the NextGen Enterprise AI UX framework. As a team bridging creative design and complex engineering, we adhere to strict standards.

## Design System Rules
- **Atomic Design:** All components must follow atomic design principles (atoms -> molecules -> organisms).
- **Styling:** Use Tailwind utility classes exclusively. Avoid raw CSS files unless absolutely necessary for WebGL overlays.
- **Animations:** All complex animations should use `framer-motion`. Ensure animations respect `prefers-reduced-motion`.

## Pull Request Process
1. Create a feature branch: `feature/ticket-name`.
2. Ensure `npm run lint` and `npm run test` pass perfectly.
3. Include screenshots/GIFs of UI changes in your PR description.
4. Require at least one review from a Lead UX Engineer.
