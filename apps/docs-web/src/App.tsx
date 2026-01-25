import { DocsLayout } from '@/layouts';
import { ThemeProvider } from '@/contexts';
import { Docs, Preview, NotFound } from '@/pages';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/docs/getting-started" replace />}
          />

          <Route path="/docs" element={<DocsLayout />}>
            <Route
              index
              element={<Navigate to="/docs/getting-started" replace />}
            />
            <Route path=":name" element={<Docs />} />
          </Route>

          <Route path="/preview" element={<DocsLayout />}>
            <Route
              index
              element={<Navigate to="/preview/accordion" replace />}
            />
            <Route path=":name" element={<Preview />} />
          </Route>

          <Route path="*" element={<DocsLayout />}>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
