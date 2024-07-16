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
import { Calendar } from './routes/Calendar.jsx'
import { Clients } from './routes/Clients.jsx'
import { Faq } from './routes/Faq.jsx'
import { NotFound } from './routes/NotFound.jsx'

const Layout = () => {
  return (
    <SignedIn>
      <div className='flex h-screen'>
        <SideBar/>
        <div className='flex flex-col w-full h-full'>
          <TopBar/>
          <div className='flex-1 bg-bg overflow-y-auto'>
              <Outlet/>
          </div>
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
      {
        path: '/clients',
        element: <Clients/>
      },
      {
        path: '/calendar',
        element: <Calendar/>
      },
      {
        path: '/faq',
        element: <Faq/>
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
