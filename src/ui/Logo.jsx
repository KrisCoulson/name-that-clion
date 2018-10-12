import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: white;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-family: "Freckle Face", cursive;
  font-size: 100px;
  text-align: center;
`;

const Logo = () => (
  <Wrapper>
    <span>Name</span>
    <div style={{ fontSize: "75px" }}>that</div>
    <span>Clion</span>
  </Wrapper>
);

export default Logo;
