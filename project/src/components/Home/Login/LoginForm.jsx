import styles from "./LoginForm.module.css";
import Button from "../../utils/Button/Button.jsx";
import { Form } from "react-router-dom";

export default function LoginForm() {
  return (
    <Form method="post" action={"/"} className={styles["oracle--user-login"]}>
      <div className={styles["user-login__inner"]}>
        <div className={styles["login-parameters"]}>
          <input placeholder="username" className={styles.input} />
          <input
            placeholder="password"
            type="password"
            className={styles.input}
          />
        </div>
        <div className={styles.actions}>
          <Button identifier="login" type="submit">
            Login
          </Button>
          <Button identifier="register" type="button">
            Create an Account
          </Button>
        </div>
      </div>
    </Form>
  );
}
