import SectionContainer from "../../common/SectionContainer";
import ReactTabsStyles from "../../common/ReactTabsStyles";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabContainer from "../../common/TabContainer";
import projectsData from "../../../data/projectsData.js";

function Projects() {
  return (
    <SectionContainer>
      <h1>Projects</h1>
      <ReactTabsStyles>
        <Tabs>
          <TabList>
            {projectsData.map(project => (
              <Tab key={project.id}>
                {project.title}
              </Tab>
            ))}
          </TabList>
          {projectsData.map(project => (
            <TabPanel key={project.id}>
              <TabContainer>
                <img src={project.img} alt={project.imgAlt} />
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </TabContainer>
            </TabPanel>
          ))}
        </Tabs>
      </ReactTabsStyles>
    </SectionContainer>
  );
}

export default Projects;
