import styled from "styled-components";
import Theme from "../../styles/Theme"
import SectionContainer from "../common/SectionContainer";
import aboutData from "../../data/aboutData";

// CSS rules
const sharedStyles = (props) => `
  border-radius: 10px;
  padding: 2em;
  transition: all 0.2s;
  transition-timing-function: ease-out;
  
  &:hover {
    transform: scale(1.02);
    background-color: ${props.theme.backgroundDarker};
  }

  @media (${props.theme.breakpoints.mobile}) {
    justify-self: start;
    padding: 1.5em 0;

    &:hover {
      background-color: transparent;
    }
  }
`;

const subtitleStyle = {
  color: Theme.subColor,
}

const headlineStyles = {
  marginTop: ".5em",
  fontWeight: "bold"
}

// Styled components
const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    "intro intro intro"
    "exp edu skills";
  justify-items: center;

  @media (${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "intro"
      "exp"
      "edu"
      "skills";
  }
`;

const AboutIntro = styled.div`
  grid-area: intro;
`;

const AboutExp = styled.div`
  grid-area: exp;
  ${(props) => sharedStyles(props)}
`;

const AboutEdu = styled.div`
  grid-area: edu;
  ${(props) => sharedStyles(props)}
`;

const AboutSkills = styled.div`
  grid-area: skills;
  ${(props) => sharedStyles(props)}
`;

function About() {
  return (
    <SectionContainer>
      <h1 id="about">About me</h1>
      <AboutContainer>
        <AboutIntro>
          <p>{aboutData.intro}</p>
        </AboutIntro>
        <AboutExp>
          <h3>Experience</h3>
          <ul>
            {aboutData.experience.map((exp, index) =>
              index % 2 !== 0 ? (
                <li key={index}>
                  <span style={subtitleStyle}>{exp}</span>
                </li>
              ) : (
                <li key={index} style={headlineStyles}>{exp}</li>
              )
            )}
          </ul>
        </AboutExp>
        <AboutEdu>
          <h3>Education</h3>
          <ul>
            {aboutData.education.map((edu, index) =>
              typeof edu === "string" ? (
                <li key={index} style={headlineStyles}>{edu}</li>
              ) : (
                <>
                  <li key={`${index}_0`} style={subtitleStyle}>{edu[0]}</li>
                  <li key={`${index}_1`} style={subtitleStyle}>{edu[1]}</li>
                </>
              )
            )}
          </ul>
        </AboutEdu>
        <AboutSkills>
          <h3>Skills</h3>
          <ul>
            {aboutData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </AboutSkills>
      </AboutContainer>
    </SectionContainer>
  );
}

export default About;
