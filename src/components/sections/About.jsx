import styled from "styled-components";
import SectionContainer from "../common/SectionContainer";
import aboutData from "../../data/aboutData";

const hoverEffect = (props) => `
  border-radius: 10px;
  padding: 2em;
  transition: all 0.2s;
  transition-timing-function: ease-out;
  
  &:hover {
    transform: scale(1.02);
    background-color: #0a0e1d;
  }

  @media (${props.theme.breakpoints.mobile}) {
    justify-self: start;
    padding: 1em 0;
  }
`;

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
`

const AboutIntro = styled.div`
  grid-area: intro;
`

const AboutExp = styled.div`
  grid-area: exp;
  ${(props) => hoverEffect(props)}
`

const AboutEdu = styled.div`
  grid-area: edu;
  ${(props) => hoverEffect(props)}
`

const AboutSkills = styled.div`
  grid-area: skills;
  ${(props) => hoverEffect(props)}
`



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
            {aboutData.experience.map((exp, index) => (
              <li key={index}>{exp}</li>
            ))}
          </ul>
        </AboutExp>
        <AboutEdu>
          <h3>Education</h3>
          <ul>
            {aboutData.education.map((edu, index) => (
              <li key={index}>{edu}</li>
            ))}
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