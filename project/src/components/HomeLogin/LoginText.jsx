import styles from "./LoginText.module.css";

export default function LoginText() {
  return (
    <div className={styles["login-text-context"]}>
      <h3>Dear Guest, </h3>
      <h1> Welcome to Oracle Cloak</h1>
      <div className={styles["login-text-inner"]}>
        <h4>Enter your credentials to access dashboard:</h4>
      </div>
    </div>
  );
}
