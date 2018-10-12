import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import { Heading, Subtext } from './Text';

 const Container = styled.div`
  display: flex;
  background: white;
  box-shadow: 0 4px 0 #9d38ad;
  margin: 20px 0px;
  padding: 10px;
  border-radius: 6px;
 `
const AvatarCard = ({ person }) => (
  <Container>
    <Avatar size="80px" style={{ marginRight: '20px'}}/>
    <div>
      <Heading color="dark">{person.name}</Heading>
      <Subtext color="dark">{person.job_title}</Subtext>
      <Subtext color="dark">{person.location}</Subtext>
    </div>
  </Container>
)

export default AvatarCard;
