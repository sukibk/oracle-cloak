import styles from "./ManageNavigation.module.css";
import { Link } from "react-router-dom";

export default function ManageNavigation(props) {
  return (
    <ul className={styles.navigation}>
      <li>
        <Link className={styles["nav-item"]} to={"/sample-page"}>
          Clients
        </Link>
      </li>
      <li>
        <Link className={styles["nav-item"]} to={"/sample-page"}>
          Client scopes
        </Link>
      </li>
      <li>
        <Link className={styles["nav-item"]} to={"/sample-page"}>
          Realm roles
        </Link>
      </li>
      <li>
        <Link className={styles["nav-item"]} to={"/sample-page"}>
          Users
        </Link>
      </li>
      <li>
        <Link className={styles["nav-item"]} to={"/sample-page"}>
          Groups
        </Link>
      </li>
      <li>
        <Link className={styles["nav-item"]} to={"/sample-page"}>
          Sessions
        </Link>
      </li>
      <li>
        <Link className={styles["nav-item"]} to={"/sample-page"}>
          Events
        </Link>
      </li>
    </ul>
  );
}
