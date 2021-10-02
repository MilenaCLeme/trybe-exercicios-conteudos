import './App.css';

const namesArray = ['Milena', 'Bruna', 'Lucas', 'Alexander'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      {
        namesArray.map((element) => <ul>{Task(element)}</ul>)
      }
    </div>
  );
}

export default App;
