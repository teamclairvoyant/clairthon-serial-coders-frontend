import { Card, Form } from "antd";
import Link from "next/link";
import LoginForm from "../../child_components/LoginForm/LoginForm";
import CompanyLogo from "../../child_components/logo/CompanyLogo";
import styles from "./SigninView.module.css";

type SigninViewProps = {};

function SigninView(props: SigninViewProps) {
  const {} = props;

  return (
    <div className={styles.loginPage}>
      <Card
        title={<CompanyLogo />}
        bordered={false}
        className={styles.signinCard}
      >
        <LoginForm />

        <div className={styles.signupMessage}>
          Don't have an account ?{" "}
          <Link href="">
            <span className={styles.signupLink}>sign up</span>
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default SigninView;
