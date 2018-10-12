import React from 'react';
import styled from 'styled-components';
import Timer from '../../ui/Timer';
import GameCard from '../../ui/GameCard';

const GameContainer = styled.div`
  postion: relative;
`
const TimerPosition = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
`


class Game extends React.Component {
  state = {
    gameOver: false,
    missedNames: [],
  }

  gameOver = () => {
    this.setState({
      gameOver: true,
    })
  }

  render() {
    return (
      <GameContainer>
        <TimerPosition>
          <Timer onFinish={this.gameOver}/>
        </TimerPosition>
        <GameCard />
      </GameContainer>
    )
  }
}

export default Game;
