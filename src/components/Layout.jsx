import PropTypes from 'prop-types';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "menu"
    "body"
    "footer";
  min-height: 100vh;

  @media (${(props) => props.theme.breakpoints.mobile}) {
    grid-template-areas:
      "body"
      "footer"
      "menu";
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
    <Container>
      <Menu>
        <Header />
      </Menu>
      <Body>
        {children}
      </Body>
      <CustomFooter>
        <Footer />
      </CustomFooter>
    </Container>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};