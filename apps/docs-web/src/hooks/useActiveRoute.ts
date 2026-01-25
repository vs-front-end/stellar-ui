import { useLocation } from 'react-router-dom';

export const useActiveRoute = (): string => {
  const location = useLocation();
  return location.pathname;
};
