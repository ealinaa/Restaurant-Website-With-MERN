

import Login from './auth/Login'


import {createBrowserRouter, RouterProvider} from "react-router-dom"


import Signup from './auth/Signup'
import ForgotPassword from './auth/ForgotPassword'
import ResetPassword from './auth/ResetPassword'
import VerifyEmail from './auth/VerifyEmail'

import HeroSection from './components/HeroSection'
import MainLayout from './layout/MainLayout'
import Profile from './components/Profile'


const appRouter = createBrowserRouter([
  {
  path:"/",
  // element:<MainLayout/>,
  element:<MainLayout/>,
  children: [
    {
    path: "/",
    element:<HeroSection/>
    },
    {
      path: "/profile",
      element:<Profile/>
    }
  ]
  }, 
  {
    path: "/login",
    element: <Login/>
  },
  {
  path: "/signup",
  element: <Signup/>
  }, 
  {
    path:"/forgetpassword",
    element: <ForgotPassword/>
  },
  {
    path:"/resetpassword",
    element: <ResetPassword/>
  },
  {
    path: "/verifyemail",
    element: <VerifyEmail/>
  },
  // {
  //   path: "/navbar",
  //   element:<Navbar/>
  // }


    
])
function App() {


  return (
    <>
     {/* <Button className='bg-Orange hover:bg-hoverOrange'>Let's Start</Button> */}
     <main>
      <RouterProvider router={appRouter}>
        
      </RouterProvider>
    
     </main>
  
    </>
  )
}

export default App
