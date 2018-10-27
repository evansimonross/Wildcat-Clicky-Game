import React, { Component } from 'react';
import CatCard from "./components/CatCard";
import { Modal } from 'react-materialize';
import cats from "./cats.json";
import './App.css';

const STARTING_AMT = 8;
const ABSOLUTE_MAX = 32;
const LEVEL_UP_AMT = 3;

const newGame = (array, number) => {
  if (number > array.length) { number = array.length; }
  let random = [];
  for (let i = 0; i < number; i++) {
    let r = Math.floor(Math.random() * array.length);
    while (random.includes(r)) {
      r = Math.floor(Math.random() * array.length);
    }
    random.push(r);
  }
  return random.map(e => array[e]).map(e => {
    e.clicked = false;
    return e;
  });
}

const shuffle = array => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class App extends Component {
  state = {
    max: STARTING_AMT,
    game: newGame(cats, STARTING_AMT),
    points: 0,
    best: 0,
    level: 1
  }

  // TODO: Add game over notification
  endGame = () => {
    console.log(this.modal);
    this.setState({
      game: newGame(cats, this.state.max),
      points: 0
    });
  }

  // TODO: Add notifications when level changes
  pointUp = id => {
    if (this.state.points >= this.state.max - 1) {
      let newMax = this.state.max + LEVEL_UP_AMT;
      if (newMax > ABSOLUTE_MAX) {
        // Start a new game at base level. The player has already beat max level
        this.setState({
          max: STARTING_AMT,
          game: newGame(cats, STARTING_AMT),
          points: 0,
          best: this.state.best + 1,
          level: 1
        });
      }
      else {
        // Move to next level
        this.setState({
          max: newMax,
          game: newGame(cats, newMax),
          points: 0,
          best: this.state.best + 1,
          level: (newMax - (STARTING_AMT - LEVEL_UP_AMT)) / LEVEL_UP_AMT
        });
      }
    }
    else {
      // Just give a point, level doesn't change
      this.setState({
        game: this.state.game.map(e => {
          return e.id === id ? { id: e.id, image: e.image, clicked: true } : e
        }),
        points: this.state.points + 1,
        best: this.state.points + 1 > this.state.best ? this.state.points + 1 : this.state.best
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Wildcat Clicky Game</h1>
        <h5>Points: {this.state.points}&nbsp;Best: {this.state.best}&nbsp;Level: {this.state.level}</h5>
        {shuffle(this.state.game).map(e => <CatCard key={e.id} id={e.id} image={e.image} endGame={this.endGame} pointUp={this.pointUp} clicked={e.clicked} />)}
        <div>
          <Modal
            id='modal'
            header='Modal Header'>
            Lorem ipsum dolor sit amet
          </Modal>
        </div>;
      </div>
    );
  }
}

export default App;
