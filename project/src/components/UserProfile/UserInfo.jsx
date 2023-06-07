import { Form } from "react-router-dom";
import styles from "./UserInfo.module.css";
import Button from "../utils/Button/Button";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function UserProfile() {
  const [editMode, setEditMode] = useState(true);

  const user = useSelector((state) => state.authorization.user);
  const userRoles = useSelector(
    (state) => state.authorization.user.realm_access.roles
  );

  const [firstName, setFirstName] = useState(user.given_name);
  const [lastName, setLastName] = useState(user.family_name);
  const [username, setUsername] = useState(user.preferred_username);
  const [email, setEmail] = useState(user.email || "No E-Mail");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (userRoles.includes("admin")) setRole("admin");
    else if (userRoles.includes("user")) setRole("user");
    else setRole("user");
  }, []);

  const [tempFirstName, setTempFirstName] = useState();
  const [tempLastName, setTempLastName] = useState();
  const [tempUsername, setTempUsername] = useState();
  const [tempEmail, setTempEmail] = useState();

  const editModeToggleHandler = () => {
    setEditMode((preVal) => !preVal);
    setTempFirstName(firstName);
    setTempLastName(lastName);
    setTempUsername(username);
    setTempEmail(email);
  };

  const cancelEditModeHandler = () => {
    setEditMode((preVal) => !preVal);
    setFirstName(tempFirstName);
    setLastName(tempLastName);
    setUsername(tempUsername);
    setEmail(tempEmail);
  };

  const saveChangesHandler = () => {
    setEditMode((preVal) => !preVal);
  };

  const changeValueHandler = (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case "firstName":
        setFirstName((val) => e.target.value);
        console.log(firstName.current);
        break;
      case "lastName":
        setLastName((val) => e.target.value);
        break;
      case "username":
        setUsername((val) => e.target.value);
        break;
      case "email":
        setEmail((val) => e.target.value);
        break;
    }
  };

  return (
    <div className={styles["oracle-user-profile--form-wrapper"]}>
      <Form className={styles["oracle-user-profile--form"]}>
        <div className={styles["oracle-user-profile--form"]}>
          <div className={styles["oracle-user-profile--input__first"]}>
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={changeValueHandler}
              id="firstName"
              value={firstName}
              disabled={editMode}
              className={styles["oracle-user-profile--input-field"]}
            />
          </div>
          <div className={styles["oracle-user-profile--input__last"]}>
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={changeValueHandler}
              id="lastName"
              value={lastName}
              disabled={editMode}
              className={styles["oracle-user-profile--input-field"]}
            />
          </div>
          <div className={styles["oracle-user-profile--input__username"]}>
            <label htmlFor="username">Preferred Username</label>
            <input
              onChange={changeValueHandler}
              id="username"
              value={username}
              disabled={editMode}
              className={styles["oracle-user-profile--input-field"]}
            />
          </div>
          <div className={styles["oracle-user-profile--input__email"]}>
            <label htmlFor="email">E-mail</label>
            <input
              onChange={changeValueHandler}
              id="email"
              value={email}
              disabled={editMode}
              className={styles["oracle-user-profile--input-field"]}
            />
          </div>
          <div className={styles["oracle-user-profile--input__role"]}>
            <label>Role</label>
            <input
              value={role.toUpperCase()}
              disabled={true}
              className={styles["oracle-user-profile--input-field"]}
            />
          </div>
        </div>

        {!editMode ? (
          <section className={styles["oracle-user-profile--actions"]}>
            <div>
              <Button
                onClick={cancelEditModeHandler}
                className={styles["actions--button"]}
                identifier="register"
              >
                Cancel
              </Button>
            </div>
            <div>
              <Button
                onClick={saveChangesHandler}
                className={styles["actions--button"]}
              >
                Save Changes
              </Button>
            </div>
          </section>
        ) : (
          <section className={styles["oracle-user-profile--actions"]}>
            <Button
              className={styles["actions--button"]}
              onClick={editModeToggleHandler}
            >
              Edit Info
            </Button>
          </section>
        )}
      </Form>
    </div>
  );
}
