import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './LayOuts/MainLayout'
import Home from './Pages/Home'
import Products from './Products/Products'
import mycreatedRouter from './Rout/Rout'

// const mycreatedRouter=createBrowserRouter([{

//   path:"/",
//   element:<div className='text-center'>This is my home route</div>
// },
// {
//   path:"/products",
//   element: <div>product route hitted</div>
// },
// {
//   path:"/about",
//   element: <div>product route about</div> 
// }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={mycreatedRouter}></RouterProvider>
  </React.StrictMode>,
)
