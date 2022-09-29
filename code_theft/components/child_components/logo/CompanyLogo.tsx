import styles from "./CompanyLogo.module.css";
import { AlertOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

function CompanyLogo() {
  const router = useRouter();

  return (
    <div className={styles.logoContainer} onClick={() => router.push("/home")}>
      <AlertOutlined className={styles.logoIcon} />
      <span className={styles.logoName}>CODE POLICE</span>
    </div>
  );
}

export default CompanyLogo;
