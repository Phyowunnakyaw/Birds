import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import { Layout } from "../Pages/Layout/Layout";
import Home from "../Pages/Home";
import Birds from "../Pages/Birds";
import Document from "../Pages/Document"
import Detail from "../Pages/Detail";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children : [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/Birds",
            element: <Birds />
        },
        {
            path: "/Document",
            element: <Document />
        },
        {
            path: "Birds/:id",
            element: <Detail />
        }
      ]
    },
  ]);

export default router;  