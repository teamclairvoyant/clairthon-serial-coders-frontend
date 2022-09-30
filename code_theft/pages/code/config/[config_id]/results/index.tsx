import PrimaryLayout from "../../../../../components/layout/PrimaryLayout/PrimaryLayout";
import ConfigurationResultsView from "../../../../../components/views/ConfigurationResultsView/ConfigurationResultsView";

type ResultsProps = {};

function Results(props: ResultsProps) {
  return (
    <PrimaryLayout>
      <ConfigurationResultsView />
    </PrimaryLayout>
  );
}

export default Results;
