import styles from "./LoginForm.module.css";
import Button from "../utils/Button/Button";

export default function LoginForm() {
  return (
    <form className={styles["oracle--user-login"]}>
      <div className={styles["user-login__inner"]}>
        <div className={styles["login-parameters"]}>
          <input placeholder="username" className={styles.input} />
          <input placeholder="password" className={styles.input} />
        </div>
        <div className={styles.actions}>
          <Button identifier="login" type="submit">
            Login
          </Button>
          <Button identifier="register" type="submit">
            Create an Account
          </Button>
        </div>
      </div>
    </form>
  );
}
