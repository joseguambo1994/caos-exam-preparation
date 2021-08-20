import logo from './logo.svg';
import './App.css';
import Question1 from './Question1/Question1'
import Question4 from './Question4/Question4';
import Question7 from './Question7/Question7';
import Formula from './Formulas/Formula';
import Question10 from './Question10/Question10';
import Question11 from './Question11/Question11';
import Glossary from './Glossary/Glossary';
import Question14 from './Question14/Question14';
import Question20 from './Question20/Question20';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"  width={100}/>
        <div>
        <Question1 />
        <div>
        <Question4 />
        </div>
        <div>
        <Question7 />
        </div>
        <div>
        <Question10 />
        </div>
        <div>
        <Question11 />
        </div>
        <div>
          <Question14 />
        </div>
        <div>
          <Question20 />
        </div>
        <div>
         <Glossary />
        </div>
        
        <Formula />
      </div>
      </header>
      
    </div>
  );
}

export default App;
