// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  if(operador != "+" || operador != "-" || operador != "/" || operador != "*"){
     if( num2 != 0){
      if(operador == "+"){
        math = num1 + num2
      }
      else if(operador == "-"){
        math = num1 - num2
      }
      else if(operador == "*"){
        math = num1 * num2
      }
      else if(operador == "/"){
        math = num1 / num2
      }
    }
    else {
      math = "Erro: divisão por zero"
    }
  }
  else{
    math = "Erro: operação inválida"
  }
  
  return math
}

console.log(calcular(10,20,"+"))
console.log(calcular(10,20,"-"))
console.log(calcular(10,20,"*"))
console.log(calcular(10,20,"/"))
console.log(calcular("a",2,"+"))
console.log(calcular(10,0,"/"))
console.log(calcular(10,5,"%"))
//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };