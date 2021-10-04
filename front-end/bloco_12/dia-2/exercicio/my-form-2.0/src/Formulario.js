import React from "react";

class Formulario extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
    }

    this.handlerChangeName = this.handlerChangeName.bind(this);
  }

  handlerChangeName({target}) {
    const { value } = target;
    if (value.length <= 40) {
      this.setState({
        nome: value.toUpperCase(),
      })
    }
  }

  render() {
    const { name } = this.state;
    return (
      <form>
        <fieldset>
          <label htmlFor="nome">
            NOME:
            <input
              type="text"
              id="nome"
              name="nome"
              onChange={this.handlerChangeName}
              value={name}
            />
          </label>
        </fieldset>
      </form>
    );
  }
}

export default Formulario;
