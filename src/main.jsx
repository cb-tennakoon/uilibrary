import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Floatinginputlabel from './components/forms/Floatinginputlabel.jsx'
import Userreview from './components/testimonial/userreview.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Floatinginputlabel/> */}
    <Userreview/>
  </StrictMode>,
)
