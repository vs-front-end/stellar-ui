import '@stellar-ui-kit/web/dist/styles.css'
import './index.css'

import App from './App.tsx'
import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@stellar-ui-kit/web'

type ThemeVariant = 'light' | 'dark' | 'ocean'

function Root() {
  const [theme, setTheme] = useState<ThemeVariant>('dark')

  return (
    <ThemeProvider variant={theme}>
      <App onThemeChange={setTheme} />
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
