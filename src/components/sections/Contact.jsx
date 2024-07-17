import { useState } from "react";
import styled from "styled-components";
import SectionContainer from "../common/SectionContainer";
import Theme from "../../styles/Theme";

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              fill="none"
              stroke={svgColor}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
          </a>
        </SvgBox>
        <SvgBox>
          <a
            href="https://github.com/azero-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              fill="none"
              stroke={svgColor}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>
        </SvgBox>
        <SvgBox>
          <a
            href="https://www.linkedin.com/in/franrodriguez1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke={svgColor}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
              <path d="M8 11l0 5" />
              <path d="M8 8l0 .01" />
              <path d="M12 16l0 -5" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </a>
        </SvgBox>
      </ContactContainer>
    </SectionContainer>
  );
}

export default Contact;
