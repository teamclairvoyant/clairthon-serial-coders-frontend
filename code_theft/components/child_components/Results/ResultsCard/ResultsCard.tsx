import { MoreOutlined } from "@ant-design/icons";
import {
  Button,
  Descriptions,
  Dropdown,
  Menu,
  PageHeader,
  Row,
  Tag,
  Typography,
} from "antd";
import React from "react";
import {
  DownloadOutlined,
  FileTextOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import styles from "./ResultsCard.module.css";
const { Paragraph } = Typography;

type ResultsCardProps = {
  cardData: any;
};

const ResultsCard = (props: ResultsCardProps) => {
  const { cardData } = props;

  const redirect = (url: string) => window.open(url, "_blank");

  return (
    <PageHeader
      title={cardData?.repository?.owner}
      className={`${styles.pageHeader} site-page-header`}
      tags={<Tag color="green">Public</Tag>}
      avatar={{
        src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
      }}
      extra={[
        <Button
          key="3"
          type="primary"
          shape="round"
          icon={<FileTextOutlined />}
          size={"middle"}
          className={styles.btnAlignment}
          onClick={() => redirect(cardData?.url)}
        >
          Go to File
        </Button>,
        <Button
          key="2"
          type="primary"
          shape="round"
          icon={<HomeOutlined />}
          size={"middle"}
          className={styles.btnAlignment}
          onClick={() => redirect(cardData?.repository?.url)}
        >
          Go to Repository
        </Button>,
      ]}
    >
      <Descriptions size="small" column={2}>
        <Descriptions.Item label="File name">
          {cardData?.name}
        </Descriptions.Item>
        <Descriptions.Item label="Repository name">
          {cardData?.repository?.name}
        </Descriptions.Item>
      </Descriptions>

      <Descriptions size="small" column={1}>
        <Descriptions.Item label="File URL">
          <Tag color="#00b4d8">{cardData?.url}</Tag>
        </Descriptions.Item>
        <Descriptions.Item label="Repository URL">
          <Tag color="#0077b6">{cardData?.repository?.url}</Tag>
        </Descriptions.Item>
      </Descriptions>
    </PageHeader>
  );
};

export default ResultsCard;
