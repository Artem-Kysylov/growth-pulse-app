// Imports 
import {createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { SignedIn, SignedOut } from "@clerk/clerk-react"
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

const AppLayout = () => {
  return (
    <SignedIn>
      <div className='flex h-screen'>
        <SideBar/>
        <div className='flex flex-col w-full h-full overflow-x-auto'>
          <TopBar/>
          <div className='flex-1 bg-background-light dark:bg-background-dark overflow-y-auto transition ease-in-out duration-500'>
              <Outlet/>
          </div>
        </div>
      </div>
    </SignedIn>
  )
}

const AppEntry = () => {
  return (
    <SignedOut>
      <Outlet/>
    </SignedOut>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
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
    path: '/',
    element: <AppEntry/>,
    children: [
      {
        path: '/signin',
        element: <Signin/>
      },
      {
        path: '/signup',
        element: <Signup/>
      },
    ]
  },
  {
    path: '/*',
    element: <NotFound/>
  },
])


const App = () => {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
