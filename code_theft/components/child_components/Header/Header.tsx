import styles from "./Header.module.css";
import { Button, Dropdown, Menu, PageHeader } from "antd";
import CompanyLogo from "../logo/CompanyLogo";
import { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { EllipsisOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { logoutFunctionality } from "../../../services/api/authorization.service";
import { useRouter } from "next/router";

type HeaderProps = {
  enableBackIcon?: ReactNode | boolean;
  subTitle?: string;
  style?: CSSProperties;
};

function Header(props: HeaderProps) {
  const { enableBackIcon = false, subTitle, style } = props;
  const router = useRouter();

  const logoutHandler = () => {
    logoutFunctionality();
    router.push("/auth/sign");
  };

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a rel="noopener noreferrer" href="#" onClick={logoutHandler}>
              Log out
            </a>
          ),
        },
      ]}
    />
  );

  return (
    <PageHeader
      className={styles.sitePageHeader}
      backIcon={enableBackIcon ? <ArrowLeftOutlined /> : false}
      onBack={() => router.push("/home")}
      style={style}
      title={<CompanyLogo />}
      subTitle={subTitle ?? "prevent your sensitive data from getting online"}
      extra={[
        <Link href="/code/config/view" key={1}>
          <Button>View Configurations</Button>
        </Link>,
        <Link href="/code/config/create" key={2}>
          <Button type="primary">Add new configuration</Button>
        </Link>,
        <Dropdown overlay={menu} key={3} placement="bottomRight" arrow>
          <Button className={styles.dropdownBtn}>
            <EllipsisOutlined className={styles.ellipsisOutlined} />
          </Button>
        </Dropdown>,
      ]}
    />
  );
}

export default Header;
