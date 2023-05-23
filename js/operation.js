export const OPERATIONS = {
  add(a , b) {
    return a + b
  },
  susbtract(a , b) {
    return a - b
  },
  division(a , b){
    return a/b
  },
  product(a , b){
    return a*b
  },
  percetage(a , b){
    return this.product(a,b)/100
  }
}

