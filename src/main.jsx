import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Lazy-load pages so the initial JS payload is much smaller and three.js
// only ships when a route that actually needs it is opened.
const Home = lazy(() => import("./pages/Home.jsx"));
const Explore = lazy(() => import("./pages/Explore.jsx"));
const CelestialPage = lazy(() => import("./pages/CelestialPage.jsx"));

const PageFallback = () => (
  <div className="pt-40 flex items-center justify-center">
    <div className="w-10 h-10 rounded-full border-2 border-nebula/30 border-t-nebula animate-spin" />
  </div>
);

const withSuspense = (Component) => (
  <Suspense fallback={<PageFallback />}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: withSuspense(Home) },
      { path: "explore", element: withSuspense(Explore) },
      { path: "explore/:slug", element: withSuspense(CelestialPage) },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
