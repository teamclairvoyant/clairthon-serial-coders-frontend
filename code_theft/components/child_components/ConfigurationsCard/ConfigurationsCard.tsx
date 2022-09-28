import { Avatar, Card, Typography } from "antd";
import styles from "./ConfigurationsCard.module.css";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
// import Link from "next/link";

const { Meta } = Card;
const { Link } = Typography;

type ConfigurationsCardProps = {
  className?: string;
  cardClickHandler?: () => any;
};

function ConfigurationsCard(props: ConfigurationsCardProps) {
  const { className = "", cardClickHandler = () => {} } = props;

  return (
    <Card
      title={"Configuration Name"}
      className={className}
      style={{ width: 300 }}
      actions={[
        // <SettingOutlined key="setting" />,
        // <EditOutlined key="edit" />,
        // <ArrowRightOutlined
        //   key="arrowRightOutlined"
        //   title={"view results"}
        //   onClick={cardClickHandler}
        // />,
        <Link href="#" onClick={cardClickHandler}>
          <div className={"flex justify-center items-center text-[#1890ff]"}>
            view potential threats <ArrowRightOutlined className="ml-2 " />
          </div>
        </Link>,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
}

export default ConfigurationsCard;
