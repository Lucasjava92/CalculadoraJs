function calculadora() {
    const operacao = prompt('Escolha uma operação: \n 1-Soma(+)\n 2-Subtração(-)\n 3-Multiplicação(*)\n 4-Divisão(/)\n 5-Divisão Inteira(%)\n 6-Potenciação(**)');
    console.log(operacao);

    if (!operacao || operacao >= 7) {
        alert('OPERAÇÃO INVÁLIDA!!');
        calculadora();
    } else {

var n1 = Number (prompt('Insira o primeiro valor'));
var n2 = Number (prompt('Insira o segundo valor'));
var resultado;

if (!n1 || !n2) {
    alert('PARÂMETRO INVÁLIDO!!!')
} else {

function soma() {
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`);
    novaOperacao();
}

function subtracao() {
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`);
    novaOperacao();
}

function multiplicacao() {
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`);
    novaOperacao();
}

function divisao() {
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`);
    novaOperacao();
}

function divisaoInteira() {
    resultado = n1 % n2;
    alert(`O resto da divisão entre ${n1} e ${n2} = ${resultado}`);
    novaOperacao();
}

function potenciacao() {
    resultado = n1 ** n2;
    alert(`${n1} elevado a ${n2} = ${resultado}`);
    novaOperacao();
}

function novaOperacao() {
    var opcao = prompt ('Deseja fazer outra operação? \n 1-SIM\n 2-NÃO')
    if (opcao == 1) {
        calculadora();
    } else if (opcao == 2) {
        alert('Até mais!')
    } else {
        alert('Digite uma opção válida!')
        novaOperacao();
    }
  }
}
/*
if (operacao == 1) {
    soma();
} else if (operacao == 2) {
    subtracao();
} else if (operacao == 3) {
    multiplicacao();
} else if (operacao == 4) {
    divisao();
} else if (operacao == 5) {
    divisaoInteira();
} else if (operacao == 6) {
    potenciacao();
  } 
  */
 switch (operacao){
     case 1:
         soma();
          break;
     case 2:
         subtracao();
         break;
     case 3:
          multiplicacao();
          break;
     case 4:
          divisao();
          break;
     case 5:
          divisaoInteira();
          break;
     case 6:
          potenciacao();
          break;
 }
  
 }
}


calculadora();