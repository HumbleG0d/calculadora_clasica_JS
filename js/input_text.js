export function getInputValue(text){
  const reg = /\s/g
  text = text.replace(reg, '')
  //*split(/(\d+)/) nos permite separar la cadena por numero pero sin perder dicho numero , esto gracias al agrupamiento ().
  text = text.split(/(\d+)/).filter(char => char != '')
  return text
}