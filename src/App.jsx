import React from 'react'
import Button from './components/Button'
import MathOperations from './components/MathOperations'
import Result from './components/Results'
import './App.css'


// Arrow Function
const App = () => {

  const clickHandlerFunction = text => {
      console.log("Button.clickHandler1", text)
  }


    // Lo que ejecuta la función
    console.log("Renderización de App")
    return (
    <main className='react-calculator'>
        <Result value={"0"}></Result>
        <div className="numbers">
          <Button text="1" clickHandler={clickHandlerFunction}></Button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
        </div>
        <div className="functions">
            <button>
                clear
            </button>
            <button>
                r
            </button>
        </div>
        <MathOperations onClickOperation={operation => 
          console.log("operation:", operation)}
          onClickEqual={equal =>
          console.log("equal:", equal)}>
        </MathOperations>
    </main>)
}

export default App

