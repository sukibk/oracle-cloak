import LoginForm from "./Login/LoginForm.jsx";
import styles from "./PageLayout.module.css";
import LoginBackground from "../../assets/Oracle-login-main.png";
import LoginText from "./Login/LoginText.jsx";
import LoginActions from "./LoginActions/LoginActions";
import MainNavigation from "../Dashboard/Navigation/TopNavigation/MainNavigation";
import { Outlet } from "react-router-dom";

export default function PageLayout() {
  return (
    <>
      <MainNavigation />
      <div className={styles.layout}>
        <div className={styles["login-background"]} />
        <div className={styles["login-context"]}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
