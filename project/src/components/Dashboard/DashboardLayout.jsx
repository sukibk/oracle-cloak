import MainNavigation from "./Navigation/TopNavigation/MainNavigation.jsx";
import NavigationContainer from "./Navigation/SideNavigation/NavigationContainer.jsx";
import { Outlet } from "react-router-dom";
import styles from "./DashboardLayout.module.css";
import { useSelector } from "react-redux";
import SamplePage from "../../pages/SamplePage";

export default function DashboardLayout(props) {
  const displayNav = useSelector((state) => state.navigation.showNav);

  const userInfo = props.userInfo;
  return (
    <div>
      <MainNavigation />
      <div className={styles["dashboard-main"]}>
        <div>{displayNav && <NavigationContainer />}</div>
        <div className={styles.right}>
          <Outlet context={[userInfo]} />
        </div>
      </div>
    </div>
  );
}
