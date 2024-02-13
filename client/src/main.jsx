import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import LogIn from './pages/LogIn.jsx'
import Register from './pages/Register.jsx';
import Account from './pages/Account.jsx';
import LeaguePage from './pages/LeaguePage';


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
      },
      {
        path: '/account',
        element: <Account/>
      },
      {
        path: '/league/:queryKey',
        element: <LeaguePage/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

