import { useMobileMenu, useAppTheme } from '@/hooks';
import { Outlet, useNavigate } from 'react-router-dom';
import { Drawer, DrawerContent } from '@stellar-ui/web';
import { Header, Navbar, ParticlesBackground } from '@/components';

export const DocsLayout = () => {
  const navigate = useNavigate();
  const mobileMenu = useMobileMenu();
  const { theme, setTheme } = useAppTheme();

  const handleLinkClick = (href: string) => {
    navigate(href);
    mobileMenu.close();
  };

  return (
    <div className="flex min-h-screen bg-background relative overflow-x-hidden">
      <ParticlesBackground theme={theme} />

      <aside className="hidden md:flex fixed inset-y-0 left-0 z-20 w-[285px] flex-col border-r border-dashed border-border bg-background/80">
        <Navbar theme={theme} setTheme={setTheme} />
      </aside>

      <Header onMenuClick={mobileMenu.open} />

      <Drawer
        open={mobileMenu.isOpen}
        onOpenChange={mobileMenu.close}
        direction="left"
      >
        <DrawerContent className="!w-[285px] min-w-[250px] max-w-[285px] h-full rounded-none border-r flex flex-col">
          <Navbar
            theme={theme}
            setTheme={setTheme}
            onLinkClick={handleLinkClick}
          />
        </DrawerContent>
      </Drawer>

      <main className="flex-1 w-full min-w-0 md:ml-[285px] pt-16 md:pt-0 relative z-10 overflow-x-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
