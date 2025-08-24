// ============================
// Atividade 01 - 07/08/2025
// ============================
// Objetivo: praticar estruturas de controle, laços, funções e objetos.
// ============================


// 1) Tabuada de multiplicação
function tabuada(numero) {
  console.log(`\n--- Tabuada do ${numero} ---`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
tabuada(7); // exemplo


// 2) Função que verifica maioridade
function verificarIdade(pessoa) {
  if (pessoa.idade >= 18) {
    return `${pessoa.nome} é maior de idade.`;
  } else {
    return `${pessoa.nome} é menor de idade.`;
  }
}

console.log("\n--- Verificar Idade ---");
console.log(verificarIdade({ nome: "João", idade: 17 }));
console.log(verificarIdade({ nome: "Maria", idade: 25 }));


// 3) FizzBuzz (1 a 100)
console.log("\n--- FizzBuzz de 1 a 100 ---");
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


// 4) Calculadora com switch
function calculadora(a, b, operacao) {
  switch (operacao) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Erro: divisão por zero!";
    default:
      return "Operação inválida!";
  }
}

console.log("\n--- Calculadora ---");
console.log("10 + 5 =", calculadora(10, 5, "+"));
console.log("10 - 5 =", calculadora(10, 5, "-"));
console.log("10 * 5 =", calculadora(10, 5, "*"));
console.log("10 / 5 =", calculadora(10, 5, "/"));


// 5) Conversor de temperatura
function converterTemperatura(temp) {
  if (temp.tipo === "C") {
    return {
      valor: temp.valor * 1.8 + 32,
      tipo: "F"
    };
  } else if (temp.tipo === "F") {
    return {
      valor: (temp.valor - 32) / 1.8,
      tipo: "C"
    };
  } else {
    return "Tipo inválido! Use 'C' ou 'F'.";
  }
}

console.log("\n--- Conversor de Temperatura ---");
console.log(converterTemperatura({ valor: 30, tipo: "C" })); 
console.log(converterTemperatura({ valor: 86, tipo: "F" }));
