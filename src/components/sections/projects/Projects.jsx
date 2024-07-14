import styled from "styled-components";
import SectionContainer from "../../common/SectionContainer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabContainer from "../../common/TabContainer";
import phone from "../../../assets/phone.png";

const ReactTabsStyles = styled.div`
  .react-tabs {
    -webkit-tap-highlight-color: transparent;
  }

  .react-tabs__tab-list {
    border-bottom: 2px solid ${(props) => props.theme.secondaryColor};
    margin: 0 0 1em;
  }

  .react-tabs__tab {
    display: inline-block;
    position: relative;
    padding: 0.6em 1em;
    font-size: 1em;
    font-weight: bold;
    color: ${(props) => props.theme.bodyBg};
    background-color: ${(props) => props.theme.secondaryColor};
    bottom: -2px;
    list-style: none;
    cursor: pointer;
    transition: 0.2s;
  }

  .react-tabs__tab--selected {
    color: ${(props) => props.theme.bodyBg};
    background-color: ${(props) => props.theme.primaryColor};
  }

  .react-tabs__tab:hover {
    background-color: ${(props) => props.theme.primaryColor};
  }

  .react-tabs__tab:focus {
    outline: none;
  }

  .react-tabs__tab:focus:after {
    content: "";
    position: absolute;
    height: 4px;
    left: 0;
    right: 0;
    bottom: -4px;
    background: ${(props) => props.theme.tertiaryColor};
  }

  .react-tabs__tab-panel {
    display: none;
  }

  .react-tabs__tab-panel--selected {
    display: block;
  }

  @media (${(props) => props.theme.breakpoints.mobile}) {
    .react-tabs__tab-list {
      border-bottom: 0;
    }
    
    .react-tabs__tab {
      margin: 1px 0;
      border-radius: 0 6px 6px 0;
    }

    .react-tabs__tab:focus:after {
      height: 0;
      bottom: 0;
    }
  }
`;

const handleClick = () => {};

function Projects() {
  return (
    <SectionContainer>
      <h1>Projects</h1>
      <ReactTabsStyles>
        <Tabs>
          <TabList>
            <Tab>Title de prueba largo</Tab>
            <Tab>Otro titulo de prueba largo</Tab>
            <Tab>Title de prueba largo</Tab>
            <Tab>Otro titulo de prueba largo</Tab>
          </TabList>

          <TabPanel>
            <TabContainer>
              <img src={phone} alt="phone" />
              <h2>Any title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                consequat nulla ac lectus tristique, vel mattis risus tempor.
                Etiam rutrum purus ac blandit iaculis. Donec sit amet arcu ac
                turpis facilisis sagittis. Integer vehicula nibh vel libero
                cursus, in lobortis nunc varius. Integer congue arcu libero, et
                aliquet arcu semper et. Morbi cursus ex eu libero facilisis
                rhoncus. Suspendisse potenti.
              </p>
            </TabContainer>
          </TabPanel>
          <TabPanel>
            <TabContainer>
              <img src={phone} alt="phone" />
              <h2>Any title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                consequat nulla ac lectus tristique, vel mattis risus tempor.
                Etiam rutrum purus ac blandit iaculis. Donec sit amet arcu ac
                turpis facilisis sagittis. Integer vehicula nibh vel libero
                cursus, in lobortis nunc varius. Integer congue arcu libero, et
                aliquet arcu semper et. Morbi cursus ex eu libero facilisis
                rhoncus. Suspendisse potenti.
              </p>
            </TabContainer>
          </TabPanel>
        </Tabs>
      </ReactTabsStyles>
    </SectionContainer>
  );
}

export default Projects;
