import React from 'react';
import Layout from '../Layout/Layout';
import Login from '../Login';
import Register from '../Register';
import Blog from '../Blog';
import { createBrowserRouter } from 'react-router-dom';
import Main from './Main';
import Recepies from '../Recepies';
import Error from '../Error';
import PrivateRoute from './PrivateRoute';
import AllRecepies from '../AllRecepies';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    loader: () => fetch('https://project-murighonto-server-sumonashimu.vercel.app/chefs').then(res => res.json()),
    children: [
      {
        path: "/",
        element: <Main></Main>,
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
      {
        path: "/recepies",
        element: <PrivateRoute><AllRecepies></AllRecepies></PrivateRoute>
      },
      {
        path: "/chefs/:id",
        element: <PrivateRoute><Recepies></Recepies></PrivateRoute>,
        loader: ({ params }) => fetch(`https://project-murighonto-server-sumonashimu.vercel.app/chefs/${params.id}`),
      },
      {
        path: "*",
        element: <Error></Error>
      }
    ],
  },

]);


export default router;