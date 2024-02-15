import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {process.env.REACT_APP_WELCOME_TEXT || "Github Actions Tutorial"} - By
          Chetan Verma
        </p>
        <a
          className="App-link"
          href="https://drive.google.com/drive/folders/1eE2wIjK9_Q-BTNqdFzF6b8nep00Av5Kz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn DevOps
        </a>
      </header>
    </div>
  );
}

export default App;
