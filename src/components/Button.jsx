import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  padding: 0.6em 1em;
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

const Button = ({ children, onClick, href }) => {
  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (href) window.location.href = href;
  };

  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

export default Button;


Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
};
