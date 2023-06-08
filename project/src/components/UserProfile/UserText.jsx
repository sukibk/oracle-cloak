import { useSelector } from "react-redux";
import styles from "./UserText.module.css";

export default function UserText() {
  const user = useSelector((store) => store.authorization.user);

  return (
    <div className={styles["oracle-user-profile--welcome"]}>
      <h1>
        Information for user: <br />
        <span className={styles["oracle-user-profile--user"]}>{user.name}</span>
      </h1>
      <hr />
    </div>
  );
}
