// Imports 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignedIn } from '@clerk/clerk-react'
import './index.css'


// Import components 
import { Layout } from './Layout.jsx'

// Import routes
import { Signin } from './routes/Signin.jsx' 
import { Signup } from './routes/Signup.jsx'
import { Dashboard } from './routes/Dashboard.jsx'
import { Users } from './routes/Users.jsx'
import { NotFound } from './routes/NotFound.jsx'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SignedIn>
              <Layout />
            </SignedIn>        
        }
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
        </Route>
        <Route path="/signin" element={<Signin redirectUrl="/" />} />
        <Route path="/signup" element={<Signup redirectUrl="/" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
