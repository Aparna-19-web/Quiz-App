import React from 'react';
import './App.css';
import Home from './Components/Home';
import Question from './Components/Question';
import Result from './Components/Result';
import { question } from './myquestion';

export const myBasket = React.createContext()

function App() {
  const [currentComponent, setCurrentComponent] = React.useState("Home")

  const [myScore,setScore]=React.useState(0)
  return (
    <div className="App">

      <h1>
        <myBasket.Provider value={{ setCurrentComponent: setCurrentComponent,score : myScore, set:setScore }}>
          {currentComponent === "Home" && <Home />}
          {currentComponent === "Question" && <Question />}  
          {currentComponent === "Result" && <Result />}
        </myBasket.Provider>
       
      </h1>
      
    </div>
  );
}

export default App;
