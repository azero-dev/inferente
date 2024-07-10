import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
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
`;

const ButtonComponent = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default ButtonComponent;


ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
