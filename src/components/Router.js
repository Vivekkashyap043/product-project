import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './home/Home'
import ProductDetails from './product-details/ProductDetails'
function Router() {
    let router = createBrowserRouter([
        {
            path:"",
            element:<Home />
        },
        {
            path:"product-details",
            element:<ProductDetails/>
        }
    ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Router
