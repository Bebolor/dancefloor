import React from "react";
import "./style.css";
import Cell from "../Cell";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
    };
    this.startDanceFloor();
  }

  createCells = () => {
    const newColors = [];
    for (let i = 0; i < 25; i++) {
      let newColor = `rgb(${Math.floor(Math.random() * 256)}, 
      ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      newColors.push(newColor);
    }

    this.setState({
      colors: newColors,
    });
  };

  startDanceFloor = () => {
    setInterval(this.createCells, 500);
  };

  render() {
    return (
      <div className="grid">
        {this.state.colors.map((color) => (
          <Cell color={color} />
        ))}
      </div>
    );
  }
}
export default Grid;
