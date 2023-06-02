import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { action as loginAction } from "./pages/Home.jsx";
// import { loader as homeLoader } from "./pages/Home.jsx";
import SamplePage from "./pages/SamplePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    action: loginAction,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "dashboard",
        children: [
          {
            index: true,
            element: <Dashboard />,
            children: [
              {
                index: true,
                element: <SamplePage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
