import styles from "./NavigationContainer.module.css";
import ManageNavigation from "./ManageNavigation.jsx";
import ConfigureNavigation from "./ConfigureNavigation.jsx";
import Button from "../../../utils/Button/Button.jsx";

export default function NavigationContainer() {
  return (
    <div className={styles["oracle-cloak-nav"]}>
      <div className={styles["oracle-cloak-nav--inner"]}>
        <div className={styles.select}>
          <select name="realms">
            <option value="master">master</option>
            <option>Create Realm</option>
          </select>
        </div>
        <div className={styles.manage}>
          <hr />
          <div className={styles["manage-inner"]}>
            <p>Manage</p>
          </div>
          <hr />
          <div className={styles["inner--nav"]}>
            <ManageNavigation />
          </div>
        </div>
        <div className={styles.configure}>
          <div className={styles["configure-inner"]}>
            <p>Configure</p>
          </div>
          <hr />
          <div className={styles["inner--nav"]}>
            <ConfigureNavigation />
          </div>
        </div>
      </div>
    </div>
  );
}
