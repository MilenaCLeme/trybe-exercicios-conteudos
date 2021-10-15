import React from 'react';
import './App.css';

class Func extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0,
    };
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
    this.handlerClickSomar = this.handlerClickSomar.bind(this);
  }

  handleClick() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
    console.log(this)
    console.log('Clicou!')
  }

  handlerClickSomar() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }
  
  render() {
    const { count } = this.state;
    console.log(count % 2 === 0 ? 'verde' : 'preto')
    return (
      <div>
        <button onClick={this.handleClick}>Meu botão</button>
        <button onClick={this.handlerClickSomar}>Somar</button>
        <p className={count % 2 === 0 ? 'verde' : 'preto'}>{count}</p>
      </div>
    )
  }
}

export default Func;