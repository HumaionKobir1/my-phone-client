import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main';
import Contact from './component/Contact';
import Phones from './component/Phones';
import Phone from './component/Phone';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/phones',
        element: <Phones></Phones>,
        loader: () => fetch('http://localhost:500/phones')
      },
      {
        path: '/phone/:id',
        element: <Phone></Phone>,
        loader: ({params})=>fetch(`http://localhost:500/phones/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>,
)
