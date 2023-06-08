import UserText from "./UserText";
import UserProfile from "./UserInfo";
import styles from "./UserPagelayout.module.css";
import Button from "../utils/Button/Button";
import { useNavigate } from "react-router-dom";
import { client } from "../../hooks/useAuth.jsx";
import { useEffect } from "react";

export default function UserPageLayout() {
  const navigateTo = useNavigate();

  // console.log(client.token);

  const goBackHandler = () => {
    navigateTo("/");
    // client
    //   .updateToken(30)
    //   .then(() => {
    //     alert("Succesful");
    //     console.log("Succesfull");
    //   })
    //   .catch(() => {
    //     alert("Error");
    //     console.log("Error");
    //   });
  };

  useEffect(() => {});

  return (
    <div className={styles["oracle--user-info-page"]}>
      <UserText />
      <UserProfile />
      <Button
        onClick={goBackHandler}
        className={styles["oracle--home-button"]}
        identifier="register"
      >
        {
          <svg viewBox="0 0 448 512" width="15" title="arrow-left">
            <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
          </svg>
        }
        Go Back
      </Button>
    </div>
  );
}
