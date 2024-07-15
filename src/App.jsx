import Hello from "./components/sections/Hello";
import Projects from "./components/sections/Projects";
import projectsData from "./data/projectsData";
import oldprojectsData from "./data/oldprojectsData";
import About from "./components/sections/About";

function App() {
  return (
    <>
      <Hello />
      <Projects projectsData={projectsData} sectionType="New" />
      <Projects projectsData={oldprojectsData} sectionType="Old" />
      <About />
    </>
  );
}

export default App;
