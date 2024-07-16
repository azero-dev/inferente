import styled from "styled-components";
import PropTypes from "prop-types";

const SecCont = styled.div`
  margin: 0 auto 26vh;

  @media (${(props) => props.theme.breakpoints.mobile}) {
    margin: 15vh auto;
  }
`

function SectionContainer({ children }) {
  return (
    <SecCont>
      {children}
    </SecCont>
  )
}

export default SectionContainer;

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
};