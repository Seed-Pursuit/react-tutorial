import logo from './logo.svg';
import './App.css';

function App() {
  function MyButton() {
    return (
      <button>
        I'm a button
      </button>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my app</h1>
        <MyButton />
      </header>
    </div>
  );
}

export default App;
