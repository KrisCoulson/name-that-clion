import styled from 'styled-components';

const Button = styled.button`
  background: #36c2ff;
  color: white;
  font-family: "Nunito", sans-serif;
  font-weight: 900;
  font-style: normal;
  padding: 6px 10px;
  border-radius: 40px;
  box-shadow: 0 4px 0 #1a769e;
  width: ${props => props.width || '100%'};
  font-size: 40px;
  border: none;
`

export default Button;
