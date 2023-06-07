import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { action as loginAction } from "./pages/Home.jsx";
import SamplePage from "./pages/SamplePage.jsx";
// import { loader as loginLoader } from "./pages/Home";
import { loader as userLoader } from "./pages/Dashboard";
import { loader as logoutLoader } from "./pages/Logout.jsx";
import WelcomePage from "./pages/Welcome";
import UserProfilePage from "./pages/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    action: loginAction,
    // loader: loginLoader,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [
          {
            index: true,
            element: <WelcomePage />,
          },
          {
            path: "/user-profile",
            element: <UserProfilePage />,
          },
        ],
      },
      {
        path: "logout",
        loader: logoutLoader,
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
