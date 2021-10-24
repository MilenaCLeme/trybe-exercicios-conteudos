import React from "react";

class Formulario extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selecao: 'Familia',
      numero: 0,
      texto: '',
      texteare: '',
      check: false,
    }

    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange({target}) {
    const valor = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: valor,
    })
  }

  render() {
    const { numero, texto, textarea } = this.state;
    return (
      <form>
        <fieldset>
          <select onChange={this.handlerChange} name="selecao">
            <option value="Familia">Familia</option>
            <option value="Amizade">Amizade</option>
          </select>
          <label htmlFor="numero">
            <input
              onChange={this.handlerChange}
              name="numero"
              id="numero"
              type="number"
              value={ numero }
            />
          </label>
          <label htmlFor="texto">
            <input
              onChange={this.handlerChange}
              type="text"
              name="texto"
              id="texto"
              value={ texto }
            />
          </label>
          <label htmlFor="texteare">
            <textarea
              onChange={this.handlerChange}
              id="texteare"
              name="texteare"
              value={ textarea }
            />
          </label>
          <label htmlFor="check">
            <input id="check" name="check" type="checkbox" onChange={this.handlerChange} />
            Test checkbox
          </label>
        </fieldset>
        <input type="file" />
      </form>
    );
  }
}

export default Formulario;
