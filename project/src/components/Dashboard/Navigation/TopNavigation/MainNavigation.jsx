import styles from "./MainNavigation.module.css";
import logo from "../../../../assets/Oracle_mainnav.png";
import Button from "../../../utils/Button/Button";
import { useDispatch } from "react-redux";
import { navigationActions } from "../../../store/navigation-slice.js";

export default function MainNavigation() {
  const dispatchNavToggle = useDispatch();

  const toggleNavHandler = () => {
    dispatchNavToggle(navigationActions.toggleNavigationVisibility());
  };

  return (
    <div className={styles["oracle-main--nav"]}>
      <div className={styles["oracle-main--nav__brand"]}>
        <div
          className={styles["oracle-main--nav__hamburger"]}
          onClick={toggleNavHandler}
        >
          <span />
          <span />
          <span />
        </div>
        <img src={logo} width={150} />
      </div>
      <div className={styles["oracle-main--nav__tools"]}>
        <div className={styles.info}></div>
        <img src=""></img>
      </div>
    </div>
  );
}
