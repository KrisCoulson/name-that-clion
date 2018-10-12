import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import uuid from 'uuid';
import Timer from '../../ui/Timer';
import GameCard from '../../ui/GameCard';
import Loading from '../../ui/Loading';
import Results from '../results/Results';

const GameContainer = styled.div`
  position: relative;
  height: 100%;
`
const TimerPosition = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
`


class Game extends React.Component {
  state = {
    people: [],
    locations:[],
    isLoading: true,
    gameOver: false,
    missedNames: [],
    attempts: 0,
    victim: {
      id: null,
      location: null,
      position: null,
      name: null,
    },
    victims: []
  }

  async componentDidMount() {
    const res = await axios.get('http://name-that-clion.herokuapp.com/api/people', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    });

    const loc = await axios.get('http://name-that-clion.herokuapp.com/api/locations', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    });

    this.setState({
      people: res.data.people.map(person => {
        const location = loc.data.locations.find(location => location.id === person.location_id)
        return {
          ...person,
          location: location ? location.name : 'Unknown',
          uuid: uuid.v4()}
      }),
    }, () => {
      const victim = this.nextVictim();
      setTimeout(() => {
        this.setState({ isLoading: false, ...victim })
      }, 1000)
    })


  }

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  getVictims = () => {
    let newPeople = [...this.state.people];
    let people = [];
    for(let i = 0; i < 3; i++ ){
      let num = Math.floor(Math.random() * (newPeople.length - 1));
      let person = newPeople.splice(num,1);
      people.push(person[0]);
    }
    return people;
  }

  restartGame = () => {
    this.setState({
      gameOver: false,
      missedNames: [],
    })
  }

  gameOver = () => {
    this.setState({
      gameOver: true,
    })
  }

  getMissedPerson = (person) => {
    this.setState({
      missedNames: [...this.state.missedNames, person],
      ...this.nextVictim(),
    })
  }

  nextVictim = () => {
    const people = this.getVictims();
    const victims = this.shuffle(people);

    return {
      attempts: this.state.attempts + 1,
      victim: people[0],
      victims
    }
  }

  renderCorrectScreen() {
    if(this.state.isLoading) {
      return <Loading />;
    }

    if(this.state.gameOver) {
      return <Results restartGame={this.restartGame} misses={this.state.missedNames} attempts={this.state.attempts}/>
    }

      return (
        <GameContainer>
          <TimerPosition>
            <Timer onFinish={this.gameOver}/>
          </TimerPosition>
          <GameCard
            victim={this.state.victim}
            victims={this.state.victims}
            nextVictim={this.nextVictim}
            getMissedPerson={this.getMissedPerson}
          />
        </GameContainer>
      )
    // }
  }

  render() {
    return this.renderCorrectScreen();
  }
}

export default Game;
