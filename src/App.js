import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import ProjectBinaryCalculator from "./components/project-binary-calculator/projectBinaryCalculator";
import ProjectMemoji from "./components/project-memoji/projectMemoji";
import ProjectDesignSystem from "./components/project-design-system/projectDesignSystem";
import ProjectSportmaster from "./components/project-sportmaster/projectSportmaster";
import NoMatchPage from "./components/no-match-page/NoMatchPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/memoji" element={<ProjectMemoji />} />
        <Route exact path="/binary-calculator" element={<ProjectBinaryCalculator />} />
        <Route exact path="/design-system" element={<ProjectDesignSystem />} />
        <Route exact path="/sportmaster" element={<ProjectSportmaster />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </div>
  );
}

export default App;
