// ./src/App.js

import logo from './logo.svg';
import './App.css';
import { Config } from "./config";

function App() {

  /**
   *
   * @desc log environment variable
   */
  const logEnvironmentVariable = () => {
    console.log(Config.REACT_APP_AGE)
  };

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            {Config.REACT_APP_NAME}
          </p>
          <p>
            {Config.REACT_APP_AGE}
          </p>
          <button onClick={() => logEnvironmentVariable()}>Test</button>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;
