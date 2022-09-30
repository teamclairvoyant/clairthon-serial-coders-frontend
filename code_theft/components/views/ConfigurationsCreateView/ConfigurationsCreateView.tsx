import ConfigurationForm from "../../child_components/ConfigurationForm/ConfigurationForm";
import styles from "./ConfigurationsCreateView.module.css";
import {
  createConfiguration,
  triggerConfiguration,
} from "../../../services/api/config/config.service";
import { useCallback } from "react";
import { useRouter } from "next/router";

type ConfigurationsCreateViewProps = {};

function ConfigurationsCreateView(props: ConfigurationsCreateViewProps) {
  const router = useRouter();

  const generateArray = (str: string) =>
    str.split(",").map((val) => val.trim()) ?? null;

  const onFinishHandler = (configOptions: any) => {
    const additional = {
      modifiedBy: "shubham@temporary.com",
      modifiedDate: "2022-09-23T12:06:40.971+00:00",
    };

    const invokeSearchNow = configOptions?.invokeSearchNow;

    delete configOptions?.invokeSearchNow;

    configOptions.codeSearchKeywords = generateArray(
      configOptions?.codeSearchKeywords ?? ""
    );

    configOptions.userSearchKeywords = generateArray(
      configOptions?.userSearchKeywords ?? ""
    );

    configOptions.repositoryNames = generateArray(
      configOptions?.repositoryNames ?? ""
    );

    configOptions.fileNames = generateArray(configOptions?.fileNames ?? "");

    configOptions.scheduled = configOptions.scheduled ?? false;

    const payload = { ...configOptions, ...additional };

    createConfiguration(payload).then(function (response) {
      if (invokeSearchNow) {
        triggerConfiguration(response?.data?.id).then((response) => {
          router.push("/code/config/view");
        });
      } else {
        router.push("/code/config/view");
      }
    });
  };

  return (
    <div className={styles.configurationsCreateView}>
      <ConfigurationForm onFinishHandler={onFinishHandler} />
    </div>
  );
}

export default ConfigurationsCreateView;
