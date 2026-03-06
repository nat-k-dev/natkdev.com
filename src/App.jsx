
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./components/home/home.jsx";
const ProjectMemoji = lazy(() => import("./components/project-memoji/projectMemoji.jsx"));
const ProjectBinaryCalculator = lazy(() => import("./components/project-binary-calculator/projectBinaryCalculator.jsx"));
const ProjectDesignSystem = lazy(() => import("./components/project-design-system/projectDesignSystem.jsx"));
const NoMatchPage = lazy(() => import("./components/no-match-page/NoMatchPage.jsx"));
const ProjectStarsAnimation = lazy(() => import("./components/project-stars-animation/projectStarsAnimation.jsx"));
const Project3dComputer = lazy(() => import("./components/project-3d-computer/project3dComputer.jsx"));
const ProjectTicTakToe = lazy(() => import("./components/project-tic-tak-toe/projectTicTakToe.jsx"));

function App() {
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
