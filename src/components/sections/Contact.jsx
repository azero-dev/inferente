import { useState } from "react";
import styled from "styled-components";
import SectionContainer from "../common/SectionContainer";
import Theme from "../../styles/Theme";
import SvgProvider from "../../assets/svg/SvgProvider"

const svgColor = Theme.textColor;

const SvgBox = styled.div`
  width: 5%;
  transition: all 0.2s;

  &:hover {
    transform: rotate(360deg);
  }

  @media (${Theme.breakpoints.mobile}) {
    width: 15vw;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8em;
  margin-bottom: 2em;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1em;

    input,
    textarea {
      padding: 1em 2em;
      border-radius: 6px;
      border: 2px solid ${Theme.textColor};
      background-color: ${Theme.bodyBg};
      font-size: 1.125em;

      &:focus {
        outline: none;
      }
    }

    textarea {
      width: 100%;
      max-width: 60vw;
      max-height: 30vh;
    }

    label {
      p {
        margin: 0.6em 0 0;
        color: ${Theme.primaryColor};
      }
    }
  }

  @media (${Theme.breakpoints.mobile}) {
    gap: 0;
    justify-content: space-between;
    form {
      input,
      textarea {
        padding: 0.5em 1em;
        width: 70vw;
        max-width: 70vw;
      }
    
      textarea {
        height: 40vh;
      }
    }
  }
`;

function Contact() {
  const [subject, setSubject] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [errors, setErrors] = useState({ subject: "", bodyText: "" });
  let refLink = `mailto:fr.rodmar@gmail.com?subject=${subject}&body=${bodyText}`;

  const validateSubject = (value) => {
    if (value.length > 150)
      return "The subject can't be longer than 150 characters.";
    return "";
  };

  const validateBodyText = (value) => {
    if (value.length > 1900)
      return "The message can't be longer than 1900 characters.";
    return "";
  };

  const controlMaxText = (message, max, field) => {
    if (message.length > max) return;
    field(message);
  };

  return (
    <SectionContainer>
      <h1 id="contact">Contact</h1>
      <p>
        You can contact me through GitHub or LinkedIn. You can also contact me
        by email, just type your message in the form and click on the email icon
        to send it.
      </p>
      <ContactContainer>
        <form>
          <label id="subject">
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              value={subject}
              onChange={(e) => {
                controlMaxText(e.target.value, 150, setSubject);
                setErrors({
                  ...errors,
                  subject: validateSubject(e.target.value),
                });
              }}
            />
            {errors.subject && <p>{errors.subject}</p>}
          </label>
          <label id="body">
            <textarea
              id="body"
              placeholder="Type your message..."
              value={bodyText}
              onChange={(e) => {
                controlMaxText(e.target.value, 1900, setBodyText);
                setErrors({
                  ...errors,
                  bodyText: validateBodyText(e.target.value),
                });
              }}
            />
            {errors.bodyText && <p>{errors.bodyText}</p>}
          </label>
        </form>
      </ContactContainer>
      <ContactContainer>
        <SvgBox>
          <a href={refLink}>
              <SvgProvider name="email" color={svgColor} />
          </a>
        </SvgBox>
        <SvgBox>
          <a
            href="https://github.com/azero-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgProvider name="github" color={svgColor} />
          </a>
        </SvgBox>
        <SvgBox>
          <a
            href="https://www.linkedin.com/in/franrodriguez1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgProvider name="linkedin" color={svgColor} />
          </a>
        </SvgBox>
      </ContactContainer>
    </SectionContainer>
  );
}

export default Contact;
