import './App.css';
import Pokedex from './Pokedex';
import data from './data';

function App() {
  return (
    <div className="App">
      <Pokedex data={ data } />
    </div>
  );
}

export default App;
