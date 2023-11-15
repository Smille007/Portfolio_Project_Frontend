import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Write from './pages/Write'
import Home from './pages/Home'
import Single from './pages/Single'


const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
      <Navbar/>
      <Home/>
      <Footer/>
      </div>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/Write',
    element: <Write/>
  },
  {
    path: '/Home',
    element: <Home/>
  },
  {
    path: '/Single',
    element: <Single/>
  },
]);

function App() {
  return (
    <div>
   <RouterProvider router={router}/>
    </div>
  )
  }
const Layout = () =>{
  return(
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}
export default App
