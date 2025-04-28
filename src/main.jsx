import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Layout/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import Orders from "./Components/Orders/Orders.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import PrivateRoute from "./PrivateRoutes/PrivateRoute.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
// @ts-ignore
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
