import styles from "./ConfigurNavigation.module.css";
import { Link } from "react-router-dom";

export default function ConfigureNavigation() {
  return (
    <ul className={styles.navigation}>
      <li className={styles["list-item"]}>
        <Link className={styles["nav-item"]} to={"/sample-page"}>
          Realm settings
        </Link>
      </li>
      <li className={styles["list-item"]}>
        <Link className={styles["nav-item"]} to={"/sample-page"}>
          Authentication
        </Link>
      </li>
      <li className={styles["list-item"]}>
        <Link className={styles["nav-item"]} to={"/sample-page"}>
          Identity providers
        </Link>
      </li>
      <li className={styles["list-item"]}>
        <Link className={styles["nav-item"]} to={"/sample-page"}>
          User federation
        </Link>
      </li>
    </ul>
  );
}
