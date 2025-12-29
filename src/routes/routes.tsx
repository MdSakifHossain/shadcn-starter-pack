import { createBrowserRouter } from "react-router";

import App from "@/layouts/App";
import Homepage from "@/pages/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Homepage,
      },
    ],
  },
]);
