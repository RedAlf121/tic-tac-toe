import { createRoot } from 'react-dom/client'
import { MainMenu } from './MainMenu'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainMenu></MainMenu>
  </StrictMode>,
    )


