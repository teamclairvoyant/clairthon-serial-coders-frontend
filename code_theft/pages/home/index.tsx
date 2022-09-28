import PrimaryLayout from "../../components/layout/PrimaryLayout/PrimaryLayout";
import LandingPageView from "../../components/views/LandingPageView/LandingPageView";

type HomeProps = {};

function Home(props: HomeProps) {
  return (
    <PrimaryLayout>
      <LandingPageView />
    </PrimaryLayout>
  );
}

export default Home;
