import React from "react";

class Content extends React.Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];
    return (
      <div>
        {
          conteudos.map(({conteudo, bloco, status }, index) => (
            <div className="card" key={index}>
              <h6>{index}</h6>
              <p>{`Conteúdo é: ${conteudo}`}</p>
              <p>{`Status: ${status}`}</p>
              <p>{`Bloco: ${bloco}`}</p>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Content;
