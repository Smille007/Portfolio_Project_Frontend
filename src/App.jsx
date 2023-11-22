import { Children } from 'react'
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'
import Write from './pages/Write'
import Home from './pages/Home'
import Single from './pages/Single'

import './style.scss'

const Layout =()=>{
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path: '/home',
        element: <Home/>
      },
      {    path: '/post/:id',
      element: <Single/>
    },
    {    
      path: '/write',
    element: <Write/>

    }
    ]
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/login',
    element: <Login/>
  },


]);

function App() {
  return (
    <div className='app'>

       <div className='container'>
        
        </div> 

   <RouterProvider router={router}/>
    </div>
  )
  }

export default App