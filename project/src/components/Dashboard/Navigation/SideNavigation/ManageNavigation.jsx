import styles from "./ManageNavigation.module.css";
import { Link } from "react-router-dom";

export default function ManageNavigation(props) {
  return (
    <ul className={styles.navigation}>
      <li className={styles["list-item"]}>
        <Link className={styles["nav-item"]} to={"/sample-page"}>
          Clients
        </Link>
      </li>
      <li className={styles["list-item"]}>
        <Link className={styles["nav-item"]} to={"/sample-page"}>
          Client scopes
        </Link>
      </li>
      <li className={styles["list-item"]}>
        <Link className={styles["nav-item"]} to={"/sample-page"}>
          Realm roles
        </Link>
      </li>
      <li className={styles["list-item"]}>
        <Link className={styles["nav-item"]} to={"/sample-page"}>
          Users
        </Link>
      </li>
      <li className={styles["list-item"]}>
        <Link className={styles["nav-item"]} to={"/sample-page"}>
          Groups
        </Link>
      </li>
      <li className={styles["list-item"]}>
        <Link className={styles["nav-item"]} to={"/sample-page"}>
          Sessions
        </Link>
      </li>
      <li className={styles["list-item"]}>
        <Link className={styles["nav-item"]} to={"/sample-page"}>
          Events
        </Link>
      </li>
    </ul>
  );
}
