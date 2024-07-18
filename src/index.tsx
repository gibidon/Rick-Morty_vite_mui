import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'

const root = document.querySelector('#root')

if (!root) {
  throw new Error('Root not found!')
}

const container = createRoot(root)

container.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
