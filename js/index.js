import { TYPE_OPERATIONS } from './types_operations.js'
import { OPERATIONS } from './operation.js'

const getTextInput = () => {
  const input = document.getElementById('calulator__input')
  let text
  input.addEventListener('keyup', () => {
    text = input.value
    const reg = /\s/g
    text = text.replace(reg, '')
    //*split(/(\d+)/) nos permite separar la cadena por numero pero sin perder dicho numero , esto gracias al agrupamiento ().
    text = text.split(/(\d+)/).filter(char => char != '')
  })
  
  //* [1 , + , 2 , + , 3 , + , 4 , + , 5]
  //!  0   1   2   3   4   5   6   7   8
  //? Vemos a que tipo de operacion se refiere y hacemos un llamodo a la funcion respectiva. Pero esto se ejecutara al hacer enter o click en el boton igual
  const equal = document.getElementById('equal')
  equal.addEventListener('click' , () => {
    let operation
    let a
    const operation1 = document.getElementById('operation__1')
    operation1.innerHTML = ' '
    if(text[text.length - 1] === TYPE_OPERATIONS.ADD){
      operation1.innerHTML = 'ERROR'
      operation1.style.color = 'red'
    }
    else{
      for (let i = 0 ; i < text.length ; i++) {
        if(i === 0) a = parseInt(text[i])
        if(text[i] === TYPE_OPERATIONS.ADD){
          operation = OPERATIONS.add(a , parseInt(text[i + 1]))
          a = operation
        }
      }
      operation1.innerHTML = `${a}`
      operation1.style.color = 'gray'
    }
  
  })
}

getTextInput()