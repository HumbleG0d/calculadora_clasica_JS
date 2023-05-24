export const pressNumber = () => {
  
  const numbers = document.querySelectorAll('.number')
  const input = document.getElementById('calulator__input')

  numbers.forEach((element) => {
    element.addEventListener('click' , () => {
      input.value += parseInt(element.innerHTML)
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
