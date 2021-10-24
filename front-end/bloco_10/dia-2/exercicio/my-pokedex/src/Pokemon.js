import React from "react";

class Pokemons extends React.Component {
  render() {
    const { id, name, type, averageWeight, image  } = this.props.poke
    return (
      <div key={ id }>
        <img src={image} alt={name}/>
        <h5>{name}</h5>
        <p>{type}</p>
        <p>{`Average Weigth: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
      </div>
    );
  }
}

export default Pokemons;
