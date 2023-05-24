export const pressNumber = () => {
  
  const numbers = document.querySelectorAll('.number')
  const input = document.getElementById('calulator__input')

  numbers.forEach((element) => {
    element.addEventListener('click' , () => {
      if(element.innerHTML.replace(/\s/g,'') === '.'){
        input.value += '.'
      }
      else{
        input.value += parseFloat(element.innerHTML)
      }
    })
  })

  const simbols_operations = document.querySelectorAll('.symbol')
  
  //! no detecta el signo - , / , %
  simbols_operations.forEach((element) => {
    element.addEventListener('click' , () => {
      input.value += element.innerHTML.replace(/\s/g,'')
    })
  })
}
