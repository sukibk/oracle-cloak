import styles from "./LoginText.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function LoginText() {
  const user = useSelector((store) => store.authorization.user);
  const userRoles = useSelector(
    (store) => store.authorization.user.realm_access.roles
  );
  const [currentRole, setCurrentRole] = useState("");

  useEffect(() => {
    if (userRoles.includes("admin")) setCurrentRole("admin");
    else if (userRoles.includes("user")) setCurrentRole("user");
    else setCurrentRole("user");
  }, []);

  return (
    <div className={styles["login-text-context"]}>
      <h3>
        Dear {user.given_name} ({String(currentRole).toUpperCase()}),{" "}
      </h3>
      <h1> Welcome to Oracle Cloak</h1>
      <div className={styles["login-text-inner"]}>
        <h4>Enter your credentials to access dashboard:</h4>
      </div>
    </div>
  );
}
