// import React from 'react';
import styled from 'styled-components';

const Avatar = styled.div`
  width: ${ props => props.size || '130px' };
  height: ${ props => props.size || '130px' };
  background: red;
  border: ${ props => props.border || 'none' };
  background: url(${ props => props.image || './random_old_lady.jpg'});
  background-size: cover;
  border-radius: 50%;
`

export default Avatar;
