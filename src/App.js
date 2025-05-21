
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import ProjectBinaryCalculator from "./components/project-binary-calculator/projectBinaryCalculator";
import ProjectMemoji from "./components/project-memoji/projectMemoji";
import ProjectDesignSystem from "./components/project-design-system/projectDesignSystem";
import NoMatchPage from "./components/no-match-page/NoMatchPage";
import ProjectStarsAnimation from "./components/project-stars-animation/projectStarsAnimation";
import Project3dComputer from "./components/project-3d-computer/project3dComputer";

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
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </div>
  );
}

export default App;
