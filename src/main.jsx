import React from 'react'
import ReactDOM from 'react-dom/client'
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import App from './App.jsx'
import './index.css'
import { useNavigate, BrowserRouter, Routes, Route, createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Signin } from './routes/Signin.jsx'
import { SideBar } from './components/SideBar.jsx'
import { TopBar } from './components/TopBar.jsx'
import { Signup } from './routes/Signup.jsx'
import { Dashboard } from './routes/Dashboard.jsx'
import { Users } from './routes/Users.jsx'
import { NotFound } from './routes/NotFound.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const Layout = () => {
  return (
    <>
      <SideBar/>
      <TopBar/>
      <Outlet/>
    </>
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
      }
    ]
  },
  {
    path: '/signin',
    element: <Signin redirectUrl={'/'}/>
  },
  {
    path: '/signup',
    element: <Signup redirectUrl={'/'}/>
  },
  {
    path: '/*',
    element: <NotFound/>
  },
])

const ClerkWithRoutes = () => {
  const navigate = useNavigate()

  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/signin' element={<Signin redirectUrl={'/'}/>}/>
        <Route path='/signup' element={<Signup redirectUrl={'/'}/>}/>
        <Route
          path='/protected'
          element={
            <>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </>
          }
        /> 
      </Routes>
    </ClerkProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkWithRoutes>
        <RouterProvider router={router} />
      </ClerkWithRoutes>
    </BrowserRouter>
  </React.StrictMode>,
)
