
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home.jsx";
import ProjectBinaryCalculator from "./components/project-binary-calculator/projectBinaryCalculator.jsx";
import ProjectMemoji from "./components/project-memoji/projectMemoji.jsx";
import ProjectDesignSystem from "./components/project-design-system/projectDesignSystem.jsx";
import NoMatchPage from "./components/no-match-page/NoMatchPage.jsx";
import ProjectStarsAnimation from "./components/project-stars-animation/projectStarsAnimation.jsx";
import Project3dComputer from "./components/project-3d-computer/project3dComputer.jsx";
import ProjectTicTakToe from "./components/project-tic-tak-toe/projectTicTakToe.jsx";

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
