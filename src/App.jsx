import Hello from "./components/sections/Hello";
import Projects from "./components/sections/Projects";
import projectsData from "./data/projectsData";
import oldprojectsData from "./data/oldprojectsData";

function App() {
  return (
    <>
      <Hello />
      <Projects projectsData={projectsData} sectionType="New" />
      <Projects projectsData={oldprojectsData} sectionType="Old" />
    </>
  );
}

export default App;
