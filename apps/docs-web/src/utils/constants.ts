export type DocPlatform = 'web' | 'mobile';

export const PLATFORM_PARAM = 'platform';
export const PLATFORM_WEB = 'web';
export const PLATFORM_MOBILE = 'mobile';

export interface INavComponent {
  name: string;
  description: string;
  importName: string;
  slug: string;
  platforms?: DocPlatform[];
}

export const components: INavComponent[] = [
  {
    name: 'Accordion',
    description:
      'A vertically stacked set of interactive headings that each reveal a section of content.',
    importName: 'Accordion',
    slug: 'accordion',
  },
  {
    name: 'Alert',
    description: 'Displays a callout for user attention.',
    importName: 'Alert',
    slug: 'alert',
    platforms: ['web', 'mobile'],
  },
  {
    name: 'Avatar',
    description: 'An image element with a fallback for representing the user.',
    importName: 'Avatar',
    slug: 'avatar',
    platforms: ['web', 'mobile'],
  },
  {
    name: 'Badge',
    description: 'Displays a badge or a component that looks like a badge.',
    importName: 'Badge',
    slug: 'badge',
    platforms: ['web', 'mobile'],
  },
  {
    name: 'Breadcrumb',
    description:
      'Displays the path to the current resource using a hierarchy of links.',
    importName: 'Breadcrumb',
    slug: 'breadcrumb',
  },
  {
    name: 'Button',
    description: 'Displays a button or a component that looks like a button.',
    importName: 'Button',
    slug: 'button',
    platforms: ['web', 'mobile'],
  },
  {
    name: 'ButtonGroup',
    description: 'A group of buttons displayed together for related actions.',
    importName: 'ButtonGroup',
    slug: 'button-group',
  },
  {
    name: 'Calendar',
    description:
      'A date field component that allows users to enter and select date and time values.',
    importName: 'Calendar',
    slug: 'calendar',
  },
  {
    name: 'Card',
    description: 'Displays a card with header, content, and footer.',
    importName: 'Card',
    slug: 'card',
  },
  {
    name: 'Checkbox',
    description:
      'A control that allows the user to toggle between checked and unchecked states.',
    importName: 'Checkbox',
    slug: 'checkbox',
    platforms: ['web', 'mobile'],
  },
  {
    name: 'CircularProgress',
    description: 'Displays a circular progress indicator.',
    importName: 'CircularProgress',
    slug: 'circular-progress',
  },
  {
    name: 'Collapsible',
    description:
      'An interactive component which expands/collapses to show or hide content.',
    importName: 'Collapsible',
    slug: 'collapsible',
  },
  {
    name: 'Combobox',
    description:
      'An autocomplete input and command palette with a list of suggestions.',
    importName: 'Combobox',
    slug: 'combobox',
  },
  {
    name: 'Command',
    description: 'Fast, composable, unstyled command menu for React.',
    importName: 'Command',
    slug: 'command',
  },
  {
    name: 'ContextMenu',
    description:
      'Displays a menu to the user — such as a set of actions or functions — triggered by a button.',
    importName: 'ContextMenu',
    slug: 'context-menu',
  },
  {
    name: 'DatePicker',
    description: 'A date picker component for selecting dates.',
    importName: 'DatePicker',
    slug: 'date-picker',
  },
  {
    name: 'Dialog',
    description:
      'A window overlaid on either the primary window or another dialog window.',
    importName: 'Dialog',
    slug: 'dialog',
    platforms: ['web', 'mobile'],
  },
  {
    name: 'Drawer',
    description:
      'A drawer component that slides in from the edge of the screen.',
    importName: 'Drawer',
    slug: 'drawer',
  },
  {
    name: 'DropdownMenu',
    description:
      'Displays a menu to the user — such as a set of actions or functions — triggered by a button.',
    importName: 'DropdownMenu',
    slug: 'dropdown-menu',
  },
  {
    name: 'Empty',
    description:
      'Displays an empty state with an optional icon, title, and description.',
    importName: 'Empty',
    slug: 'empty',
  },
  {
    name: 'Input',
    description:
      'Displays a form input field or a component that looks like an input field.',
    importName: 'Input',
    slug: 'input',
    platforms: ['web', 'mobile'],
  },
  {
    name: 'InputCounter',
    description: 'An input field with a character counter.',
    importName: 'InputCounter',
    slug: 'input-counter',
    platforms: ['web', 'mobile'],
  },
  {
    name: 'InputOTP',
    description: 'An input field for one-time password codes.',
    importName: 'InputOTP',
    slug: 'input-otp',
    platforms: ['web', 'mobile'],
  },
  {
    name: 'InputPassword',
    description: 'An input field for passwords with show/hide toggle.',
    importName: 'InputPassword',
    slug: 'input-password',
    platforms: ['web', 'mobile'],
  },
  {
    name: 'InputSearch',
    description: 'An input field optimized for search with a search icon.',
    importName: 'InputSearch',
    slug: 'input-search',
    platforms: ['web', 'mobile'],
  },
  {
    name: 'InputText',
    description: 'A basic text input field.',
    importName: 'InputText',
    slug: 'input-text',
    platforms: ['web', 'mobile'],
  },
  {
    name: 'Label',
    description: 'Renders an accessible label associated with controls.',
    importName: 'Label',
    slug: 'label',
    platforms: ['web', 'mobile'],
  },
  {
    name: 'MultiSelect',
    description: 'A select component that allows multiple selections.',
    importName: 'MultiSelect',
    slug: 'multi-select',
  },
  {
    name: 'PasswordStrength',
    description: 'A component that displays password strength indicators.',
    importName: 'PasswordStrength',
    slug: 'password-strength',
    platforms: ['web', 'mobile'],
  },
  {
    name: 'Popover',
    description: 'Displays rich content in a portal, triggered by a button.',
    importName: 'Popover',
    slug: 'popover',
  },
  {
    name: 'Progress',
    description:
      'Displays an indicator showing the completion progress of a task.',
    importName: 'Progress',
    slug: 'progress',
    platforms: ['web', 'mobile'],
  },
  {
    name: 'RadioGroup',
    description:
      'A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.',
    importName: 'RadioGroup',
    slug: 'radio-group',
    platforms: ['web', 'mobile'],
  },
  {
    name: 'Rating',
    description: 'A component for displaying and selecting ratings.',
    importName: 'Rating',
    slug: 'rating',
  },
  {
    name: 'ScrollArea',
    description:
      'Augments native scroll functionality for custom, cross-browser styling.',
    importName: 'ScrollArea',
    slug: 'scroll-area',
  },
  {
    name: 'Select',
    description:
      'Displays a list of options for the user to pick from—triggered by a button.',
    importName: 'Select',
    slug: 'select',
    platforms: ['web', 'mobile'],
  },
  {
    name: 'Separator',
    description: 'Visually or semantically separates content.',
    importName: 'Separator',
    slug: 'separator',
    platforms: ['web', 'mobile'],
  },
  {
    name: 'Skeleton',
    description: 'Use to show a placeholder while content is loading.',
    importName: 'Skeleton',
    slug: 'skeleton',
    platforms: ['web', 'mobile'],
  },
  {
    name: 'Slider',
    description:
      'An input where the user selects a value from within a given range.',
    importName: 'Slider',
    slug: 'slider',
  },
  {
    name: 'Spinner',
    description: 'Displays a loading spinner indicator.',
    importName: 'Spinner',
    slug: 'spinner',
  },
  {
    name: 'Switch',
    description:
      'A control that allows the user to toggle between checked and unchecked states.',
    importName: 'Switch',
    slug: 'switch',
    platforms: ['web', 'mobile'],
  },
  {
    name: 'Tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
    importName: 'Tabs',
    slug: 'tabs',
    platforms: ['web', 'mobile'],
  },
  {
    name: 'Text',
    description:
      'A flexible text component that can render as different HTML elements.',
    importName: 'Text',
    slug: 'text',
    platforms: ['web', 'mobile'],
  },
  {
    name: 'TextArea',
    description:
      'Displays a form textarea or a component that looks like a textarea.',
    importName: 'TextArea',
    slug: 'textarea',
    platforms: ['web', 'mobile'],
  },
  {
    name: 'TextEditor',
    description: 'A rich text editor component for formatted text input.',
    importName: 'TextEditor',
    slug: 'text-editor',
  },
  {
    name: 'Toaster',
    description:
      'A toast notification component for displaying temporary messages.',
    importName: 'Toaster',
    slug: 'toaster',
  },
  {
    name: 'Toggle',
    description: 'A two-state button that can be either on or off.',
    importName: 'Toggle',
    slug: 'toggle',
  },
  {
    name: 'Tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    importName: 'Tooltip',
    slug: 'tooltip',
  },
];

export const docsNav: INavComponent[] = [
  {
    name: 'Getting Started',
    description: 'Learn how to get started with Stellar UI.',
    importName: 'GettingStarted',
    slug: 'getting-started',
  },
  {
    name: 'Colors and Themes',
    description: 'Available colors and theme variants.',
    importName: 'ColorsAndThemes',
    slug: 'colors-and-themes',
  },
  {
    name: 'Theme Customization',
    description: 'How to use and customize themes.',
    importName: 'ThemeCustomization',
    slug: 'theme-customization',
  },
  {
    name: 'Using Icons',
    description: 'Using Lucide React icons.',
    importName: 'Icons',
    slug: 'icons',
  },
];
