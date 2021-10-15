import React from "react";

class Curriculo extends React.Component {

  render() {
    const {
      resumo,
      cargo,
      descricao,
      handlerChangeResumo,
      handlerChangeDescricao,
      handlerChangeCargo
    } = this.props;
    return (
      <fieldset>
        <h5>Dados Do seu Ultimo Emprego:</h5>
        <label>
          Resumo do Curriculo:
          <textarea 
            onChange={handlerChangeResumo}
            value={ resumo }
          />
        </label>
        <label>
          <textarea 
            value={cargo}
            onChange={handlerChangeCargo}
          />
        </label>
        <label>
          <textarea
            value={descricao}
            onChange={handlerChangeDescricao}
          />
        </label>
      </fieldset>
    );
  }
}

export default Curriculo;
