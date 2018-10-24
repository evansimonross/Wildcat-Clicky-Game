import React, { Component } from 'react';
import CatCard from "./components/CatCard";
import cats from "./cats.json";
import './App.css';

const STARTING_AMT = 12;
const ABSOLUTE_MAX = 32;
const LEVEL_UP_AMT = 4;

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

  endGame = () => {
    this.setState({
      game: newGame(cats, this.state.max),
      points: 0
    });
    //this.render();
  }

  pointUp = id => {
    if (this.state.points >= this.state.max - 1) {
      let newMax = this.state.max===ABSOLUTE_MAX ? ABSOLUTE_MAX : this.state.max + LEVEL_UP_AMT;
      console.log(newMax);
      this.setState({
        max: newMax,
        game: newGame(cats, newMax),
        points: 0,
        best: this.state.best + 1,
        level: (newMax-(STARTING_AMT-LEVEL_UP_AMT))/LEVEL_UP_AMT
      });
      //this.render();
    }
    else {
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
      </div>
    );
  }
}

export default App;
