import { render } from 'react-dom'
import { App } from 'app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/themeProvider'
import './shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/errorBoundary'
import 'app/styles/index.scss'

const root = document.getElementById('root')
render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  root,
)
