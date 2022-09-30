import styles from "./LandingPageView.module.css";
import { Button } from "antd";
import Banner from "../../child_components/Banner/Banner";
import PlusOutlined from "@ant-design/icons";
import Link from "next/link";

type LandingPageViewProps = {};

function LandingPageView(props: LandingPageViewProps) {
  const {} = props;

  return (
    <div className={styles.landingPageContainer}>
      <div className={styles.bodyContainer}>
        <div className={styles.bannerWrapper}>
          <Banner content="To Identify the Code Theft. We will need some information about your project.You can create & save configuration for a project." />

          <div className="flex flex-col justify-center items-center">
            <span className={styles.miniInfo}>
              Click on the button to create a new configuration
            </span>

            <Link href="/code/config/create">
              <Button
                className={styles.addConfigurationBtn}
                type="primary"
                icon={<PlusOutlined />}
                block={false}
              >
                Add new configuration
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageView;
