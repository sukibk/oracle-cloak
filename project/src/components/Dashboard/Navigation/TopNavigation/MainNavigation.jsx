import styles from "./MainNavigation.module.css";
import logo from "../../../../assets/Oracle_mainnav.png";

export default function MainNavigation() {
  return (
    <div className={styles["oracle-main--nav"]}>
      <div className={styles["oracle-main--nav__brand"]}>
        <div className={styles["oracle-main--nav__hamburger"]}>
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
