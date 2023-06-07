import Button from "../../utils/Button/Button";
import styles from "./LoginActions.module.css";
import ProtectedElement from "../../Protected/Protected.jsx";
import { client } from "../../../hooks/useAuth.jsx";

export default function LoginActions(props) {
  const showProfileInfoHandler = () => {
    const url =
      "http://localhost:8080/realms/oracle-development/protocol/openid-connect/userinfo";
    const req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Authorization", "bearer" + client.token);

    req.onreadystatechange = function () {
      if (req.readyState == 4) {
        if (req.status == 200) {
          const data = JSON.parse(req.responseText);
          console.log(data);
        } else if (req.status == 403) {
          alert("Forbidden");
        }
      }
    };

    req.send();
  };

  return (
    <div className={styles["oracle-login-actions"]}>
      <div className={styles["actions-container"]}>
        {/*<Button onClick={showProfileInfoHandler}>Go To Profile</Button>*/}
        <ProtectedElement>
          <Button
            to={
              "http://localhost:8080/admin/master/console/#/oracle-development"
            }
            identifier="register"
          >
            Open Admin Panel
          </Button>
        </ProtectedElement>
        <Button to={"/logout"}>Log Out</Button>
      </div>
    </div>
  );
}
