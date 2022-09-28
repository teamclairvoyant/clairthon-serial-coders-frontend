import ConfigurationSearchResults from "../../child_components/ConfigurationSearchResults/ConfigurationSearchResults";
import ConfigurationsSearchBanner from "../../child_components/ConfigurationsSearchBanner/ConfigurationsSearchBanner";
import Header from "../../child_components/Header/Header";
import styles from "./ConfigurationResultsView.module.css";

type ConfigurationResultsViewProps = {};

function ConfigurationResultsView(props: ConfigurationResultsViewProps) {
  const {} = props;

  return (
    <div>
      <div className={styles.configurationResultsContainer}>
        <ConfigurationsSearchBanner />

        <ConfigurationSearchResults />
      </div>
    </div>
  );
}

export default ConfigurationResultsView;
