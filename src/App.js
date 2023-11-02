import "./App.css";
import logo from "./logo192.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
      </header>
      <main>
       <Dictionary defaultKeyword="happiness" />

      </main>
      <footer>
        Coded by <a href="https://github.com/bxity">Boitumelo Vilakazi</a> and
        is <a href="https://github.com/bxity/boity-dictionary">open-sourced on GitHub</a>
      </footer>
    </div>
    </div>
  );
}

export default App;
