import { Button, Form, Input, Typography } from "antd";
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  LockOutlined,
} from "@ant-design/icons";
import styles from "./LoginForm.module.css";

const { Text } = Typography;

type LoginFormProps = {
  formState: string;
  onFinishHandler: (userCredentials: any) => void;
  onFinishFailedHandler?: () => {};
};

function LoginForm(props: LoginFormProps) {
  const {
    formState = "DEFAULT",
    onFinishHandler = () => {},
    onFinishFailedHandler = () => {},
  } = props;

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinishHandler}
      onFinishFailed={onFinishFailedHandler}
      autoComplete="off"
    >
      {formState === "UNAUTHORIZED" && (
        <Text type="danger">Username or Password is incorrect</Text>
      )}
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
        className={styles.formItem}
      >
        <Input
          placeholder="username"
          prefix={<UserOutlined />}
          className={styles.formItem}
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
        className={styles.formItem}
      >
        <Input.Password
          placeholder="password"
          className={styles.formItem}
          prefix={<LockOutlined />}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles.submitBtn}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
