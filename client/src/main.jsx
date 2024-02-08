import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import LogIn from './pages/LogIn.jsx'
import Register from './pages/Register.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/login',
        element: <LogIn/>
      },
      {
        path: '/signup',
        element: <Register/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

