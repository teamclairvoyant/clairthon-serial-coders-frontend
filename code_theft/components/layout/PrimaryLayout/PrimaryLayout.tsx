import { Layout } from "antd";
import styles from "./PrimaryLayout.module.css";
import AppHeader from "../../child_components/Header/Header";
import { ReactNode } from "react";

type PrimaryLayoutProps = {
  ContentChildren?: ReactNode;
  children?: ReactNode;
};

const { Content } = Layout;

function PrimaryLayout(props: PrimaryLayoutProps) {
  const { children } = props;
  const heightAdjustment = "64px";

  return (
    <Layout className={styles.primaryLayoutContainer}>
      <AppHeader style={{ position: "fixed", zIndex: 1, width: "100%" }} />

      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
          marginTop: heightAdjustment,
          paddingTop: 10,
          minHeight: `calc(100vh - ${heightAdjustment})`,
        }}
      >
        {children}
      </Content>
    </Layout>
  );
}

export default PrimaryLayout;
