import Sec5 from "./components/Sec5";
import "./App.css";
import Header from "./components/Header";
import Sec2 from "./components/Sec2";
import Sec3 from "./components/Sec3";
import Roadmap from "./components/Roadmap";
import Partners from "./components/Partners";
import Team from "./components/Team";
import Kongs from "./components/Kongs";
import Faqaccordian from "./components/Faqaccordian";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import BackToTop from "./components/BackToTop";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 4000);
  }, []);
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <Preloader />
        </div>
      ) : (
        <div>
          <div className="bg-[#0A0A0A] overflow-hidden">
            <div className="bg-[url(./assets/images/header-bg.png)] bg-center bg-cover bg-no-repeat">
              <Header />
            </div>
            <Sec2 />
            <Sec3 />
            <Kongs />
            <div className="bg-[url(./assets/images/sec4-bg.png)] bg-center bg-cover bg-no-repeat">
              <Sec5 />
            </div>
            <Roadmap />
            <Partners />
            <Team />
            <div className="bg-[url(./assets/images/footer-img.png)] bg-center bg-cover bg-no-repeat">
              <Faqaccordian />
            </div>
            <BackToTop />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
