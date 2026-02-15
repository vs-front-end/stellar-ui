import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
Alert,
AlertDescription,
AlertTitle,
Avatar,
AvatarFallback,
AvatarImage,
Badge,
Breadcrumb,
BreadcrumbEllipsis,
BreadcrumbItem,
BreadcrumbLink,
BreadcrumbList,
BreadcrumbPage,
BreadcrumbSeparator,
Button,
ButtonGroup,
ButtonGroupSeparator,
ButtonGroupText,
Calendar,
Card,
CardAction,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
Checkbox,
CircularProgress,
CodeBlock,
Collapsible,
CollapsibleContent,
CollapsibleTrigger,
Combobox,
Command,
CommandDialog,
ContextMenu,
ContextMenuCheckboxItem,
ContextMenuContent,
ContextMenuItem,
ContextMenuLabel,
ContextMenuRadioGroup,
ContextMenuRadioItem,
ContextMenuSeparator,
ContextMenuShortcut,
ContextMenuSub,
ContextMenuSubContent,
ContextMenuSubTrigger,
ContextMenuTrigger,
CommandEmpty,
DropdownMenu,
DropdownMenuCheckboxItem,
DropdownMenuContent,
DropdownMenuGroup,
DropdownMenuItem,
DropdownMenuLabel,
DropdownMenuPortal,
DropdownMenuRadioGroup,
DropdownMenuRadioItem,
DropdownMenuSeparator,
DropdownMenuShortcut,
DropdownMenuSub,
DropdownMenuSubContent,
DropdownMenuSubTrigger,
DropdownMenuTrigger,
CommandGroup,
CommandInput,
CommandItem,
CommandList,
CommandSeparator,
CommandShortcut,
DatePicker,
DatePickerRange,
Dialog,
DialogClose,
DialogContent,
DialogDescription,
DialogFooter,
DialogHeader,
DialogTitle,
DialogTrigger,
Drawer,
DrawerClose,
DrawerContent,
Empty,
EmptyContent,
EmptyDescription,
EmptyHeader,
EmptyMedia,
EmptyTitle,
DrawerDescription,
Menubar,
MenubarCheckboxItem,
MenubarContent,
MenubarGroup,
MenubarItem,
MenubarLabel,
MenubarMenu,
MenubarRadioGroup,
MenubarRadioItem,
MenubarSeparator,
MenubarShortcut,
MenubarSub,
MenubarSubContent,
MenubarSubTrigger,
MenubarTrigger,
MultiSelect,
NavigationMenu,
NavigationMenuContent,
NavigationMenuIndicator,
NavigationMenuLink,
NavigationMenuItem,
NavigationMenuList,
NavigationMenuTrigger,
NavigationMenuViewport,
DrawerFooter,
DrawerHeader,
DrawerTitle,
DrawerTrigger,
Input,
InputCounter,
InputOTP,
InputOTPGroup,
InputOTPSeparator,
InputOTPSlot,
InputPassword,
InputSearch,
InputText,
Label,
PasswordStrength,
Progress,
RadioGroup,
RadioGroupItem,
Rating,
ScrollArea,
ScrollBar,
Select,
SelectContent,
SelectGroup,
SelectItem,
SelectLabel,
SelectScrollDownButton,
SelectScrollUpButton,
SelectSeparator,
SelectTrigger,
SelectValue,
Separator,
Skeleton,
Slider,
Spinner,
Switch,
Tabs,
TabsContent,
TabsList,
TabsTrigger,
Text,
TextArea,
TextEditor,
Toggle,
Tooltip,
TooltipContent,
TooltipProvider,
TooltipTrigger,
} from '@stellar-ui/web';
import type { ThemeVariant } from '@stellar-ui/shared';
import { cn } from '@stellar-ui/shared';
import { useState } from 'react';
import {
AlertCircleIcon,
CalendarIcon,
CheckCircleIcon,
ChevronDownIcon,
FileIcon,
InfoIcon,
MoreHorizontalIcon,
SettingsIcon,
XCircleIcon,
CheckIcon,
LockIcon,
MailIcon,
SearchIcon,
TrashIcon,
UserIcon,
BoldIcon,
ItalicIcon,
UnderlineIcon,
} from 'lucide-react';
import { toast } from 'sonner';

interface HomeProps {
theme: ThemeVariant;
setTheme: (theme: ThemeVariant) => void;
}

