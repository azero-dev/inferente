import styled from "styled-components";
import profilePic from "../../assets/prof.webp";
import ButtonComponent from "../Button.jsx";
import cv from "../../assets/CV.pdf";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 90vh;
  column-gap: 10vw;

  @media (${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    margin-bottom: 10vh;
  }
`;

const Intro = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;

  & h1 {
    font-size: 4rem;
    margin-bottom: 0;
  }
  & h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  & p {
    font-size: 1.3rem;
  }
  & a {
    align-self: flex-start;
  }

  @media (${(props) => props.theme.breakpoints.mobile}) {    
    & h1 {
      font-size: 3.3rem;
    }
    & p {
      font-size: 1.3rem;
    }
  }
`;

const ProfilePicture = styled.div`
  flex: 4;

  & img {
    width: 100%;
    filter: brightness(82%);
  }
`;

function Hello() {
  return (
    <MainContainer>
      <Intro>
        <h1>Fran Rodriguez</h1>
        <h2>Web Developer</h2>
        <p>
          Front-end developer with experience in React. Skilled in creating dynamic and engaging web applications. Computer and hardware geek. Based in London.
        </p>
        <ButtonComponent href={cv}>
          Download CV
        </ButtonComponent>
      </Intro>
      <ProfilePicture>
        <img src={profilePic} alt="Fran Rodriguez" />
      </ProfilePicture>
    </MainContainer>
  );
}

export default Hello;