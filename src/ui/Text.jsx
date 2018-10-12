import styled from 'styled-components';

const Text = styled.div`
  font-family: "Nunito", sans-serif;
  color: ${props => props.color === 'dark' ? '#002444' : 'white' };
`;

const Heading = styled(Text)`
  font-size: ${ props => props.size || '24px' };
  font-weight: 900;
`;

const Subtext = styled(Text)`
  font-size: 18px;
  font-weight: 600;
`;

export { Heading, Subtext, Text };
