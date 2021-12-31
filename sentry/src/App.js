import logo from "./logo.svg";
import "./App.css";

const SentryError = () => {
  const throwSomething = undefined;

  console.log("Before");
  const check = throwSomething.hello;
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={SentryError}>Break</button>
      </header>
    </div>
  );
}

export default App;
