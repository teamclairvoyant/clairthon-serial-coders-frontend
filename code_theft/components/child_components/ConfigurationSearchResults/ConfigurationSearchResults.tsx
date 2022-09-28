import styles from "./ConfigurationSearchResults.module.css";
import { Typography, Card, Avatar, Tabs } from "antd";
import CodeEditor from "../CodeEditor/CodeEditor";
import { useMemo } from "react";

const { Title, Text } = Typography;

type ConfigurationSearchResultsProps = {};

function ConfigurationSearchResults(props: ConfigurationSearchResultsProps) {
  const Profile = () => (
    <span className="flex justify-center items-center gap-x-3 w-min">
      <Avatar src="https://joeschmoe.io/api/v1/random" />
      <Text>Shubham kumar panday</Text>
    </span>
  );

  const items = useMemo(() => {
    return [
      {
        label: "Contents",
        key: "1",
        children: (
          <>
            <Card title={<Profile />}>
              <div className={styles.filePath}></div>

              <CodeEditor code={exampleCode} />
            </Card>
          </>
        ),
      },
      {
        label: "Users",
        key: "2",
        children: <></>,
      },
      {
        label: "Files",
        key: "3",
        children: <></>,
      },
      {
        label: "Repositories",
        key: "4",
        children: <></>,
      },
    ];
  }, []);

  return (
    <div className={styles.configurationSearchResultsContainer}>
      <Title level={5}>Configuration Results</Title>

      <Tabs type="card" items={items} />
    </div>
  );
}

export default ConfigurationSearchResults;

var exampleCode = `<?php\n\nnamespace App\\Http\\Controllers;\n\nuse Illuminate\\Http\\Request;\nuse App\\Charts\\TestChart;\nuse App\\employee;\nuse Charts;\nuse App\\appointment;\n\nclass ChartController extends Controller\n{\n  public function __construct()\n  {\n      $this->middleware('updation')->only('delete','update', 'store');\n  }\n\npublic function index(){\n\n      return view('hr.reports.charts');\n    }\n\n    public function age(){\n\n      $countAboveSixty= employee::where('date_of_birth','<',\\Carbon\\Carbon::now()->subYears(60))->where('employee_status_id',1)->count();\n      $countBelowSixty = employee::where('employee_status_id',1)\n                        ->count()-$countAboveSixty;\n      return view('hr.reports.charts.ageChart', compact('countAboveSixty','countBelowSixty'));\n\n    }\n\n    public function category(){\n\n      $categoryA = appointment::where('category','A')->count();\n      $categoryB = appointment::where('category','B')->count();\n      $categoryC = appointment::where('category','C')->count();\n      \n      return view('hr.reports.charts.categoryChart', compact('categoryA','categoryB','categoryC'));\n\n    }\n\n\n  public function division(){\n\n   \t$power = employee::all()->where('division_id',1)->count();\n   \t$water = employee::all()->where('division_id',2)->count();\n   \t$finance = employee::all()->where('division_id',3)->count();\n\n    $chart = new TestChart;\n    $chart->labels(['Power', 'Water', 'Finance']);\n    $chart->dataset('My dataset', 'pie', [$power, $water, $finance])\n    ->backgroundColor(['rgba(255, 99, 132, 0.4)','rgba(255, 205, 86, 0.4)','rgba(75, 192, 192, 0.4)']);\n     \n     \n     /*$chart = Charts::create('pie', 'highcharts')\n      ->title('HDTuto.com Laravel Pie Chart')\n      ->labels(['Codeigniter', 'Laravel', 'PHP'])\n      ->values([5,10,20])\n      ->dimensions(1000,500)\n      ->responsive(true);*/\n\n    //->title("Department");\n     return view('hr.reports.charts.divisionChart', compact('chart'));\n\t}\n\n}\n`;
