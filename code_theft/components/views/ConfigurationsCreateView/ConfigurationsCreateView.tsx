import ConfigurationForm from "../../child_components/ConfigurationForm/ConfigurationForm";
import styles from "./ConfigurationsCreateView.module.css";
import { createConfiguration } from "../../../services/api/config/config.service";
import { useCallback } from "react";

type ConfigurationsCreateViewProps = {};

function ConfigurationsCreateView(props: ConfigurationsCreateViewProps) {
  const onFinishHandler = (configOptions: any) => {
    const temp = {
      configName: "TEST_CONFIG",
      codeSearchKeywords: null,
      userSearchKeywords: ["solankepoonam", "amrutachichani"],
      repositoryNames: null,
      classNames: null,
      customerName: null,
      modifiedBy: null,
      modifiedDate: "2022-09-23T12:06:40.971+00:00",
    };
    // const cleanConfigOptions = JSON.parse(JSON.stringify(configOptions));
    const cleanConfigOptions = { ...configOptions, ...temp };
    createConfiguration(cleanConfigOptions).then(function () {
      console.log("#995#: arguments are ", arguments);
    });
  };
  return (
    <div className={styles.configurationsCreateView}>
      <ConfigurationForm onFinishHandler={onFinishHandler} />
    </div>
  );
}

export default ConfigurationsCreateView;
