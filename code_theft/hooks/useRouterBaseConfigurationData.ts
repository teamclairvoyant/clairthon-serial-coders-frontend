import useLocalStorage from "@rehooks/local-storage";
import { useRouter } from "next/router";
import { useMemo } from "react";

function useRouterBaseConfigurationData() {
  const router = useRouter();
  const { query } = router;
  const [configurationData] = useLocalStorage("configuration");

  const getConfigurationData = useMemo(
    () =>
      configurationData?.length &&
      // @ts-ignore
      configurationData?.filter?.((value) => {
        return String(value?.id) === String(query?.config_id);
      }),
    [configurationData, query]
  );

  return [getConfigurationData?.length ? getConfigurationData[0] : null];
}

export default useRouterBaseConfigurationData;
