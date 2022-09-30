import { Card } from "antd";
import Link from "next/link";
import LoginForm from "../../child_components/LoginForm/LoginForm";
import CompanyLogo from "../../child_components/logo/CompanyLogo";
import styles from "./SigninView.module.css";
import {
  loginApi,
  setToken,
} from "../../../services/api/authorization.service";
import { useRouter } from "next/router";
import { useState } from "react";

type SigninViewProps = {};

function SigninView(props: SigninViewProps) {
  const {} = props;
  const router = useRouter();
  const [formState, setFormState] = useState("OK");

  const onFinsihHandler = function (userCredentials: any) {
    loginApi(userCredentials).then(function (response) {
      const { data } = response;

      if (data?.responseStatus === "OK") {
        setToken(data?.response);
        setFormState("OK");
        router.push("/home");
      }

      if (data?.responseStatus === "UNAUTHORIZED") {
        setFormState("UNAUTHORIZED");
      }
    });
  };

  return (
    <div className={styles.loginPage}>
      <Card
        title={<CompanyLogo />}
        bordered={false}
        className={styles.signinCard}
      >
        <LoginForm formState={formState} onFinishHandler={onFinsihHandler} />

        {/* <div className={`${styles.signupMessage} hidden`}>
          Don&apos;t have an account ?{" "}
          <Link href="">
            <span className={styles.signupLink}>sign up</span>
          </Link>
        </div> */}
      </Card>
    </div>
  );
}

export default SigninView;
