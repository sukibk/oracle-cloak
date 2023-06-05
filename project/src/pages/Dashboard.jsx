import NavigationContainer from "../components/Dashboard/Navigation/SideNavigation/NavigationContainer.jsx";
import MainNavigation from "../components/Dashboard/Navigation/TopNavigation/MainNavigation";
import DashboardLayout from "../components/Dashboard/DashboardLayout.jsx";
import { client } from "../hooks/useAuth.jsx";
import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const user = useLoaderData();
  const isLoggedIn = useSelector((store) => store.authorization.isLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <DashboardLayout userInfo={user} />
      ) : (
        <h1>Not Logged in</h1>
      )}
    </>
  );
}

export async function loader({ request }) {
  const user = await client
    .loadUserProfile()
    .success((profile) => profile)
    .error("error in production");
  console.log(user);
  return user;
}

//https://wjw465150.gitbooks.io/keycloak-documentation/content/securing_apps/topics/oidc/javascript-adapter.html
