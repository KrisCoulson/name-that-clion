import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";

const Possibility = styled.div`
  border-radius: 6px;
  color: white;
  border: 3px solid white;
  padding: 10px;
  margin: 10px;
  text-align: center;
`;

const Text = styled.div`
  font-family: "Nunito", sans-serif;
  color: white;
`

const Heading = styled(Text)`
  font-size: 24px;
  font-weight: 900;
`;

const Subtext = styled(Text)`
  font-size: 18px;
  font-weight: 600;
`



const possibilities = [
  {
    name: "Kris Coulson",
    position: "Frontend Developer",
    location: "Los Angeles"
  },
  {
    name: "Lukas Stuart-Fry",
    position: "Frontend Developer",
    location: "Los Angeles"
  },
  {
    name: "Jeff Consing",
    position: "Designer",
    location: "Los Angeles"
  }
];

const GameCard = () => (
  <>
    <Avatar border="8px solid white"/>
    {possibilities.map(possibility => (
      <Possibility>
        <Heading>{possibility.name}</Heading>
        <Subtext>{possibility.position}</Subtext>
        <Subtext>{possibility.location}</Subtext>
      </Possibility>
    ))}
  </>
);

export default GameCard;
