import styles from "./ConfigurationsListView.module.css";
import ConfigurationsCard from "../../child_components/ConfigurationsCard/ConfigurationsCard";
import { useRouter } from "next/router";
import PrimaryLayout from "../../layout/PrimaryLayout/PrimaryLayout";
import { Empty, Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useEffect, useMemo, useState } from "react";
import { fetchAllConfigurations } from "../../../services/api/config/config.service";
import { storeConfigInLocal } from "../../../services/localStorageData/configuration";

type ConfigurationsCardViewProps = {};

function ConfigurationsCardView(props: ConfigurationsCardViewProps) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(true);
  const [configurationsData, setConfigurationsData] = useState([]);

  useEffect(() => {
    storeConfigInLocal(configurationsData);
  }, [configurationsData]);

  const renderConfigurations = useMemo(
    () =>
      configurationsData?.length > 0 &&
      configurationsData.map((configuration, id) => (
        <ConfigurationsCard
          key={`${new Date().getTime()}-${id}`}
          configuration={configuration}
          className={styles.configurationsListItems}
        />
      )),
    [configurationsData]
  );

  useEffect(() => {
    setPageLoading(true);
    fetchAllConfigurations()
      .then((response) => {
        setConfigurationsData(response ?? []);
      })
      .catch(() => setConfigurationsData([]))
      .finally(() => {
        setPageLoading(false);
      });
  }, []);

  return (
    <div
      className={`${styles.configurationsListContainer} configuration-list-container`}
    >
      {pageLoading && (
        <LoadingOutlined
          style={{
            fontSize: "4rem",
            color: "gray",
            opacity: "0.5",
            marginTop: "14rem",
          }}
        />
      )}
      {!pageLoading && configurationsData.length > 0 && (
        <div className={styles.configurationsListSection}>
          {renderConfigurations}
        </div>
      )}

      {!pageLoading && configurationsData.length === 0 && (
        <div className="flex justify-center items-center mt-32">
          <Empty description="No configurations found">
            {/* <Button type="primary">Create new configurations</Button> */}
          </Empty>
        </div>
      )}
    </div>
  );
}

export default ConfigurationsCardView;
