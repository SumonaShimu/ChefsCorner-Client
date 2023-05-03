import React from 'react';
import Layout from '../Layout/Layout';
import Login from '../Login';
import Register from '../Register';
import Blog from '../Blog';
import { createBrowserRouter } from 'react-router-dom';
import Main from './Main';
import Recepies from '../Recepies';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
        loader: () => fetch('https://project-murighonto-server-sumonashimu.vercel.app/chefs').then(res=>res.json())
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
    ],
  },
  {
    path: "/chefs",
    element: <Layout></Layout>,
    children: [
      {
        path: ":id",
        element: <Recepies></Recepies>,
        loader: ({params}) => fetch(`https://project-murighonto-server-sumonashimu.vercel.app/chefs/${params.id}`)
      }
    ]
  }

]);


export default router;