import React, { Component } from 'react';
import CatCard from "./components/CatCard";
import cats from "./cats.json";
import './App.css';

const newGame = (array, number) => {
  if(number > array.length) { number = array.length; }
  let random = [];
  for(let i=0; i<number; i++){
    let r = Math.floor(Math.random()*array.length);
    while(random.includes(r)){
      r = Math.floor(Math.random()*array.length);
    }
    random.push(r);
  }
  return random.map(e=>array[e]);
}

class App extends Component {
  state = {
    cats,
    toShow: 12,
    game: newGame(cats,12),
    points: 0,
    best: 0
  }

  endGame = () => {

  }

  pointUp = () => {

  }

  render() {
    return (
      <div>
        {this.state.game.map(e=><CatCard image={e.image} endGame={this.endGame} pointUp={this.pointUp}/>)}
      </div>
    );
  }
}

export default App;
