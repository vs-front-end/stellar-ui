# Contributing to Stellar UI

Thank you for considering contributing to Stellar UI! We welcome contributions from the community.

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/vs-front-end/stellar-ui.git
   cd stellar-ui
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Build all packages:
   ```bash
   npm run build
   ```

5. Start the documentation site:
   ```bash
   npm run start:web
   ```

## Project Structure

```
stellar-ui/
├── apps/
│   └── docs-web/        # Documentation website
├── packages/
│   ├── shared/          # Shared tokens and utilities
│   ├── web/             # React web components
│   └── mobile/          # React Native components
└── turbo.json           # Monorepo configuration
```

## Development Workflow

### Working on Components

1. Navigate to the appropriate package:
   ```bash
   cd packages/web  # or packages/mobile
   ```

2. Start development mode:
   ```bash
   npm run dev
   ```

3. Make your changes in `src/components/`

4. Test in the docs app by importing your component

### Code Quality

Before submitting a PR, ensure your code passes all checks:

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

### Creating a New Component

1. Create a new directory in `packages/web/src/components/ComponentName/`

2. Create `index.tsx`:
   ```tsx
   import * as React from 'react';
   import { cn } from '@stellar-ui/shared';
   
   interface ComponentNameProps {
     // Your props
   }
   
   export function ComponentName({ ...props }: ComponentNameProps) {
     return <div {...props}>Component</div>;
   }
   ```

3. Export from `packages/web/src/components/index.ts`:
   ```tsx
   export * from './ComponentName';
   ```

4. Add documentation in `apps/docs-web/src/pages/Preview/components/ComponentName/`

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Examples:
```
feat(web): add Dropdown component
fix(shared): resolve theme switching bug
docs: update installation guide
```

## Pull Request Process

1. Create a feature branch:
   ```bash
   git checkout -b feat/your-feature-name
   ```

2. Make your changes following our code style

3. Commit with conventional commit messages

4. Push to your fork:
   ```bash
   git push origin feat/your-feature-name
   ```

5. Open a Pull Request with:
   - Clear description of changes
   - Screenshots/videos if UI changes
   - Link to related issue if applicable

6. Wait for review and address feedback

## Code Style

- Use TypeScript for all code
- Follow existing patterns in the codebase
- Use functional components and hooks
- Prefer named exports
- Use Prettier for formatting (automatic)
- Follow accessibility best practices

### Component Guidelines

- Use `forwardRef` for components that accept refs
- Provide TypeScript types for all props
- Use `cva` for variant-based styling
- Include JSDoc comments for public APIs
- Support `className` prop for customization
- Use semantic HTML elements

### Accessibility

- Use ARIA attributes appropriately
- Ensure keyboard navigation works
- Test with screen readers when possible
- Follow WCAG 2.1 Level AA guidelines

## Testing

While we're working on test infrastructure, please manually test:

- Component renders correctly
- All variants work as expected
- Dark mode support
- Keyboard navigation
- Screen reader compatibility (if applicable)

## Documentation

When adding/modifying components:

1. Add usage examples in docs-web
2. Document all props
3. Show variant examples
4. Include code snippets

## Questions?

- Check existing [Issues](https://github.com/vs-front-end/stellar-ui/issues)
- Read the [Documentation](https://stellar-ui-one.vercel.app)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

