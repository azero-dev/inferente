import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.bodyBg};
  padding: 10px;
  text-align: center;
  margin-top: auto;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <a>Github</a>
    </FooterContainer>
  );
};

export default Footer;
