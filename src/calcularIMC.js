// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

function calcularIMC(peso, altura) {
  if(altura>0){
    IMC = peso / (altura * altura)
  if(IMC < 18.5){
    calculo = "Abaixo do peso"
    
  }
  else if(IMC > 18.5 && IMC <= 24.9){
    calculo = "Peso normal"
    
  }
  else if(IMC >= 25 && IMC <= 29.9){
    calculo = "Sobrepeso"
    
  }
  else if(IMC >= 30){
    calculo = "Obesidade"
    
  }
  }
  else{
    calculo = "Erro"
  }
  return calculo
}

console.log(calcularIMC(22,1.70))
console.log(calcularIMC(66,1.70))
console.log(calcularIMC(78,1.70))
console.log(calcularIMC(99,1.70))
console.log(calcularIMC(66,0))
module.exports = { calcularIMC };