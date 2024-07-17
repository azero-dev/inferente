import Hello from "./components/sections/Hello";
import Projects from "./components/sections/Projects";
import projectsData from "./data/projectsData";
import oldprojectsData from "./data/oldprojectsData";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <Hello />
      <Projects projectsData={projectsData} sectionType="New" />
      <Projects projectsData={oldprojectsData} sectionType="Old" />
      <About />
      <Contact />
    </>
  );
}

export default App;
