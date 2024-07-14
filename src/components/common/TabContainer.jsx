import styled from "styled-components";
import PropTypes from "prop-types";

const TabCont = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
                      "img title"
                      "img text";
  column-gap: 2em;

  img {
    grid-area: img;
    max-width: 100%;
  }

  h2 {
    grid-area: title;
    margin-top: 1em;
  }

  p {
    grid-area: text;
  }

  @media (${(props) => props.theme.breakpoints.mobile}) {
  }
`

function TabContainer({ children }) {
  return (
    <TabCont>
      {children}
    </TabCont>
  )
}

export default TabContainer;

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};