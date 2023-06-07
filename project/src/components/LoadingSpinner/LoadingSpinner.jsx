import styles from "./LoadingSpinner.module.css";
import loader from "../../assets/oracle-loading.gif";

export default function LoadingSpinner() {
  return (
    <div className={styles["oracle-loading-spinner--container"]}>
      <img
        src={loader}
        className={styles["oracle-loading-spinner"]}
        width={200}
      />
    </div>
  );
}
