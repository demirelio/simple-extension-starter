//This file is the entry point for the content script
//We work directly on the website DOM and we can use any of the browser APIs
//There is shadow dom here.
import React from "react";
import { createRoot } from "react-dom/client";
import ContentApp from "./routes/content-app";
import ErrorPage from "./error-page";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
//This code creates a root div and appends it into the website
const contentRoot = document.createElement("div");
contentRoot.id = "__NOCEAN";
document.body.append(contentRoot);

//It creates our main memory router
const router = createMemoryRouter([
  {
    path: "/",
    element: <ContentApp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/todos",
    element: <div>todos</div>,
  },
]);

const root = createRoot(contentRoot);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
