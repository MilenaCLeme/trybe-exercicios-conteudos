import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Formulario</h1>
      <form>
        <fieldset>
          <select>
            <option value="Familia">Familia</option>
            <option value="Amizade">Amizade</option>
          </select>
          <label htmlFor="numero">
            <input name="numero" id="numero" type="number" />
          </label>
          <label htmlFor="texto">
            <input type="text" name="texto" id="texto" />
          </label>
          <label>
            <textarea />
          </label>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
