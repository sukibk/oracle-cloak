import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { action as loginAction } from "./pages/Home.jsx";
import SamplePage from "./pages/SamplePage.jsx";
// import { loader as loginLoader } from "./pages/Home";
import { loader as userLoader } from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    action: loginAction,
    // loader: loginLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "dashboard",
        loader: userLoader,
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
]);
export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
