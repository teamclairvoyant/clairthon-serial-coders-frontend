import styles from "./Header.module.css";
import { PageHeader } from "antd";
import CompanyLogo from "../logo/CompanyLogo";
import { ReactNode } from "react";
import Link from "next/link";

type HeaderProps = {
  backIcon?: ReactNode | boolean,
  subTitle?: string
};

function Header(props: HeaderProps) {
  const { backIcon = false } = props;

  return (
    <PageHeader
      className={styles.sitePageHeader}
      backIcon={backIcon}
      onBack={() => null}
      title={
        <Link href={"/home"}>
          <CompanyLogo />
        </Link>
      }
      subTitle={props.subTitle || "prevent your sensitive data from getting online"}
    />
  );
}

export default Header;
