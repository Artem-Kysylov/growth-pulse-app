// Imports 
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import { light } from './colors/colors.js'
import App from './App.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        variables: {
          colorPrimary: light.green,
        }
      }}
      >
      {/* <ThemeContextProvider> */}
        <App/>
      {/* </ThemeContextProvider> */}
    </ClerkProvider>
  </React.StrictMode>,
)
