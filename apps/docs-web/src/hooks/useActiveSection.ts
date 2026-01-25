import { useLocation } from 'react-router-dom';

export const useActiveSection = () => {
  const { pathname } = useLocation();

  const isDocsActive = pathname.startsWith('/docs');
  const isComponentsActive = pathname.startsWith('/components');

  return {
    pathname,
    isDocsActive,
    isComponentsActive,
    section: isDocsActive ? 'docs' : isComponentsActive ? 'components' : 'home',
  };
};
