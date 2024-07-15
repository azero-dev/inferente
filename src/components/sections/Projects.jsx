import PropTypes from 'prop-types';
import SectionContainer from "../common/SectionContainer";
import ReactTabsStyles from "../common/ReactTabsStyles";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabContainer from "../common/TabContainer";

function Projects({ projectsData, sectionType }) {
  return (
    <SectionContainer>
      {sectionType === 'New' ? <h1>Projects</h1> : <h1>Old Projects</h1>}
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

Projects.propTypes = {
  projectsData: [],
  sectionType: PropTypes.string.isRequired,
}