import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: 10vh;
  display: flex;
  justify-content: right;
  font-weight: bold;
  background-color: ${(props) => props.theme.bodyBg};

  & nav {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-right: 3rem;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
