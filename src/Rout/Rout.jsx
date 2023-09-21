import React from 'react';
import {  createBrowserRouter } from 'react-router-dom'
import MainLayout from '../LayOuts/MainLayout'
import Home from '../Pages/Home'
import Products from '../Products/Products'
import Product from '../Product/Product';
import DasboardLayout from '../Dasboard/DasboardLayout';
import Dasboard from '../Dasboard/Dasboard';
import Profile from '../Page/Profile';
import EditProfile from '../Profile/EditProfile';

const mycreatedRouter=createBrowserRouter([{

    path:"/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/products",
        element: <Products></Products>,
        loader:()=>fetch(`https://dummyjson.com/products`)
        
      },
      {
        path:"/product/:id",
        element: <Product></Product>,
        loader:(object)=>fetch(`https://dummyjson.com/products/${object.params.id}`)
        
      },
      {
        path:"/dasboard",
        element: <DasboardLayout></DasboardLayout>,
        children:[
         {
          path:"/dasboard",
          element:<Dasboard></Dasboard>
         },
         {
          path:"/dasboard/profile",
          element:<Profile></Profile>
         },
         {
          path:"/dasboard/editProfile",
          element:<EditProfile></EditProfile>
         }

        ]
      }
    ]
    
  }
  
  ])

export default  mycreatedRouter;