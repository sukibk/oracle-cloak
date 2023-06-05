import styles from "./SamplePage.module.css";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SamplePage(props) {
  const [userInfo] = useOutletContext();
  const userName = useSelector((store) => store.authorization.user);
  return (
    <div className={styles.sample}>
      <h1>
        Welcome {userInfo.firstName}! You are{" "}
        {userInfo.attributes["prime_role"][0]}
      </h1>
    </div>
  );
}
