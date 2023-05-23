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

  //* Al precionar el boton igual , se calcula.
  const equal = document.getElementById('equal')
  equal.addEventListener('click' , () => {
    performCalculation(text)
  })

  //* Al precionar la tecla enter , se calcula
  document.addEventListener('keydown' , (e) => {
    if(e.key === 'Enter' || e.key === 'Return'){
      performCalculation(text)
    }
  })

  //* Borramos el contenido del input.
  const button_c = document.getElementById('number_c')
  button_c.addEventListener('click' , () => {
    input.value = ' '
  })
}

//* Esta funcion se encargara de hacer los respectivos calculos
function performCalculation(text){
  //* [1 , + , 2 , + , 3 , + , 4 , + , 5]
  //!  0   1   2   3   4   5   6   7   8
  let operation
  let a
  const operation1 = document.getElementById('operation__1')
  operation1.innerHTML = ' '
  if(text[text.length - 1] === TYPE_OPERATIONS.ADD || text[text.length - 1] === TYPE_OPERATIONS.PRODUCT || text[text.length - 1] === TYPE_OPERATIONS.SUBSTRACT || text[text.length - 1] === TYPE_OPERATIONS.DIVISION){
    operation1.innerHTML = 'ERROR'
    operation1.style.color = 'red'
  }
  else{
    //*[1 , + , 2 , - , 3 , * , 4]
    for(let i = 0 ; i < text.length ; i++){
      if(text[i] === TYPE_OPERATIONS.PRODUCT){
        operation = OPERATIONS.product(parseInt(text[i - 1]) , parseInt(text[i + 1]))
        a = operation
        text.splice(i-1, 3 , a)
      }
    }
    for (let i = 0 ; i < text.length ; i++) {
      if(i === 0) a = parseInt(text[i])
      if(text[i] === TYPE_OPERATIONS.ADD){
        operation = OPERATIONS.add(a , parseInt(text[i + 1]))
        a = operation
      }
      else if(text[i] === TYPE_OPERATIONS.SUBSTRACT){
        operation = OPERATIONS.susbtract(a , parseInt(text[i + 1]))
        a = operation
      }
    }
    operation1.innerHTML = `${a}`
    operation1.style.color = 'gray'
  }

}

getTextInput()