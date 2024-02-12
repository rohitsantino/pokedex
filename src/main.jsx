import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DropdownContext from '@context/DropdownContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DropdownContext>
      <App />
    </DropdownContext>
  </React.StrictMode>,
)
