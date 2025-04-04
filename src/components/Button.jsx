import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const buttonStyles = css`
  padding: 1em;
  font-size: 1em;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme.bodyBg};
  background-color: ${(props) => props.theme.primaryColor};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.secondaryColor};
    border-radius: 7px;
  }
`;

const StyledButton = styled.button`${buttonStyles}`;
const StyledLink = styled.a`${buttonStyles}`;

const Button = ({ children, onClick, href }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  if (href) {
    return <StyledLink href={href} onClick={handleClick}>{children}</StyledLink>;
  } else {
    return <StyledButton onClick={handleClick}>{children}</StyledButton>;
  }
};

export default Button;


Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
};
