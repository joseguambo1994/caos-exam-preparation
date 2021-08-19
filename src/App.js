import logo from './logo.svg';
import './App.css';
import Week1Component from './Week1/Week1'
import Question4 from './Question4/Question4';
import Question7 from './Question7/Question7';
import Formula from './Formulas/Formula';
import Question10 from './Question10/Question10';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Week1Component />
        <div></div>
        <Question4 />
        <div></div>
        <Question7 />
        <Question10 />
        <Formula />
      </header>
    </div>
  );
}

export default App;
