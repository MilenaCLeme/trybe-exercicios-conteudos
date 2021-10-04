import React from "react";
import { cpfMask } from "./Func";

class Formulario extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
    }

    this.handlerChangeName = this.handlerChangeName.bind(this);
    this.handlerChangeEmail = this.handlerChangeEmail.bind(this);
    this.handlerChangeCpf = this.handlerChangeCpf.bind(this);
  }

  handlerChangeName(event) {
    const { value } = event.target;
    if (value.length <= 40) {
      this.setState({
        nome: value.toUpperCase(),
      })
    } else {
      event.preventDefault()
    }
  }

  handlerChangeEmail(event) {
    const { value } = event.target;
    if (value.length <= 50) {
      this.setState({
        email: value,
      })
    } else {
      event.preventDefault()
    }
  }

  handlerChangeCpf(event) {
    const {value} = event.target
    if (value.length <= 14) {
      this.setState({
        cpf: cpfMask(value)
      })
    } else {
      event.preventDefault();
    }
  }

  render() {
    const { nome, email, cpf } = this.state;
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
              value={ nome }
            />
          </label>
          <label htmlFor="email">
            EMAIL:
            <input
              type="text"
              id="email"
              name="email"
              value={ email }
              onChange={this.handlerChangeEmail}
            />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={ cpf }
              onChange={this.handlerChangeCpf}
            />
          </label>
        </fieldset>
      </form>
    );
  }
}

export default Formulario;
