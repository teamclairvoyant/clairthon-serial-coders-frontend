import styles from "./ConfigurationForm.module.css";
import { Button, Form, Input, Checkbox, Card } from "antd";
import CustomTagInput from "../CustomTagInput/CustomTagInput";

type ConfigurationFormProps = {
  className?: string;
  initialValues?: any;
  btnText?: string | undefined;
  onFinishHandler: (configOptioins: any) => void;
  onFinishFailedHandler?: () => void;
};

function ConfigurationForm(props: ConfigurationFormProps) {
  const {
    className = "",
    initialValues = {},
    onFinishHandler = () => {},
    onFinishFailedHandler = () => {},
    btnText = undefined,
  } = props;
  const [form] = Form.useForm();

  return (
    <Card title="Create new configuration" className={className}>
      <Form
        layout="vertical"
        form={form}
        size="middle"
        onFinish={onFinishHandler}
        onFinishFailed={onFinishFailedHandler}
        autoComplete="off"
        initialValues={initialValues}
      >
        <div className={"grid grid-cols-12 gap-x-10 mr-20"}>
          <Form.Item
            className="col-span-6"
            label="Configuration Name"
            name="configName"
            rules={[
              { required: true, message: "Configuration name is mandatory!" },
            ]}
          >
            <Input placeholder="Name of the configuration" />
          </Form.Item>

          <Form.Item
            className="col-span-6"
            label="Customer Name"
            name="customerName"
            rules={[{ required: true, message: "Customer name is mandatory!" }]}
          >
            <Input placeholder="Add the name of the project you want to secure" />
          </Form.Item>

          <Form.Item
            className="col-span-8"
            label="Code search keywords"
            name="codeSearchKeywords"
            rules={[
              {
                required: true,
                message: "code search keywords are mandatory!",
              },
            ]}
          >
            <Input
              placeholder="Add keywords which will help identify the code for 
eg. com.codetheft.java"
            />
          </Form.Item>

          <Form.Item
            className="col-span-8"
            label="User search keywords"
            name="userSearchKeywords"
            rules={[
              {
                required: false,
                message:
                  "It's mandatory to provide user search names as keywords",
              },
            ]}
          >
            <Input placeholder="Add filenames you have used in your project for e.g. my-project-service.java, my-custom-module.js" />
          </Form.Item>

          <Form.Item
            className="col-span-8"
            label="File names"
            name="fileNames"
            rules={[{ required: false, message: "file names are mandatory!" }]}
          >
            <Input placeholder="add filenames e.g: auth.java, crypto.js ..." />
          </Form.Item>

          <Form.Item
            className="col-span-8"
            label="Repository Names"
            name="repositoryNames"
            rules={[
              { required: false, message: "repository names are mandatory!" },
            ]}
          >
            <Input placeholder="Select the Languages the Project is written in" />
          </Form.Item>

          {/* <Form.Item className="col-span-8" label="Email Id for sending alerts">
            <Input placeholder="Enter the email id where you want to be notified" />
          </Form.Item> */}

          {/* <Form.Item className="col-span-8" label="Email Id for sending alerts">
            <CustomTagInput />
          </Form.Item> */}

          <div className="col-span-12  mt-4">
            <div className="flex gap-x-6 justify-end">
              <Form.Item
                name="run configuration"
                valuePropName="checked"
                className="select-none"
              >
                <Checkbox>Run configuration now</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  {btnText ?? "Create Configuration"}
                </Button>
              </Form.Item>
            </div>
          </div>
        </div>
      </Form>
    </Card>
  );
}

export default ConfigurationForm;
