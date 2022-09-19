import styles from "./CompanyLogo.module.css";
import { AlertOutlined } from "@ant-design/icons";

function CompanyLogo() {
  return (
    <div className={styles.logoContainer}>
      <AlertOutlined className={styles.logoIcon} />
      <span className={styles.logoName}>CODE POLICE</span>
    </div>
  );
}

export default CompanyLogo;
