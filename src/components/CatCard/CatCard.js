import React, { Component } from "react";
import "./CatCard.css";

const rename = (image) => {
  let name = image.substring(0,image.indexOf("."));
  return name.split("-").map(e=>e.substring(0,1).toUpperCase()+e.substring(1,e.length)).join(" ");
}

class CatCard extends Component {
  state = {
    clicked: false
  }

  click = () => {
    if(this.state.clicked){
      this.props.endGame();
    }
    else{
      this.setState({clicked: true});
      this.props.pointUp();
    }
  }

  render(){
    return (
      <img className="cat" src={"/images/" + this.props.image} alt={rename(this.props.image)} onClick={this.click}></img>
    );
  }
}

export default CatCard;