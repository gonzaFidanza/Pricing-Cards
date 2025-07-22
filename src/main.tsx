import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PricingSection from './PricingSection.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PricingSection />
  </StrictMode>,
)
