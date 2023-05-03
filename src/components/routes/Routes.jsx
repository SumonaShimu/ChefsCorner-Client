import React from 'react';
import Layout from '../Layout/Layout';
import Login from '../Login';
import Register from '../Register';
import Blog from '../Blog';
import { createBrowserRouter } from 'react-router-dom';
import Main from './Main';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Main></Main>,
          loader:()=>fetch('http://localhost:5000/chefs')
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
      ]
    },
  ]);


export default router;