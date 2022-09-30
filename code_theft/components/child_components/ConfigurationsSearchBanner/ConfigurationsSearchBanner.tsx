import styles from "./ConfigurationsSearchBanner.module.css";
import { Button, Descriptions, PageHeader, Typography } from "antd";
import useLocalStorage from "@rehooks/local-storage";
import { useRouter } from "next/router";
import { useMemo } from "react";
import useRouterBaseConfigurationData from "../../../hooks/useRouterBaseConfigurationData";
import TagsGenerator from "../TagsGenerator/TagsGenerator";

const { Title } = Typography;

type ConfigurationsSearchBannerProps = {
  configuration?: any;
};

function ConfigurationsSearchBanner(props: ConfigurationsSearchBannerProps) {
  const [configuration] = useRouterBaseConfigurationData();

  const checkForEmptyArrayorStr = (config: [any]) => {
    if (config?.length <= 1) {
      if (config?.length === 1) {
        if (config[0] === "") return false;
        return config?.length ? true : false;
      }
    }

    return true;
  };

  return (
    <div className={styles.configurationsSearchBanner}>
      <Title level={5} className="pb-2">
        Configuration Details
      </Title>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title={configuration?.configName ?? ""}
        extra={[]}
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Configuration name">
            {configuration?.configName}
          </Descriptions.Item>

          <Descriptions.Item label="Customer name">
            {configuration?.customerName}
          </Descriptions.Item>
        </Descriptions>

        <Descriptions size="small" column={1}>
          {checkForEmptyArrayorStr(configuration?.codeSearchKeywords) && (
            <Descriptions.Item label="Code search tags">
              <TagsGenerator input={configuration?.codeSearchKeywords} />
            </Descriptions.Item>
          )}

          {checkForEmptyArrayorStr(configuration?.userSearchKeywords) && (
            <Descriptions.Item label="User related search tags">
              <TagsGenerator input={configuration?.userSearchKeywords} />
            </Descriptions.Item>
          )}

          {checkForEmptyArrayorStr(configuration?.repositoryNames) && (
            <Descriptions.Item label="Repository search tags">
              <TagsGenerator input={configuration?.repositoryNames} />
            </Descriptions.Item>
          )}

          {checkForEmptyArrayorStr(configuration?.fileNames) && (
            <Descriptions.Item label="Filename tags">
              <TagsGenerator input={configuration?.fileNames} />
            </Descriptions.Item>
          )}
        </Descriptions>
      </PageHeader>
    </div>
  );
}

export default ConfigurationsSearchBanner;
