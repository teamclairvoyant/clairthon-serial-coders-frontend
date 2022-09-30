import ConfigurationForm from "../../child_components/ConfigurationForm/ConfigurationForm";
import styles from "./ConfigurationsEditView.module.css";
import {
  createConfiguration,
  triggerConfiguration,
  updateConfigurations,
} from "../../../services/api/config/config.service";
import { useRouter } from "next/router";
import useRouterBaseConfigurationData from "../../../hooks/useRouterBaseConfigurationData";
import { useCallback } from "react";

type ConfigurationsEditViewProps = {};

function ConfigurationsEditView(props: ConfigurationsEditViewProps) {
  const router = useRouter();

  const [configuration] = useRouterBaseConfigurationData();

  const generateArray = (str: string) => {
    if (Array.isArray(str)) return str;

    // return str.split(",").map((val) => val.trim())
    return (
      str.split(",").reduce((acc, val) => {
        const trimmedStr: string = val.trim();
        if (trimmedStr) acc.push(trimmedStr as never);
        return acc;
      }, []) ?? null
    );
  };

  const onFinishHandler = useCallback(
    (configOptions: any) => {
      const existingConfiguration = JSON.parse(JSON.stringify(configuration));
      console.log("#1995#: configuration options ", configOptions);

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

      const payload = { ...existingConfiguration, ...configOptions };

      updateConfigurations(payload).then(function (response) {
        if (invokeSearchNow) {
          triggerConfiguration(response?.data?.id).then((response) => {
            router.push("/code/config/view");
          });
        } else {
          router.push("/code/config/view");
        }
      });
    },
    [configuration]
  );

  return (
    <div className={styles.configurationsEditView}>
      <ConfigurationForm
        btnText="Update Configuration"
        title="Edit configuration"
        initialValues={configuration}
        onFinishHandler={onFinishHandler}
      />
    </div>
  );
}

export default ConfigurationsEditView;
