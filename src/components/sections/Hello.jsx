import styled from "styled-components";
import profilePic from "../../assets/prof.png";
import ButtonComponent from "../Button.jsx";

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
    filter: brightness(76%);
    ${'' /* border-radius: 50%; */}
    ${"" /* border: 0.4rem solid ${(props) => props.theme.secondaryColor}; */}
    ${
      "" /* box-shadow: 0px 0px 30px 0px ${(props) => props.theme.primaryColor}; */
    }
  }
`;

// const ResumeButton = styled.a`
//   display: inline-block;
//   padding: 0.5rem 1rem;
//   color: white;
//   background-color: ${(props) => props.theme.tertiaryColor};
//   border-radius: 0.25rem;
//   text-decoration: none;
//   transition: background-color 0.2s;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

const handleClick = () => {
}

function Hello() {
  return (
    <MainContainer>
      <Intro>
        <h1>Fran Rodriguez</h1>
        <h2>Web Developer</h2>
        <p>
          Welcome to my portfolio. I&apos;m a web developer specialized in
          frontend and backend development for complex scalable web apps.
        </p>
        <ButtonComponent onClick={handleClick}>
          Download My Resume
        </ButtonComponent>
      </Intro>
      <ProfilePicture>
        <img src={profilePic} alt="Fran Rodriguez" />
      </ProfilePicture>
    </MainContainer>
  );
}

export default Hello;