import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import { RouterProvider} from 'react-router-dom'
import { router } from './router/Routes'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
