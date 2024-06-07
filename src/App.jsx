// Imports 
import {createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { SignedIn } from "@clerk/clerk-react"
import './index.css'

// Import components 
import { TopBar } from './components/TopBar.jsx'
import { SideBar } from './components/SideBar.jsx'

// Import routes
import { Signin } from './routes/Signin.jsx' 
import { Signup } from './routes/Signup.jsx'
import { Dashboard } from './routes/Dashboard.jsx'
import { Users } from './routes/Users.jsx'
import { NotFound } from './routes/NotFound.jsx'

const Layout = () => {
  return (
    <SignedIn>
    <div className='flex'>
      <SideBar/>
      <div className='w-full'>
        <TopBar/>
        <Outlet/>
      </div>
    </div>
    </SignedIn>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Dashboard/>
      },
      {
        path: '/users',
        element: <Users/>
      },
    ]
  },
  {
    path: '/signin',
    element: <Signin/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/*',
    element: <NotFound/>
  },
])


const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
