import styles from "./ConfigurationsSearchBanner.module.css";
import { Button, Descriptions, PageHeader, Typography } from "antd";

const { Title } = Typography;

type ConfigurationsSearchBannerProps = {};

function ConfigurationsSearchBanner(props: ConfigurationsSearchBannerProps) {
  return (
    <div className={styles.configurationsSearchBanner}>
      <Title level={5}>Configuration Details</Title>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Configuration Name"
        subTitle="This is a subtitle"
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          <Button key="1" type="primary">
            Primary
          </Button>,
        ]}
      >
        <Descriptions size="small" column={1}>
          <Descriptions.Item label="Configuration name">
            Lili Qu
          </Descriptions.Item>
          <Descriptions.Item label="Keywords">2017-01-10</Descriptions.Item>
          <Descriptions.Item label="Filenames">2017-10-10</Descriptions.Item>
        </Descriptions>
      </PageHeader>
    </div>
  );
}

export default ConfigurationsSearchBanner;
