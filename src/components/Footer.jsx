import styled from 'styled-components';
import Theme from '../styles/Theme';

const footerColor = Theme.bodyBg;

const FooterContainer = styled.footer`
  min-height: 30vh;
  background: linear-gradient(to bottom, ${footerColor}, #000000);
`;

const Footer = () => {
  return (
    <FooterContainer />
  );
};

export default Footer;
