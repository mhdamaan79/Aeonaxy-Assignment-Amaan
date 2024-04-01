import DemoComponent from "./DemoComponent";
import Header from "./components/Header";
import Medium from "./components/Medium";
import Network from "./components/Network";
import WriteOnMedium from "./components/WriteOnMedium";
import Membership from "./components/Membership";
import DownloadApp from "./components/DownloadApp";
import LearnMore from "./components/LearnMore";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* <DemoComponent /> */}
      <Header />
      <Medium />
      <Network />
      <WriteOnMedium />
      <Membership />
      <DownloadApp />
      <LearnMore />
      <Footer />
    </div>
  );
}

export default App;