export function Home({ theme, setTheme }: HomeProps) {
const [password, setPassword] = useState('');

return (

<div className="flex flex-col gap-4 p-4 bg-background flex-1">
<div className="flex items-center justify-between border-b border-border pb-4">
<Text as="h1">Home</Text>
<div className="flex items-center gap-2">
<label htmlFor="theme-select" className="text-sm text-foreground">
Theme:
</label>
<select
id="theme-select"
value={theme}
onChange={(e) => setTheme(e.target.value as ThemeVariant)}
className={cn(
'rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-foreground',
'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
'hover:bg-surface/80 transition-colors'
)} >
<option value="light">Light</option>
<option value="dark">Dark</option>
<option value="ocean">Ocean</option>
</select>
</div>
</div>
<Button>Click me</Button>

      <div className="flex flex-col gap-4">
        <Text as="h2">ButtonGroup</Text>

        <div className="flex flex-col gap-4">
          <ButtonGroup>
            <Button variant="outline">One</Button>
            <Button variant="outline">Two</Button>
            <Button variant="outline">Three</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>

          <ButtonGroup orientation="vertical">
            <Button variant="outline">One</Button>
            <Button variant="outline">Two</Button>
            <Button variant="outline">Three</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button variant="outline">One</Button>
            <ButtonGroupSeparator />
            <Button variant="outline">Two</Button>
            <ButtonGroupSeparator />
            <Button variant="outline">Three</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button variant="outline">Save</Button>
            <ButtonGroupSeparator />
            <ButtonGroupText>or</ButtonGroupText>
            <ButtonGroupSeparator />
            <Button variant="outline">Cancel</Button>
          </ButtonGroup>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Card</Text>

        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here.</CardDescription>
            </CardHeader>
            <CardContent>
              <Text as="p">This is the card content area.</Text>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card with Action</CardTitle>
              <CardDescription>This card has an action button in the header.</CardDescription>
              <CardAction>
                <Button variant="ghost" size="icon">
                  <MoreHorizontalIcon className="size-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <Text as="p">Card content with action button.</Text>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="border-b">
              <CardTitle>Card with Border</CardTitle>
              <CardDescription>This card has a border between header and content.</CardDescription>
            </CardHeader>
            <CardContent>
              <Text as="p">Content separated by border.</Text>
            </CardContent>
            <CardFooter className="border-t">
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Collapsible</Text>

        <div className="flex flex-col gap-4 max-w-md">
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <span>@peduarte starred 3 repositories</span>
                <ChevronDownIcon className="size-4 transition-transform duration-200 data-[state=open]:rotate-180" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-2">
              <div className="rounded-md border border-border bg-surface px-4 py-3">
                <Text as="p" className="text-sm">
                  @radix-ui/primitives
                </Text>
              </div>
              <div className="rounded-md border border-border bg-surface px-4 py-3">
                <Text as="p" className="text-sm">
                  @radix-ui/colors
                </Text>
              </div>
              <div className="rounded-md border border-border bg-surface px-4 py-3">
                <Text as="p" className="text-sm">
                  @stitches/react
                </Text>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible defaultOpen>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <span>Open by default</span>
                <ChevronDownIcon className="size-4 transition-transform duration-200 data-[state=open]:rotate-180" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2">
              <div className="rounded-md border border-border bg-surface px-4 py-3">
                <Text as="p" className="text-sm">
                  This collapsible is open by default.
                </Text>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Command</Text>

        <div className="flex flex-col gap-4">
          <div className="rounded-lg border border-border bg-surface p-1 max-w-md">
            <Command>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <CalendarIcon />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <FileIcon />
                    <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem>
                    <SettingsIcon />
                    <span>Settings</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>
                    <UserIcon />
                    <span>Profile</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <MailIcon />
                    <span>Mail</span>
                    <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <SettingsIcon />
                    <span>Settings</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>

          <div>
            <CommandDialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Command Dialog</Button>
              </DialogTrigger>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <CalendarIcon />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <FileIcon />
                    <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem>
                    <SettingsIcon />
                    <span>Settings</span>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </CommandDialog>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Combobox</Text>

        <div className="flex flex-col gap-4">
          <Combobox
            options={[
              { value: 'next.js', label: 'Next.js' },
              { value: 'sveltekit', label: 'SvelteKit' },
              { value: 'nuxt.js', label: 'Nuxt.js' },
              { value: 'remix', label: 'Remix' },
              { value: 'astro', label: 'Astro' },
            ]}
            placeholder="Select framework..."
            searchPlaceholder="Search framework..."
          />

          <Combobox
            options={[
              { value: 'react', label: 'React' },
              { value: 'vue', label: 'Vue' },
              { value: 'angular', label: 'Angular' },
              { value: 'svelte', label: 'Svelte' },
            ]}
            placeholder="Select library..."
            defaultValue="react"
          />

          <Combobox
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' },
            ]}
            placeholder="Select option..."
            disabled
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">ContextMenu</Text>

        <div className="flex flex-col gap-4">
          <ContextMenu>
            <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-border bg-surface text-sm">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem>
                Back
                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem disabled>
                Forward
                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Reload
                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSub>
                <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-48">
                  <ContextMenuItem>
                    Save Page As...
                    <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                  <ContextMenuItem>Name Window...</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>Developer Tools</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSeparator />
              <ContextMenuCheckboxItem checked>
                Show Bookmarks Bar
                <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
              <ContextMenuSeparator />
              <ContextMenuLabel>People</ContextMenuLabel>
              <ContextMenuSeparator />
              <ContextMenuRadioGroup value="pedro">
                <ContextMenuRadioItem value="pedro">
                  Pedro Duarte
                </ContextMenuRadioItem>
                <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuContent>
          </ContextMenu>

          <ContextMenu>
            <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-border bg-surface text-sm">
              Right click for destructive menu
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem>
                <UserIcon />
                Profile
              </ContextMenuItem>
              <ContextMenuItem>
                <SettingsIcon />
                Settings
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">
                <TrashIcon />
                Delete
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">DropdownMenu</Text>

        <div className="flex flex-col gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <UserIcon />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SettingsIcon />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MailIcon />
                  <span>Mail</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <UserIcon />
                    <span>Invite users</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <MailIcon />
                      <span>Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FileIcon />
                      <span>Message</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <MoreHorizontalIcon />
                      <span>More...</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  <CheckCircleIcon />
                  <span>New Team</span>
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Status Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Activity Bar</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Panel</DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>People</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value="pedro">
                <DropdownMenuRadioItem value="pedro">
                  Pedro Duarte
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="colm">Colm Tuite</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <TrashIcon />
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <MoreHorizontalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <UserIcon />
                <span>View Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <TrashIcon />
                <span>Delete Account</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Calendar</Text>

        <div className="flex flex-col gap-4">
          <Calendar />
          <Calendar mode="single" />
          <Calendar mode="range" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">DatePicker</Text>

        <div className="flex flex-col gap-4">
          <DatePicker />
          <DatePicker placeholder="Select a date" />
          <DatePicker disabled />
          <DatePickerRange />
          <DatePickerRange placeholder="Select date range" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Accordion</Text>

        <div className="flex flex-col gap-4 max-w-md">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match the other components' aesthetic, but it's
                customizable.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Breadcrumb</Text>

        <div className="flex flex-col gap-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbEllipsis>
                  <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
                  <BreadcrumbLink href="/api">API Reference</BreadcrumbLink>
                  <BreadcrumbLink href="/guides">Guides</BreadcrumbLink>
                </BreadcrumbEllipsis>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Avatar</Text>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar className="size-12">
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
            <Avatar className="size-16">
              <AvatarFallback>XL</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <Text as="span" className="text-sm font-medium">John Doe</Text>
              <Text as="span" className="text-xs text-muted">john@example.com</Text>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Alert</Text>

        <div className="flex flex-col gap-4 max-w-md">
          <Alert variant="default">
            <InfoIcon />
            <AlertTitle>Default Alert</AlertTitle>
            <AlertDescription>
              This is a default alert with some information.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <XCircleIcon />
            <AlertTitle>Error Alert</AlertTitle>
            <AlertDescription>
              Something went wrong. Please try again.
            </AlertDescription>
          </Alert>

          <Alert variant="success">
            <CheckCircleIcon />
            <AlertTitle>Success Alert</AlertTitle>
            <AlertDescription>
              Your action was completed successfully.
            </AlertDescription>
          </Alert>

          <Alert variant="warning">
            <AlertCircleIcon />
            <AlertTitle>Warning Alert</AlertTitle>
            <AlertDescription>
              Please be careful with this action.
            </AlertDescription>
          </Alert>

          <Alert variant="info">
            <InfoIcon />
            <AlertTitle>Info Alert</AlertTitle>
            <AlertDescription>
              Here is some useful information for you.
            </AlertDescription>
          </Alert>

          <Alert>
            <AlertTitle>Alert without icon</AlertTitle>
            <AlertDescription>
              This alert doesn't have an icon.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Badge</Text>

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-baseline gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
          </div>

          <div className="flex flex-wrap items-baseline gap-2">
            <Badge>
              <CheckIcon />
              With Icon
            </Badge>
            <Badge variant="secondary">
              <InfoIcon />
              Secondary
            </Badge>
            <Badge variant="destructive">
              <XCircleIcon />
              Error
            </Badge>
            <Badge variant="success">
              <CheckCircleIcon />
              Success
            </Badge>
            <Badge variant="warning">
              <AlertCircleIcon />
              Warning
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Drawer</Text>

        <div className="flex flex-wrap gap-2">
          <Drawer direction="bottom">
            <DrawerTrigger asChild>
              <Button variant="outline">Bottom Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Bottom Drawer</DrawerTitle>
                <DrawerDescription>
                  This drawer slides from the bottom.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <Text as="p">This is a bottom drawer component test.</Text>
              </div>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <Drawer direction="top">
            <DrawerTrigger asChild>
              <Button variant="outline">Top Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Top Drawer</DrawerTitle>
                <DrawerDescription>
                  This drawer slides from the top.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <Text as="p">This is a top drawer component test.</Text>
              </div>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <Drawer direction="left">
            <DrawerTrigger asChild>
              <Button variant="outline">Left Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Left Drawer</DrawerTitle>
                <DrawerDescription>
                  This drawer slides from the left.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <Text as="p">This is a left drawer component test.</Text>
              </div>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Button variant="outline">Right Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Right Drawer</DrawerTitle>
                <DrawerDescription>
                  This drawer slides from the right.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <Text as="p">This is a right drawer component test.</Text>
              </div>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Dialog</Text>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
            <div className="p-4">
              <Text as="p">
                This is a dialog component test (modal in the center).
              </Text>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button>Continue</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Empty</Text>

        <div className="flex flex-col gap-4">
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <FileIcon />
              </EmptyMedia>
              <EmptyTitle>No files found</EmptyTitle>
              <EmptyDescription>
                Get started by creating a new file.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>

          <Empty>
            <EmptyHeader>
              <EmptyMedia>
                <MailIcon className="size-12 text-muted" />
              </EmptyMedia>
              <EmptyTitle>No messages</EmptyTitle>
              <EmptyDescription>
                You don't have any messages yet. Start a conversation to see them
                here.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>

          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <SearchIcon />
              </EmptyMedia>
              <EmptyTitle>No results found</EmptyTitle>
              <EmptyDescription>
                Try adjusting your search or filter to find what you're looking
                for.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button variant="outline">Clear filters</Button>
            </EmptyContent>
          </Empty>

          <Empty>
            <EmptyHeader>
              <EmptyMedia>
                <UserIcon className="size-16 text-muted" />
              </EmptyMedia>
              <EmptyTitle>No users found</EmptyTitle>
              <EmptyDescription>
                There are no users in this workspace yet.{' '}
                <a href="#">Invite users</a> to get started.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Menubar</Text>

        <div className="flex flex-col gap-4">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab
                  <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  New Window
                  <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled>New Incognito Window</MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Share</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Email link</MenubarItem>
                    <MenubarItem>Messages</MenubarItem>
                    <MenubarItem>Notes</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>
                  Print...
                  <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Undo
                  <MenubarShortcut>⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Redo
                  <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Find</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Search the web</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Find...</MenubarItem>
                    <MenubarItem>Find Next</MenubarItem>
                    <MenubarItem>Find Previous</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>Cut</MenubarItem>
                <MenubarItem>Copy</MenubarItem>
                <MenubarItem>Paste</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem checked>
                  Always Show Bookmarks Bar
                </MenubarCheckboxItem>
                <MenubarCheckboxItem>Always Show Full URLs</MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarItem inset>
                  Reload
                  <MenubarShortcut>⌘R</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled inset>
                  Force Reload
                  <MenubarShortcut>⇧⌘R</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Hide Sidebar</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Profiles</MenubarTrigger>
              <MenubarContent>
                <MenubarRadioGroup value="benoit">
                  <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                  <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                  <MenubarRadioItem value="quentin">Quentin</MenubarRadioItem>
                </MenubarRadioGroup>
                <MenubarSeparator />
                <MenubarItem inset>Edit...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Add Profile...</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <FileIcon />
                  <span>New File</span>
                </MenubarItem>
                <MenubarItem>
                  <SettingsIcon />
                  <span>Settings</span>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem variant="destructive">
                  <TrashIcon />
                  <span>Delete</span>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">NavigationMenu</Text>

        <div className="flex flex-col gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>
                    <div className="flex flex-col gap-1">
                      <div className="text-sm font-medium">Introduction</div>
                      <div className="text-xs text-muted">
                        Re-usable components built using Radix UI and Tailwind CSS.
                      </div>
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <div className="flex flex-col gap-1">
                      <div className="text-sm font-medium">Installation</div>
                      <div className="text-xs text-muted">
                        How to install dependencies and structure your app.
                      </div>
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <div className="flex flex-col gap-1">
                      <div className="text-sm font-medium">Theming</div>
                      <div className="text-xs text-muted">
                        Customize the theme and appearance of components.
                      </div>
                    </div>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>
                    <div className="flex flex-col gap-1">
                      <div className="text-sm font-medium">Buttons</div>
                      <div className="text-xs text-muted">
                        Button components with various styles and sizes.
                      </div>
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <div className="flex flex-col gap-1">
                      <div className="text-sm font-medium">Forms</div>
                      <div className="text-xs text-muted">
                        Input, textarea, and form control components.
                      </div>
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <div className="flex flex-col gap-1">
                      <div className="text-sm font-medium">Dialogs</div>
                      <div className="text-xs text-muted">
                        Modal dialogs and popovers for user interactions.
                      </div>
                    </div>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-sm font-medium">
                  Documentation
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-sm font-medium">
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuIndicator />
          </NavigationMenu>

          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>
                    <FileIcon />
                    <div className="flex flex-col gap-1">
                      <div className="text-sm font-medium">Documentation</div>
                      <div className="text-xs text-muted">
                        Complete API reference and guides.
                      </div>
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink>
                    <SettingsIcon />
                    <div className="flex flex-col gap-1">
                      <div className="text-sm font-medium">Settings</div>
                      <div className="text-xs text-muted">
                        Configure your workspace and preferences.
                      </div>
                    </div>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-sm font-medium">
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Label</Text>

        <div className="flex flex-col gap-4 max-w-md">
          <div className="flex flex-col gap-2">
            <Label htmlFor="label-input">Label for Input</Label>
            <Input id="label-input" placeholder="Enter text here..." />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="label-textarea">Label for Textarea</Label>
            <TextArea id="label-textarea" placeholder="Enter your message..." />
          </div>

          <div className="flex items-center gap-2">
            <Switch id="label-switch" />
            <Label htmlFor="label-switch">Label for Switch</Label>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Input</Text>

        <div className="flex flex-col gap-4 max-w-md">
          <div className="flex flex-col gap-2">
            <Label htmlFor="input-default">Default Input</Label>
            <Input id="input-default" placeholder="Enter text here..." />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="input-disabled">Disabled Input</Label>
            <Input id="input-disabled" placeholder="Disabled input" disabled />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="input-invalid">Invalid Input</Label>
            <Input
              id="input-invalid"
              placeholder="Invalid input"
              aria-invalid
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">InputText</Text>

        <div className="flex flex-col gap-4 max-w-md">
          <InputText
            label="Input with start icon"
            placeholder="Username"
            startIcon={UserIcon}
          />

          <InputText
            label="Input with end icon"
            type="email"
            placeholder="Email address"
            endIcon={MailIcon}
          />

          <InputText
            label="Input with error"
            type="email"
            placeholder="Email address"
            defaultValue="invalid@email.com"
            error="This email is invalid."
            aria-invalid
          />

          <InputText
            label="Input with both icons"
            placeholder="Search..."
            startIcon={SearchIcon}
            endIcon={CheckIcon}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">InputSearch</Text>

        <div className="flex flex-col gap-4">
          <InputSearch />
          <InputSearch label="Custom search" placeholder="Type to search..." />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">CodeBlock</Text>

        <div className="flex flex-col gap-4">
          <CodeBlock
            code={`import { Toaster } from 'sonner';

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (

<html lang="en">
<body>
{children}
<Toaster />
</body>
</html>
);
}`}
filename="layout.tsx"
language="tsx"
/>

          <CodeBlock
            code={`function greet(name: string) {

return \`Hello, \${name}!\`;
}

const message = greet('World');
console.log(message);`}
language="typescript"
showLineNumbers
/>

          <CodeBlock
            code={`const data = {

name: 'Shiba UI',
version: '1.0.0',
features: ['Accessible', 'Customizable', 'Modern']
};

console.log(JSON.stringify(data, null, 2));`}
language="javascript"
highlightLines={[2, 4]}
showLineNumbers
/>

          <CodeBlock
            code={`// This is a comment

const value = "string value";
const number = 42;
const isActive = true;`}
language="typescript"
copyable={false}
/>

