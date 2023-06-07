import styles from "./Button.module.css";
import { Link } from "react-router-dom";

export default function Button(props) {
  if (props.to === undefined) {
    if (props.identifier === "register") {
      return (
        <button
          onClick={props.onClick}
          type={props.type}
          className={styles["button-white"]}
        >
          {props.children}
        </button>
      );
    } else {
      return (
        <button
          onClick={props.onClick}
          type={props.type}
          className={styles["button-green"]}
        >
          {props.children}
        </button>
      );
    }
  } else {
    if (props.identifier === "register") {
      return (
        <Link to={props.to} className={styles["button-white"]}>
          {props.children}
        </Link>
      );
    } else {
      return (
        <Link to={props.to} className={styles["button-green"]}>
          {props.children}
        </Link>
      );
    }
  }
}
