import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavBar from "./NavBar.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Venus from "./Venus.jsx";
import Mars from "./Mars.jsx";
import Jupiter from "./Jupiter.jsx";
import Earth from "./Earth.jsx";
import Mercury from "./Mercury.jsx";
import Neptune from "./Neptune.jsx";
import Saturn from "./Saturn.jsx";
import Kepler186f from "./Kepler186f.jsx";
import ProximaCentauriB from "./ProximaCentauriB.jsx";
import PegasiB from "./PegasiB.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/venus",
    element: <Venus />,
  },
  {
    path: "/mars",
    element: <Mars />,
  },
  {
    path: "/jupiter",
    element: <Jupiter />,
  },
  {
    path: "/earth",
    element: <Earth />,
  },
  {
    path: "/mercury",
    element: <Mercury />,
  },
  {
    path: "/neptune",
    element: <Neptune />,
  },
  {
    path: "/saturn",
    element: <Saturn />,
  },
  {
    path: "/kepler-186f",
    element: <Kepler186f />,
  },
  {
    path: "/proxima-centauri-b",
    element: <ProximaCentauriB />,
  },
  {
    path: "/51-pegasi-b",
    element: <PegasiB />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
