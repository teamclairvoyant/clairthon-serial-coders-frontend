import { Avatar, Card, Typography } from "antd";
import styles from "./ConfigurationsCard.module.css";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import TagsGenerator from "../TagsGenerator/TagsGenerator";
// import Link from "next/link";

const { Meta } = Card;
const { Link, Title, Text } = Typography;

type ConfigurationsCardProps = {
  className?: string;
  cardClickHandler?: () => any;
  configuration: any;
};

function ConfigurationsCard(props: ConfigurationsCardProps) {
  const { className = "", configuration } = props;
  const router = useRouter();

  const cardClickHandler = () => {
    configuration.id
      ? router.push(`/code/config/${configuration?.id}/results`)
      : "";
  };

  return (
    <Card
      title={configuration?.configName}
      className={className}
      style={{ width: 300 }}
      extra={
        <EditOutlined
          twoToneColor="#1890ff"
          className="customEditOutlined"
          onClick={() => router.push(`/code/config/edit/${configuration?.id}`)}
        />
      }
      actions={[
        // <SettingOutlined key="setting" />,
        // <EditOutlined key="edit" />,
        // <ArrowRightOutlined
        //   key="arrowRightOutlined"
        //   title={"view results"}
        //   onClick={cardClickHandler}
        // />,
        <div onClick={cardClickHandler}>
          <div className={"flex justify-center items-center text-[#1890ff]"}>
            view reports <ArrowRightOutlined className="ml-2 " />
          </div>
        </div>,
      ]}
    >
      {/* <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title="Card title"
        description="This is the description"
      /> */}

      <Text strong className="block mb-1 capitalize">
        {configuration?.customerName}
      </Text>

      <Text className="block mb-1 opacity-60 text-[#27272a]">
        code search keywords:
      </Text>

      <TagsGenerator input={configuration?.codeSearchKeywords} />
    </Card>
  );
}

export default ConfigurationsCard;
