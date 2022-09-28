import styles from "./ConfigurationsListView.module.css";
import ConfigurationsCard from "../../child_components/ConfigurationsCard/ConfigurationsCard";
import { useRouter } from "next/router";
import PrimaryLayout from "../../layout/PrimaryLayout/PrimaryLayout";
import { Empty, Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useEffect, useMemo, useState } from "react";
import { fetchAllConfigurations } from "../../../services/api/config/config.service";

type ConfigurationsCardViewProps = {};

function ConfigurationsCardView(props: ConfigurationsCardViewProps) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState("SUCCESS");
  const [configurationsData, setConfigurationsData] = useState(
    new Array(100).fill("a")
  );

  const renderConfigurations = useMemo(
    () =>
      configurationsData?.length > 0 &&
      configurationsData.map(() => (
        <ConfigurationsCard
          className={styles.configurationsListItems}
          cardClickHandler={() => {
            router.push("/code/config/1/results");
          }}
        />
      )),
    [configurationsData]
  );

  useEffect(() => {
    fetchAllConfigurations();
  });

  return (
    <div className={styles.configurationsListContainer}>
      {pageLoading === "LOADING" && (
        <LoadingOutlined
          style={{
            fontSize: "4rem",
            color: "gray",
            opacity: "0.5",
            marginTop: "14rem",
          }}
        />
      )}
      {
        <div className={styles.configurationsListSection}>
          {renderConfigurations}
        </div>
      }

      {pageLoading === "NO_DATA" && (
        <div className="flex justify-center items-center">
          <Empty description="No configurations found">
            <Button type="primary">Create new configurations</Button>
          </Empty>
        </div>
      )}
    </div>
  );
}

export default ConfigurationsCardView;
