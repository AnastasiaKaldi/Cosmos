import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavBar from "./NavBar.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Venus from "./Venus.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/venus",
    element: <Venus />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
