# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-01-25

### Added

#### @stellar-ui/web

- Initial release with 48 React components
- Components: Accordion, Alert, Avatar, Badge, Breadcrumb, Button, ButtonGroup, Calendar, Card, Checkbox, CircularProgress, CodeBlock, Collapsible, Combobox, Command, ContextMenu, DatePicker, Dialog, Drawer, DropdownMenu, Empty, Input, InputCounter, InputOTP, InputPassword, InputSearch, InputText, Label, MultiSelect, PasswordStrength, Popover, Progress, RadioGroup, Rating, ScrollArea, Select, Separator, Skeleton, Slider, Spinner, Switch, Tabs, Text, TextArea, TextEditor, Toaster, Toggle, Tooltip
- Built with Radix UI primitives for accessibility
- Tailwind CSS integration with class-variance-authority
- Dark mode support via ThemeProvider
- TypeScript types included
- ESM and CJS exports

#### @stellar-ui/shared

- Design tokens (colors, themes)
- Platform-agnostic utilities (cn, theme helpers)
- Tailwind CSS preset with design tokens
- TypeScript interfaces and types

#### @stellar-ui/mobile

- React Native UI library (RN-Primitives + NativeWind v4)
- Components: Alert, AlertDialog, Avatar, Badge, Button, Checkbox, Input, InputCounter, InputOTP, InputPassword, InputSearch, InputText, Label, PasswordStrength, Progress, RadioGroup, Select, Separator, Skeleton, Switch, Tabs, Text, TextArea
- Theme support (ThemeProvider, useTheme)
- Documentation app in `apps/docs-mobile`; shared docs at stellar-ui-one.vercel.app

### Infrastructure

- Turborepo monorepo setup
- TypeScript strict mode enabled
- Prettier code formatting
- Build pipeline with tsup (esbuild)
- Web documentation (apps/docs-web) and mobile documentation (apps/docs-mobile) with shared doc site

[0.1.0]: https://github.com/vs-front-end/stellar-ui/releases/tag/v0.1.0
