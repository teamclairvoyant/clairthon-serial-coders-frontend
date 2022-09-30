// @ts-nocheck
import styles from "./ConfigurationSearchResults.module.css";
import { Typography, Card, Avatar, Tabs, Empty, Result } from "antd";
import CodeEditor from "../CodeEditor/CodeEditor";
import { useEffect, useMemo, useState } from "react";
import { fetchSearchResults } from "../../../services/api/config/config.service";
import { useRouter } from "next/router";
import ResultsCard from "../Results/ResultsCard/ResultsCard";
import ResultsUserCard from "../Results/ResultsUserCard/ResultsUserCard";

const { Title, Text } = Typography;

type ConfigurationSearchResultsProps = {};

function ConfigurationSearchResults(props: ConfigurationSearchResultsProps) {
  const router = useRouter();
  const { query } = router;
  const [configId] = useState(query?.config_id);
  const [results, setResults] = useState(null);

  useEffect(() => {
    if (configId) {
      fetchSearchResults({ configId }).then((response) => {
        setResults(response);
      });
    }
  }, [query?.config_id]);

  const getUserSearchResults = useMemo(
    () => results?.userSearchResults?.[0]?.users ?? [],
    [results]
  );

  const getContentSearchResults = useMemo(
    () => results?.contentSearchResults?.[0]?.content ?? [],
    [results]
  );

  const getFileSearchResults = useMemo(
    () => results?.fileSearchResults?.[0]?.files ?? [],
    [results]
  );

  const UserProfile = (props: any) => {
    const { avatar = "https://joeschmoe.io/api/v1/random", username = "" } =
      props;
    return (
      <Card.Meta
        avatar={<Avatar src={avatar} />}
        title={username}
        description="This is the description"
      />
    );
  };

  const NoDataFound = () => (
    <div className="h-60 flex justify-center items-center">
      <Empty />
    </div>
  );

  const items = useMemo(() => {
    return [
      {
        label: "Contents",
        key: "1",
        children: (
          <div>
            {getContentSearchResults?.length > 0 &&
              getContentSearchResults?.map((result, id) => {
                return (
                  <ResultsCard
                    key={`${new Date().getTime()}-${id}`}
                    cardData={result}
                  ></ResultsCard>
                );
              })}

            {getContentSearchResults?.length === 0 && <NoDataFound />}
          </div>
        ),
      },
      {
        label: "Users",
        key: "2",
        children: (
          <div>
            {getUserSearchResults?.length > 0 &&
              getUserSearchResults?.map((result, id) => {
                return (
                  <ResultsUserCard
                    key={`${new Date().getTime()}-${id}`}
                    result={result}
                  />
                );
              })}

            {getUserSearchResults?.length === 0 && <NoDataFound />}
          </div>
        ),
      },
      {
        label: "Files",
        key: "3",
        children: (
          <div>
            {getFileSearchResults?.length > 0 &&
              getFileSearchResults?.map((result, id) => {
                return (
                  <ResultsCard
                    key={`${new Date().getTime()}-${id}`}
                    cardData={result}
                  ></ResultsCard>
                );
              })}

            {getFileSearchResults?.length === 0 && <NoDataFound />}
          </div>
        ),
      },
      // {
      //   label: "Repositories",
      //   key: "4",
      //   children: <NoDataFound />,
      // },
    ];
  }, [results]);

  return (
    <div className={styles.configurationSearchResultsContainer}>
      {/* <Title level={5}>Configuration Reports</Title> */}

      <Tabs type="card" items={items} className="custom-ant-tab" />
    </div>
  );
}

export default ConfigurationSearchResults;

var exampleCode = `<?php\n\nnamespace App\\Http\\Controllers;\n\nuse Illuminate\\Http\\Request;\nuse App\\Charts\\TestChart;\nuse App\\employee;\nuse Charts;\nuse App\\appointment;\n\nclass ChartController extends Controller\n{\n  public function __construct()\n  {\n      $this->middleware('updation')->only('delete','update', 'store');\n  }\n\npublic function index(){\n\n      return view('hr.reports.charts');\n    }\n\n    public function age(){\n\n      $countAboveSixty= employee::where('date_of_birth','<',\\Carbon\\Carbon::now()->subYears(60))->where('employee_status_id',1)->count();\n      $countBelowSixty = employee::where('employee_status_id',1)\n                        ->count()-$countAboveSixty;\n      return view('hr.reports.charts.ageChart', compact('countAboveSixty','countBelowSixty'));\n\n    }\n\n    public function category(){\n\n      $categoryA = appointment::where('category','A')->count();\n      $categoryB = appointment::where('category','B')->count();\n      $categoryC = appointment::where('category','C')->count();\n      \n      return view('hr.reports.charts.categoryChart', compact('categoryA','categoryB','categoryC'));\n\n    }\n\n\n  public function division(){\n\n   \t$power = employee::all()->where('division_id',1)->count();\n   \t$water = employee::all()->where('division_id',2)->count();\n   \t$finance = employee::all()->where('division_id',3)->count();\n\n    $chart = new TestChart;\n    $chart->labels(['Power', 'Water', 'Finance']);\n    $chart->dataset('My dataset', 'pie', [$power, $water, $finance])\n    ->backgroundColor(['rgba(255, 99, 132, 0.4)','rgba(255, 205, 86, 0.4)','rgba(75, 192, 192, 0.4)']);\n     \n     \n     /*$chart = Charts::create('pie', 'highcharts')\n      ->title('HDTuto.com Laravel Pie Chart')\n      ->labels(['Codeigniter', 'Laravel', 'PHP'])\n      ->values([5,10,20])\n      ->dimensions(1000,500)\n      ->responsive(true);*/\n\n    //->title("Department");\n     return view('hr.reports.charts.divisionChart', compact('chart'));\n\t}\n\n}\n`;
