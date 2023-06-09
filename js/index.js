import { TYPE_OPERATIONS } from './types_operations.js'
import { OPERATIONS } from './operation.js'
import { pressNumber} from './keyboard_numbers.js'
import { getInputValue } from './input_text.js'

const getTextInput = () => {
  const input = document.getElementById('calulator__input')
  let text = ' '
  input.addEventListener('keyup', () => {
    text = input.value
    text = getInputValue(text)
  })
  
  pressNumber()
  
  //* Al precionar el boton igual , se calcula.
  const equal = document.getElementById('equal')
  equal.addEventListener('click' , () => {
    if(text === ' '){
      performCalculation(getInputValue(input.value))
    } 
    else{
      performCalculation(text)
      text = ' '
    }
  })

  //* Al precionar la tecla enter , se calcula
  document.addEventListener('keydown' , (e) => {
    if(e.key === 'Enter' || e.key === 'Return'){
      if(text === ' '){
        performCalculation(getInputValue(input.value))
      } 
      else{
        performCalculation(text)
        text = ' '
      }   
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
    for(let i = 0 ; i < text.length ; i++){
      if(text[i] === TYPE_OPERATIONS.DIVISION){
        operation = OPERATIONS.division(parseFloat(text[i - 1]) , parseFloat(text[i + 1]))
        a = operation
        text.splice(i-1, 3 , a)
        i = 0
      }
    }
    
    //*[1 , + , 2 , - , 3 , * , 4]
    for(let i = 0 ; i < text.length ; i++){
      if(text[i] === TYPE_OPERATIONS.PRODUCT){
        operation = OPERATIONS.product(parseFloat(text[i - 1]) , parseFloat(text[i + 1]))
        a = operation
        text.splice(i-1, 3 , a)
        i= 0
      }
    }

    for (let i = 0 ; i < text.length ; i++) {
      if(i === 0) a = parseFloat(text[i])
      if(text[i] === TYPE_OPERATIONS.ADD){
        operation = OPERATIONS.add(a , parseFloat(text[i + 1]))
        a = operation
      }
      else if(text[i] === TYPE_OPERATIONS.SUBSTRACT){
        operation = OPERATIONS.susbtract(a , parseFloat(text[i + 1]))
        a = operation
      }
    }

    for(let i = 0 ; i < text.length ; i++){
      if(text[i] === TYPE_OPERATIONS.PERCENTAGE){
        operation = OPERATIONS.percetage(parseFloat(text[i - 1]) , parseFloat(text[i + 1]))
        a = operation
        text.splice(i-1, 3 , a)
        i= 0
      }
    }

    operation1.innerHTML = `${a}`
    operation1.style.color = 'gray'
  }

}

getTextInput()