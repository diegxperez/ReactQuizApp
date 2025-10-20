import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QuizApp } from './QuizApp.tsx'
import './index.css'
import './App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QuizApp />
  </StrictMode>,
)