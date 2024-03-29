/*eslint no-eval:0 */
import React, { useState } from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'
import Result from './components/Results'
import './App.css'


// Arrow Function
const App = () => {

  //array destructuring 
  //1er posición valor(que inicialmente es el valor por defecto)
  // const texto = arrayTextoFuncionModificaTexto[0]
   //2da posición: funcion que me va a permitir modificar el valor por defecto)
  // const funcionModificaTexto = arrayTextoFuncionModificaTexto[1]

  const [stack, setStack] = useState("")

  const items = words(stack, /[^-^+^*^/]+/g)
    // Lo que ejecuta la función
    console.log("Renderización de App", items)
    return (
    <main className='react-calculator'>
        <Result value={items[items.length -1]}></Result>
        <Numbers onClickNumber={number => {
          console.log("Click en numbers", number)
          setStack(`${stack}${number}`)
        }}>
        </Numbers>
        <Functions 
          onContentClear={() => {
            console.log("Content Clear")
          setStack('')
        } 
          }
          onDelete={() => {
            if(stack.lenght > 0) {
                const newStack = stack.substring(0, stack.length -1)
            console.log("onDelete", newStack)
            setStack(newStack)
              }
            }
          }
          >
        </Functions>
        <MathOperations onClickOperation={operation => {
          console.log("operation:", operation)
          setStack(`${stack}${operation}`)
        }}
          onClickEqual={equal => {
              console.log("equal:", equal)
          setStack(eval(stack).toString())
          }
        }
        >
        </MathOperations>
    </main>)
}

export default App

