import React from 'react';
import styled from "styled-components";
import { Heading } from './Text';

const LoadingContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Loading = () => (
  <LoadingContainer>
    <Heading size="18px">Drag the image top the correct name.</Heading>
    <img src="./jesse-drag.gif" style={{ width: '300px' }}/>
  </LoadingContainer>
)
export default Loading;
