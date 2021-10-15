import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {
          data.map((element) => <Pokemon poke={ element } />)
        }
      </div>
    );
  }
}

export default Pokedex;
