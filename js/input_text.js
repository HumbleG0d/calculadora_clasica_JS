export function getInputValue(text){
  const reg = /\s/g
  text = text.replace(reg, '')
  //*split(/(\d+)/) nos permite separar la cadena por numero pero sin perder dicho numero , esto gracias al agrupamiento ().
  
  //*text.split(/(\.-|\+|\*|\/)/g).filter(char => char != '')

  if(text.length >= 3){
    text = text.split(/(\.-|\+|\x|\/)/g).filter(char => char != '')
  }
  else{
    text = text.split(/(\d+)/).filter(char => char != '')
  }

  return text
}