</div>
</div>

      <div className="flex flex-col gap-4">
        <Text as="h2">InputCounter</Text>

        <div className="flex flex-col gap-4">
          <InputCounter label="Input with plus/minus buttons" defaultValue={1024} min={0} />
          <InputCounter label="Counter with limits" defaultValue={5} min={0} max={10} step={1} />
          <InputCounter label="Disabled counter" defaultValue={3} disabled />
          <InputCounter
            label="Counter with error"
            defaultValue={15}
            min={0}
            max={10}
            error="Value must be between 0 and 10"
            aria-invalid
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">InputOTP</Text>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>OTP Input (6 digits)</Label>
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <div className="flex flex-col gap-2">
            <Label>OTP Input with Separator</Label>
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <div className="flex flex-col gap-2">
            <Label>OTP Input with error</Label>
            <InputOTP
              maxLength={6}
              error="Invalid OTP code"
              aria-invalid
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">InputPassword</Text>

        <div className="flex flex-col gap-4 max-w-xs">
          <InputPassword
            label="Input with password strength"
            placeholder="Password"
            value={password}
            onChange={setPassword}
          />
          <PasswordStrength password={password} />

          <InputPassword
            label="Password with start icon"
            placeholder="Enter password"
            startIcon={LockIcon}
          />

          <InputPassword
            label="Password with error"
            placeholder="Enter password"
            defaultValue="weak"
            error="Password must be at least 8 characters"
            aria-invalid
          />

          <InputPassword
            label="Password with icon and error"
            placeholder="Enter password"
            startIcon={LockIcon}
            error="Password is too short"
            aria-invalid
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Textarea</Text>

        <div className="flex flex-col gap-4 max-w-md">
          <div className="flex flex-col gap-2">
            <Label htmlFor="textarea-default">Default Textarea</Label>
            <TextArea
              id="textarea-default"
              placeholder="Enter your message here..."
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="textarea-disabled">Disabled Textarea</Label>
            <TextArea
              id="textarea-disabled"
              placeholder="Disabled textarea"
              disabled
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="textarea-invalid">Invalid Textarea</Label>
            <TextArea
              id="textarea-invalid"
              placeholder="Invalid textarea"
              aria-invalid
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="textarea-error">Textarea with error</Label>
            <TextArea
              id="textarea-error"
              placeholder="Enter your message..."
              error="Message must be at least 10 characters"
              aria-invalid
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Switch</Text>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Switch id="switch-default" />
            <label htmlFor="switch-default" className="text-sm text-foreground">
              Default Switch
            </label>
          </div>

          <div className="flex items-center gap-2">
            <Switch id="switch-checked" defaultChecked />
            <label htmlFor="switch-checked" className="text-sm text-foreground">
              Checked Switch
            </label>
          </div>

          <div className="flex items-center gap-2">
            <Switch id="switch-disabled" disabled />
            <label
              htmlFor="switch-disabled"
              className="text-sm text-foreground"
            >
              Disabled Switch
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Tabs</Text>

        <div className="flex flex-col gap-4">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Text as="p" className="text-sm text-muted">
                Make changes to your account here. Click save when you're done.
              </Text>
            </TabsContent>
            <TabsContent value="password">
              <Text as="p" className="text-sm text-muted">
                Change your password here. After saving, you'll be logged out.
              </Text>
            </TabsContent>
          </Tabs>

          <Tabs defaultValue="overview" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Text as="p" className="text-sm text-muted">
                Overview content goes here.
              </Text>
            </TabsContent>
            <TabsContent value="analytics">
              <Text as="p" className="text-sm text-muted">
                Analytics content goes here.
              </Text>
            </TabsContent>
            <TabsContent value="reports">
              <Text as="p" className="text-sm text-muted">
                Reports content goes here.
              </Text>
            </TabsContent>
            <TabsContent value="notifications">
              <Text as="p" className="text-sm text-muted">
                Notifications content goes here.
              </Text>
            </TabsContent>
          </Tabs>

          <Tabs defaultValue="item1" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="item1" disabled>
                Disabled Tab
              </TabsTrigger>
              <TabsTrigger value="item2">Active Tab</TabsTrigger>
            </TabsList>
            <TabsContent value="item1">
              <Text as="p" className="text-sm text-muted">
                This tab is disabled.
              </Text>
            </TabsContent>
            <TabsContent value="item2">
              <Text as="p" className="text-sm text-muted">
                This is the active tab content.
              </Text>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">TextEditor</Text>

        <div className="flex flex-col gap-4 max-w-2xl">
          <TextEditor
            label="Rich Text Editor"
            placeholder="Start typing..."
            onChange={(html: string) => console.log(html)}
          />

          <TextEditor
            label="Editor with initial content"
            value="<p>This is <strong>bold</strong> and this is <em>italic</em> text.</p>"
            onChange={(html: string) => console.log(html)}
          />

          <TextEditor
            label="Read-only editor"
            editable={false}
            value="<p>This editor is read-only. You cannot edit this content.</p>"
          />

          <TextEditor
            label="Editor with error"
            error="This field is required"
            onChange={(html: string) => console.log(html)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Toggle</Text>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Toggle aria-label="Toggle bold">
              <BoldIcon />
            </Toggle>
            <Toggle aria-label="Toggle italic">
              <ItalicIcon />
            </Toggle>
            <Toggle aria-label="Toggle underline">
              <UnderlineIcon />
            </Toggle>
          </div>

          <div className="flex items-center gap-2">
            <Toggle variant="outline" aria-label="Toggle bold">
              <BoldIcon />
            </Toggle>
            <Toggle variant="outline" aria-label="Toggle italic">
              <ItalicIcon />
            </Toggle>
            <Toggle variant="outline" aria-label="Toggle underline">
              <UnderlineIcon />
            </Toggle>
          </div>

          <div className="flex items-center gap-2">
            <Toggle size="sm" aria-label="Toggle bold">
              <BoldIcon />
            </Toggle>
            <Toggle size="sm" aria-label="Toggle italic">
              <ItalicIcon />
            </Toggle>
            <Toggle size="sm" aria-label="Toggle underline">
              <UnderlineIcon />
            </Toggle>
          </div>

          <div className="flex items-center gap-2">
            <Toggle size="lg" aria-label="Toggle bold">
              <BoldIcon />
            </Toggle>
            <Toggle size="lg" aria-label="Toggle italic">
              <ItalicIcon />
            </Toggle>
            <Toggle size="lg" aria-label="Toggle underline">
              <UnderlineIcon />
            </Toggle>
          </div>

          <div className="flex items-center gap-2">
            <Toggle disabled aria-label="Toggle bold">
              <BoldIcon />
            </Toggle>
            <Toggle disabled aria-label="Toggle italic">
              <ItalicIcon />
            </Toggle>
            <Toggle disabled aria-label="Toggle underline">
              <UnderlineIcon />
            </Toggle>
          </div>

          <div className="flex items-center gap-2">
            <Toggle defaultPressed aria-label="Toggle bold">
              <BoldIcon />
            </Toggle>
            <Toggle defaultPressed aria-label="Toggle italic">
              <ItalicIcon />
            </Toggle>
            <Toggle aria-label="Toggle underline">
              <UnderlineIcon />
            </Toggle>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Tooltip</Text>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Top tooltip</Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Tooltip on top</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Right tooltip</Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Tooltip on right</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Left tooltip</Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Tooltip on left</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="flex items-center gap-4">
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Delayed tooltip</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This tooltip has a delay</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" disabled>
                  Disabled button
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This tooltip appears on disabled elements</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Slider</Text>

        <div className="flex flex-col gap-4 max-w-md">
          <div className="flex flex-col gap-2">
            <Label>Default Slider</Label>
            <Slider defaultValue={[50]} />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Range Slider</Label>
            <Slider defaultValue={[20, 80]} max={100} />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Disabled Slider</Label>
            <Slider defaultValue={[50]} disabled />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Checkbox</Text>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Checkbox id="checkbox-default" />
            <Label htmlFor="checkbox-default">Default Checkbox</Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="checkbox-checked" defaultChecked />
            <Label htmlFor="checkbox-checked">Checked Checkbox</Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="checkbox-disabled" disabled />
            <Label htmlFor="checkbox-disabled">Disabled Checkbox</Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="checkbox-error" aria-invalid />
            <Label htmlFor="checkbox-error">Checkbox with error</Label>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Progress</Text>

        <div className="flex flex-col gap-4 max-w-md">
          <div className="flex flex-col gap-2">
            <Label>Progress 0%</Label>
            <Progress value={0} />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Progress 25%</Label>
            <Progress value={25} />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Progress 50%</Label>
            <Progress value={50} />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Progress 75%</Label>
            <Progress value={75} />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Progress 100%</Label>
            <Progress value={100} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">CircularProgress</Text>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>Circular Progress with percentage</Label>
            <CircularProgress value={75} showValue />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Circular Progress with custom content</Label>
            <CircularProgress value={80} max={100}>
              <div className="flex flex-col items-center">
                <Text as="span" className="text-2xl font-bold text-foreground">
                  200
                </Text>
                <Text as="span" className="text-sm text-foreground">
                  Visitors
                </Text>
              </div>
            </CircularProgress>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Different sizes</Label>
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <CircularProgress value={50} size="sm" showValue />
                <Text as="span" className="text-xs text-muted">Small</Text>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CircularProgress value={50} size="md" showValue />
                <Text as="span" className="text-xs text-muted">Medium</Text>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CircularProgress value={50} size="lg" showValue />
                <Text as="span" className="text-xs text-muted">Large</Text>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Different values</Label>
            <div className="flex items-center gap-8">
              <CircularProgress value={0} showValue />
              <CircularProgress value={25} showValue />
              <CircularProgress value={50} showValue />
              <CircularProgress value={75} showValue />
              <CircularProgress value={100} showValue />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Custom size (200px)</Label>
            <CircularProgress value={65} size={200} showValue />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Different stroke widths</Label>
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <CircularProgress value={75} size="md" strokeWidth={4} showValue />
                <Text as="span" className="text-xs text-muted">Thin (4px)</Text>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CircularProgress value={75} size="md" strokeWidth={8} showValue />
                <Text as="span" className="text-xs text-muted">Medium (8px)</Text>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CircularProgress value={75} size="md" strokeWidth={12} showValue />
                <Text as="span" className="text-xs text-muted">Thick (12px)</Text>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CircularProgress value={75} size="md" strokeWidth={16} showValue />
                <Text as="span" className="text-xs text-muted">Very Thick (16px)</Text>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">RadioGroup</Text>

        <div className="flex flex-col gap-4 max-w-md">
          <div className="flex flex-col gap-2">
            <Label>Options</Label>
            <RadioGroup defaultValue="option1">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option1" id="radio-1" />
                <Label htmlFor="radio-1">Option 1</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option2" id="radio-2" />
                <Label htmlFor="radio-2">Option 2</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option3" id="radio-3" />
                <Label htmlFor="radio-3">Option 3</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Disabled RadioGroup</Label>
            <RadioGroup defaultValue="option1" disabled>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option1" id="radio-disabled-1" />
                <Label htmlFor="radio-disabled-1">Disabled Option 1</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option2" id="radio-disabled-2" />
                <Label htmlFor="radio-disabled-2">Disabled Option 2</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Rating</Text>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>Interactive Rating</Label>
            <Rating defaultValue={0} aria-label="Product rating" />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Rating with value (4.5 stars)</Label>
            <Rating value={4.5} readOnly aria-label="Average rating: 4.5 stars" />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Rating sizes</Label>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Text as="span" className="text-sm w-20">Small:</Text>
                <Rating value={3} readOnly size="sm" />
              </div>
              <div className="flex items-center gap-4">
                <Text as="span" className="text-sm w-20">Medium:</Text>
                <Rating value={3} readOnly size="md" />
              </div>
              <div className="flex items-center gap-4">
                <Text as="span" className="text-sm w-20">Large:</Text>
                <Rating value={3} readOnly size="lg" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Disabled Rating</Label>
            <Rating value={2.5} disabled aria-label="Disabled rating" />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Read-only Rating (5 stars)</Label>
            <Rating value={5} readOnly aria-label="Perfect rating: 5 stars" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">ScrollArea</Text>

        <div className="flex flex-col gap-4">
          <div className="h-[200px] w-[350px] rounded-md border border-border">
            <ScrollArea className="h-full w-full rounded-md">
              <div className="p-4">
                <Text as="h4" className="mb-4 text-sm font-medium">
                  Tags
                </Text>
                {Array.from({ length: 50 }).map((_, i) => (
                  <div key={i} className="text-sm">
                    Tag {i + 1}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="h-[200px] w-[350px] rounded-md border border-border">
            <ScrollArea className="h-full w-full rounded-md">
              <div className="p-4">
                <Text as="h4" className="mb-4 text-sm font-medium">
                  Long Content
                </Text>
                <Text as="p" className="mb-4 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </Text>
                <Text as="p" className="mb-4 text-sm">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit
                  anim id est laborum.
                </Text>
                <Text as="p" className="mb-4 text-sm">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae vitae
                  dicta sunt explicabo.
                </Text>
                <Text as="p" className="mb-4 text-sm">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                  fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt.
                </Text>
              </div>
            </ScrollArea>
          </div>

          <div className="h-[200px] w-[350px] rounded-md border border-border">
            <ScrollArea className="h-full w-full rounded-md">
              <div className="p-4 whitespace-nowrap">
                <div className="flex gap-4">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="text-sm min-w-[100px]">
                      Item {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Select</Text>

        <div className="flex flex-col gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px]" size="sm">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Vegetables</SelectLabel>
                <SelectItem value="aubergine">Aubergine</SelectItem>
                <SelectItem value="broccoli">Broccoli</SelectItem>
                <SelectItem value="carrot">Carrot</SelectItem>
                <SelectItem value="courgette">Courgette</SelectItem>
                <SelectItem value="leek">Leek</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px]" disabled>
              <SelectValue placeholder="Disabled select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px]" aria-invalid>
              <SelectValue placeholder="Select with error" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">MultiSelect</Text>

        <div className="flex flex-col gap-4">
          <MultiSelect
            options={[
              { value: 'react', label: 'React' },
              { value: 'vue', label: 'Vue' },
              { value: 'angular', label: 'Angular' },
              { value: 'svelte', label: 'Svelte' },
            ]}
            onValueChange={(values) => console.log(values)}
            placeholder="Select frameworks..."
          />

          <MultiSelect
            options={[
              { value: 'apple', label: 'Apple', icon: FileIcon },
              { value: 'banana', label: 'Banana', icon: FileIcon },
              { value: 'orange', label: 'Orange', icon: FileIcon },
              { value: 'grape', label: 'Grape', icon: FileIcon },
            ]}
            onValueChange={(values) => console.log(values)}
            placeholder="Select fruits..."
            defaultValue={['apple', 'banana']}
          />

          <MultiSelect
            options={[
              {
                heading: 'Frontend',
                options: [
                  { value: 'react', label: 'React' },
                  { value: 'vue', label: 'Vue' },
                  { value: 'angular', label: 'Angular' },
                ],
              },
              {
                heading: 'Backend',
                options: [
                  { value: 'node', label: 'Node.js' },
                  { value: 'python', label: 'Python' },
                  { value: 'go', label: 'Go' },
                ],
              },
            ]}
            onValueChange={(values) => console.log(values)}
            placeholder="Select technologies..."
          />

          <MultiSelect
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' },
            ]}
            onValueChange={(values) => console.log(values)}
            placeholder="Disabled multi-select"
            disabled
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Separator</Text>

        <div className="flex flex-col gap-4">
          <div>
            <Text as="p">Horizontal separator:</Text>
            <Separator orientation="horizontal" />
          </div>

          <div className="flex gap-4 h-20">
            <Text as="p">Vertical</Text>
            <Separator orientation="vertical" />
            <Text as="p">separator</Text>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Spinner</Text>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Spinner />
            <Text as="p">Default spinner</Text>
          </div>

          <div className="flex items-center gap-4">
            <Spinner className="size-6" />
            <Text as="p">Large spinner</Text>
          </div>

          <div className="flex items-center gap-4">
            <Spinner className="size-8" />
            <Text as="p">Extra large spinner</Text>
          </div>

          <div className="flex items-center gap-4">
            <Spinner className="size-3" />
            <Text as="p">Small spinner</Text>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Skeleton</Text>

        <div className="flex flex-col gap-4 max-w-md">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>

          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="flex flex-col gap-2 flex-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Text as="h2">Toaster</Text>

        <div className="flex flex-col gap-4 max-w-md">
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => toast.success('Operation completed successfully!')}
            >
              Success Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.info('Here is some information for you.')}
            >
              Info Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.warning('Please be careful with this action.')}
            >
              Warning Toast
            </Button>
            <Button
              variant="destructive"
              onClick={() => toast.error('Something went wrong!')}
            >
              Error Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                const toastId = toast.loading('Processing...');
                setTimeout(() => {
                  toast.success('Done!', { id: toastId });
                }, 2000);
              }}
            >
              Loading Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast('This is a neutral toast.', { className: 'neutral' })}
            >
              Neutral Toast
            </Button>
          </div>
        </div>
      </div>
    </div>

);
}
