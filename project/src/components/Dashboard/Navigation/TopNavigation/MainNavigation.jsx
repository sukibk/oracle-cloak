import styles from "./MainNavigation.module.css";
import logo from "../../../../assets/Oracle_mainnav.png";
import userProfilePic from "../../../../assets/oracle-user-profile.png";
import Button from "../../../utils/Button/Button";
import { useDispatch } from "react-redux";
import { navigationActions } from "../../../store/navigation-slice.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainNavigation() {
  const dispatchNavToggle = useDispatch();
  const navigateTo = useNavigate();

  const [navClass, setNavClass] = useState("oracle-nav--dropdown");

  // const toggleNavHandler = () => {
  //   dispatchNavToggle(navigationActions.toggleNavigationVisibility());
  // };

  const showNavHandler = () => {
    setNavClass("oracle-nav--dropdown__show");
  };

  const hideNavHandler = () => {
    setNavClass("oracle-nav--dropdown");
  };

  const navigateHomeHandler = () => {
    navigateTo("/");
  };

  return (
    <div onMouseLeave={hideNavHandler} className={styles["oracle-main--nav"]}>
      <div className={styles["oracle-main--nav__brand"]}>
        {/*<div*/}
        {/*  className={styles["oracle-main--nav__hamburger"]}*/}
        {/*  onClick={toggleNavHandler}*/}
        {/*>*/}
        {/*  <span />*/}
        {/*  <span />*/}
        {/*  <span />*/}
        {/*</div>*/}
        <img
          className={styles["oracle-logo"]}
          src={logo}
          width={150}
          onClick={navigateHomeHandler}
        />
      </div>
      <div className={styles["oracle-main--nav__tools"]}>
        <img onMouseEnter={showNavHandler} src={userProfilePic} width={65} />
        <div onMouseLeave={hideNavHandler} className={styles[`${navClass}`]}>
          <Link
            onClick={hideNavHandler}
            className={styles["oracle-nav--dropdown--link"]}
            to={"/user-profile"}
          >
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
