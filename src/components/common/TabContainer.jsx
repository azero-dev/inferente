import styled from "styled-components";
import PropTypes from "prop-types";

const TabCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 100% 1fr;
  grid-template-areas:
    "img title"
    "img text"
    "img button";
  column-gap: 2em;

  img {
    grid-area: img;
    max-width: 100%;
    min-height: 60vh;
    margin-top: 1em;
  }
  h2 {
    grid-area: title;
    margin-top: 1em;
  }
  p {
    grid-area: text;
  }

  .buttons {
    grid-area: button;
    a {
      margin: 0 1em 0 0;
    }
  }

  @media (${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    grid-template-rows: 22vh auto auto;
    grid-template-areas:
      "img"
      "title"
      "text"
      "button";

    img {
      min-height: 19vh;
      max-height: 20vh;
      margin: 1em auto;
    }

    .buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      a {
        margin: 0;
      }
    }
  }
`;

function TabContainer({ children }) {
  return <TabCont>{children}</TabCont>;
}

export default TabContainer;

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
