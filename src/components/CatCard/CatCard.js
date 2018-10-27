import React, { Component } from "react";
import "./CatCard.css";

const rename = (image) => {
  let name = image.substring(0, image.indexOf("."));
  return name.split("-").map(e => e.substring(0, 1).toUpperCase() + e.substring(1, e.length)).join(" ");
}

class CatCard extends Component {

  click = () => {
    if (this.props.clicked) {
      this.props.endGame();
    }
    else {
      this.props.pointUp(this.props.id);
    }
  }

  render() {
    return (
      <img className="cat" src={"Wildcat-Clicky-Game/images/" + this.props.image}
        alt={rename(this.props.image)} title={rename(this.props.image)} 
        onClick={this.click}></img>
    );
  }
}

export default CatCard;