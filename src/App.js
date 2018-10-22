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
  return random.map(e=>array[e]).map(e=>{
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
    toShow: 12,
    game: newGame(cats,12),
    points: 0,
    best: 0
  }

  endGame = () => {
    this.setState({
      game: newGame(cats, this.state.toShow),
      points: 0
    });
    this.render();
  }

  pointUp = id => {
    //console.log(id);
    this.setState({
      game: this.state.game.map(e=>{
        //console.log(e.id===id);
        //console.log(e.id===id ? {id: e.id, image: e.image, clicked: true} : e);
        return e.id===id ? {id: e.id, image: e.image, clicked: true} : e
      }),
      points: this.state.points + 1,
      best: this.state.points + 1 > this.state.best ? this.state.points + 1 : this.state.best
    });
    //console.log(this.state.game);
  }

  render() {
    return (
      <div>
        <h1>Wildcat Clicky Game</h1>
        <h5>Points: {this.state.points}&nbsp;Best: {this.state.best}</h5>
        {shuffle(this.state.game).map(e=><CatCard key={e.id} id={e.id} image={e.image} endGame={this.endGame} pointUp={this.pointUp} clicked={e.clicked}/>)}
      </div>
    );
  }
}

export default App;
