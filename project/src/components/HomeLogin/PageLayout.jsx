import LoginForm from "./LoginForm";
import styles from "./PageLayout.module.css";
import LoginBackground from "../../assets/Oracle-login-main.png";
import LoginText from "./LoginText";

export default function PageLayout() {
  return (
    <div className={styles.layout}>
      <div className={styles["login-background"]} />
      <div className={styles["login-context"]}>
        <LoginText />
        <LoginForm />
      </div>
    </div>
  );
}
