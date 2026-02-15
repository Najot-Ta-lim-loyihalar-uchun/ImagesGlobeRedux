import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

/* Layouts  */
import PublicLayouts from "./layouts/PublicLayouts";

/* Pages */
import ImagesPage from "./pages/ImagesPage";
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const DownloadsPage = lazy(() => import("./pages/DownloadsPage"));
const LikedImagespage = lazy(() => import("./pages/LikedImagesPage"));
const DetailsPage = lazy(() => import("./pages/DetailsPage"));

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayouts />,
      children: [
        {
          index: true,
          element: <ImagesPage />,
        },
        {
          path: "/downloads",
          element: <DownloadsPage />,
        },
        {
          path: "/liked",
          element: <LikedImagespage />,
        },
        {
          path: "/:id",
          element: <DetailsPage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
