import React from "react";
import { cpfMask } from "./Func";
import { states } from './estados';
import Curriculo from  './Curriculo';

class Formulario extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: 'Acre',
      tipo: '',
      resumo: '',
      cargo: '',
      descricao: '',
      enviar: false,
    }

    this.handlerChangeName = this.handlerChangeName.bind(this);
    this.handlerChangeEmail = this.handlerChangeEmail.bind(this);
    this.handlerChangeCpf = this.handlerChangeCpf.bind(this);
    this.handlerChangeEndereco = this.handlerChangeEndereco.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.handlerChangeEstado = this.handlerChangeEstado.bind(this);
    this.handlerChangeTipo = this.handlerChangeTipo.bind(this);
    this.handlerChangeResumo = this.handlerChangeResumo.bind(this);
    this.handlerChangeCargo = this.handlerChangeCargo.bind(this);
    this.handlerChangeDescricao = this.handlerChangeDescricao.bind(this);
    this.PegarInformação = this.PegarInformação.bind(this);
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

  handlerChangeEndereco(event) {
    const { value } = event.target;
    if (value.length <= 200) {
      this.setState({
        endereco: value.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, ''),
      })
    }
  }

  onBlurHandler(event) {
    const { value } = event.target;
    if (value.length <= 28) {
      this.setState({
        cidade: value,
      });
    }
  }

  handlerChangeEstado(event) {
    const { value } = event.target;
    this.setState({
      estado: value,
    });
  }

  handlerChangeTipo({target}) {
    const { name } = target;
    this.setState({
      tipo: name,
    });
  }

  handlerChangeResumo({target}) {
    const { value } = target;
    if (value.length <= 1000 ) {
      this.setState({
        resumo: value,
      });
    }
  }

  handlerChangeCargo({target}) {
    const { value } = target;
    if (value.length <= 40) {
      this.setState({
        cargo: value,
      });
    }
  }

  handlerChangeDescricao({target}) {
    const { value } = target;
    if (value.length <= 500) {
      this.setState({
        descricao: value,
      });
    }
  }

  PegarInformação() {
    this.setState({
      enviar: true,
    });
  }

  funcaoDaDiv() {
    const { 
      nome,
      email,
      cpf,
      endereco,
      cidade,
      estado,
      tipo,
      resumo,
      cargo,
      descricao,
      enviar,
    } = this.state;
    if (enviar === true ) {
      return (
        <div>
          <p>{nome}</p>
          <p>{email}</p>
          <p>{cpf}</p>
          <p>{endereco}</p>
          <p>{cidade}</p>
          <p>{estado}</p>
          <p>{tipo}</p>
          <p>{resumo}</p>
          <p>{cargo}</p>
          <p>{descricao}</p>
        </div>
      )
    }
  }

  render() {
    const { nome, email, cpf, endereco, cidade, estado, tipo } = this.state;
    return (
      <form>
        <fieldset>
          <h5>Dados Pessoais:</h5>
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
          <label htmlFor="endereco">
            Endereço:
            <input
              type="text"
              id="endereco"
              name="endereco"
              value={ endereco }
              onChange={this.handlerChangeEndereco}
            />
          </label>
          <label htmlFor="cidade">
            Cidade:
            <input
              type="text"
              id="cidade"
              name="cidade"
              onChange={this.onBlurHandler}
              value={cidade}
            />
          </label>
          <label>
            Estados:
            <select onChange={this.handlerChangeEstado} value={estado}>
              {
                Object.values(states).map((element) => <option value={element}>{element}</option> )
              }
            </select>
          </label>
          <label>
            <input
              type="radio"
              name="Casa"
              checked={tipo === 'Casa'}
              onChange={this.handlerChangeTipo}
            />
            Casa
          </label>
          <label>
            <input
              type="radio"
              name="Apartamento"
              onChange={this.handlerChangeTipo}
              checked={tipo === 'Apartamento'}
            />
            Apartamento
          </label>
        </fieldset>
        <Curriculo
          handlerChangeResumo={this.handlerChangeResumo}
          handlerChangeCargo={this.handlerChangeCargo}
          handlerChangeDescricao={this.handlerChangeDescricao}
          resumo={this.state.resumo}
          cargo={this.state.cargo}
          descricao={this.state.descricao}
        />
        <fieldset>
          <button type="button" onClick={() => this.PegarInformação() }>Enviar</button>
          { this.funcaoDaDiv() }
        </fieldset>
      </form>
    );
  }
}

export default Formulario;
