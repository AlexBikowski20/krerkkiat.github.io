import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import ContactPage from './ContactPage'
import App from './App'

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
