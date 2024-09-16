

import Login from './auth/Login'


import {createBrowserRouter, RouterProvider} from "react-router-dom"

import MainLayout from './MainLayout'
import Signup from './auth/Signup'
import ForgotPassword from './auth/ForgotPassword'
import ResetPassword from './auth/ResetPassword'
import VerifyEmail from './auth/VerifyEmail'

const appRouter = createBrowserRouter([
  {
  path:"/",
  element:<MainLayout/>,
  // children: [
  //   {
  //   path: "/login"
  //   }
  // ]
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
  }


    
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
