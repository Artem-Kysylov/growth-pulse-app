// Imports 
import React from 'react'

// Import components 
import { SideBar } from './components/SideBar.jsx'
import { TopBar } from './components/TopBar.jsx'

export const Layout = ({ children }) => {
  return (
    <div>
        <div>
            <TopBar/>
        </div>
        <div>
            <SideBar/>
            <main>
                {children}
            </main>
        </div>
    </div>
    
  )
}
