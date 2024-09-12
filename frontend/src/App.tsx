

import Login from './auth/Login'
import './App.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom"

import MainLayout from './MainLayout'
import Signup from './auth/Signup'

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
