import { useState, useEffect } from "react";
import styled from "styled-components";
import menuLogo from "../assets/menu.png";

//Desktop menu
const DesktopHeaderContainer = styled.header`
  display: flex;
  justify-content: right;
  height: 10vh;
  font-weight: bold;
  background-color: ${(props) => props.theme.bodyBg};

  & nav {
    display: flex;
    align-items: center;
    gap: 1.4rem;
    padding-right: 3rem;
    font-size: 1.2rem;
  }
`;

//Mobile menu
const MobileHeaderContainer = styled.header`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 14vw;
  height: 14vw;
  margin: 2vw;
  font-weight: bold;
  z-index: 1000;

  @keyframes expansion {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.06);
    }
  }

  & img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    animation: expansion 2s infinite ease-in-out;
  }

  & button {
    background: #ffffff00;
    border: none;
  }

  & nav {
    display: ${(props) => (props.isMenuOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-end;
    gap: 2rem;
    position: fixed;
    bottom: 16vw;
    right: 16vw;
    width: 60vw;
    height: auto;
    background: #ffffff00;
    font-size: 4rem;
  }
`;

//Dark background for mobile menu
const DarkBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.86);
  display: ${(props) => (props.isMenuOpen ? "block" : "none")};
  z-index: 999;
`;

//Custom Hook to check window size
const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
};

const Header = () => {
  const [width] = useWindowSize();
  const isMobile = width < 768;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return isMobile ? (
    <>
      <DarkBackground isMenuOpen={isMenuOpen} onClick={handleClick} />
      <MobileHeaderContainer isMenuOpen={isMenuOpen}>
        <button onClick={handleClick}>
          <img src={menuLogo} alt="logo" />
        </button>
        <nav>
          <a href="#projects" onClick={handleClick}>Projects</a>
          <a href="#about" onClick={handleClick}>About</a>
          <a href="#contact" onClick={handleClick}>Contact</a>
          <a href="https://blog.inferente.com/" onClick={handleClick}>Blog</a>
        </nav>
      </MobileHeaderContainer>
    </>
  ) : (
    <DesktopHeaderContainer>
      <nav>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="https://blog.inferente.com/">Blog</a>
      </nav>
    </DesktopHeaderContainer>
  );
};

export default Header;
