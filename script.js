alert("Vamos fazer algumas contas ?")

let numero1 = Number(prompt("Digite seu primero numero"))
let numero2 = Number(prompt("Digite seu segundo numero"))


let soma = numero1 + numero2
//teste no console console.log(soma)

let subtracao = numero1 - numero2
//teste no console console.log(subtracao)

let multiplicacao = numero1 * numero2
//teste no console console.log(multiplicacao)

let divisao = numero1 / numero2
//teste no console console.log(divisao)

let resto = numero1 % numero2
//teste no console console.log(resto)

let resultado = numero1 + numero2

alert(`A soma da conta é ${soma}`)
alert(`A subtracao da conta é ${subtracao}`)
alert(`A multiplicação da conta é ${multiplicacao}`)
alert(`A divisão da conta é ${divisao}`)
alert(`O resto da conta é ${resto}`)

if (resultado % 2 == 0){
  alert(`O resultado da soma é par`)
} else {
  alert(`O resultado da soma é impar`)
}

if (numero1 == numero2) {
  alert(`Os dois numeros são iguais`)
} else {
  alert(`Os dois numero são diferentes`)
}
