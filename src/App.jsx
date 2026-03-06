
import { Routes, Route } from "react-router-dom";
import { lazy, useEffect } from "react";
import Home from "./components/home/home.jsx";
const ProjectMemoji = lazy(() => import("./components/project-memoji/projectMemoji.jsx"));
const ProjectBinaryCalculator = lazy(() => import("./components/project-binary-calculator/projectBinaryCalculator.jsx"));
const ProjectDesignSystem = lazy(() => import("./components/project-design-system/projectDesignSystem.jsx"));
const NoMatchPage = lazy(() => import("./components/no-match-page/NoMatchPage.jsx"));
const ProjectStarsAnimation = lazy(() => import("./components/project-stars-animation/projectStarsAnimation.jsx"));
const Project3dComputer = lazy(() => import("./components/project-3d-computer/project3dComputer.jsx"));
const ProjectTicTakToe = lazy(() => import("./components/project-tic-tak-toe/projectTicTakToe.jsx"));

function App() {
  useEffect(() => {
    const loadAnalytics = () => {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-LY3MM22D2V";
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }

      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", "G-LY3MM22D2V");
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(loadAnalytics);
    } else {
      setTimeout(loadAnalytics, 2000);
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/memoji" element={<ProjectMemoji />} />
        <Route exact path="/binary-calculator" element={<ProjectBinaryCalculator />} />
        <Route exact path="/design-system" element={<ProjectDesignSystem />} />
        <Route exact path="/stars-animation" element={<ProjectStarsAnimation />} />
        <Route exact path="/3d-computer" element={<Project3dComputer />} />
        <Route exact path="/tic-tak-toe" element={<ProjectTicTakToe />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </div>
  );
}

export default App;
