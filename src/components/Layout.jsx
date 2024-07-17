import PropTypes from 'prop-types';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 20vw 1fr 20vw;
  grid-template-rows: 10vh 1fr 10vh;
  grid-template-areas:
    "menu menu menu"
    ". body ."
    ". footer .";

  @media (${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 15vw 70vw 15vw;
    grid-template-rows: 10vh 1fr 20vh 0px;
    grid-template-areas:
      ". . ."
      ". body ."
      ". footer ."
      "menu menu menu";
  }
`;

const Menu = styled.div`
  grid-area: menu;
`;

const Body = styled.main`
  grid-area: body;
`;

const CustomFooter = styled.div`
  grid-area: footer;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Menu>
          <Header />
        </Menu>
        <Body>{children}</Body>
        <CustomFooter>
          <Footer />
        </CustomFooter>
      </Container>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};