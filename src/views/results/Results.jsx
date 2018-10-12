import React from 'react';
import styled from 'styled-components';
import AvatarCard from '../../ui/AvatarCard';
import { Heading } from '../../ui/Text';
import Button from '../../ui/Button';


const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #002444;
  margin: -10px -10px 0px -10px;
  padding: 20px;
  position: relative;
`
const Score = styled.div`
font-family: "Freckle Face", cursive;
  font-size: 80px;
  color: white;
  margin: 10px 0px;
`

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const MissesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px 10px;
`

const Misses = styled.div`
  flex: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`

const ScoreBoard = ({ misses, attempts, restartGame }) => (
  <ScoreContainer>
    <Heading>Time's up! Here's you score:</Heading>
    <Score>{`${attempts - misses.length} / ${attempts}`}</Score>
    <Button style={{
      position: 'absolute',
      width: '225px',
      fontSize: '25px',
      bottom: '-21px'
    }}
    onClick={restartGame}>Play Again</Button>
  </ScoreContainer>
)

export default function (props) {
  return (
    <ResultsContainer>
      <ScoreBoard {...props} />
      <MissesContainer>
        <Heading size="18px" style={{ margin: '10px 0px'}}>Who you missed</Heading>
        <Misses>
          {props.misses.map(miss => (
            <AvatarCard key={miss.id} person={miss}/>
          ))}
        </Misses>
      </MissesContainer>
    </ResultsContainer>
  )
}
