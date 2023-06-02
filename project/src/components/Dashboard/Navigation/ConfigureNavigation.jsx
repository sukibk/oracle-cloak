import styles from "./ConfigurNavigation.module.css";
import { Link } from "react-router-dom";

export default function ConfigureNavigation() {
  return (
    <ul className={styles.navigation}>
      <li>
        <Link className={styles["nav-item"]} to={"/sample-page"}>
          Realm settings
        </Link>
      </li>
      <li>
        <Link className={styles["nav-item"]} to={"/sample-page"}>
          Authentication
        </Link>
      </li>
      <li>
        <Link className={styles["nav-item"]} to={"/sample-page"}>
          Identity providers
        </Link>
      </li>
      <li>
        <Link className={styles["nav-item"]} to={"/sample-page"}>
          User federation
        </Link>
      </li>
    </ul>
  );
}
