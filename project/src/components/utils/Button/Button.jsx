import styles from "./Button.module.css";

export default function Button(props) {
  if (props.identifier === "register") {
    return (
      <button type={props.type} className={styles["button-white"]}>
        {props.children}
      </button>
    );
  } else {
    return (
      <button type={props.type} className={styles["button-green"]}>
        {props.children}
      </button>
    );
  }
}
