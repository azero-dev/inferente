import styled from "styled-components";
import PropTypes from "prop-types";

const TabsStyles = styled.div`
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
      margin: 1px;
    }

    .react-tabs__tab:focus:after {
      height: 0;
      bottom: 0;
    }
  }
`;

function ReactTabsStyles({ children }) {
  return (
    <TabsStyles>
      {children}
    </TabsStyles>
  )
}

export default ReactTabsStyles;

ReactTabsStyles.propTypes = {
  children: PropTypes.node.isRequired,
};