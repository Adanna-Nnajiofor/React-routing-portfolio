import React from "react";
import "./index.css";
import RootPage from "./pages/RootPage.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Work from "./pages/Work.jsx";
import Services from "./pages/Services.jsx";
import Blog from "./pages/Blog.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/work",
          element: <Work />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
