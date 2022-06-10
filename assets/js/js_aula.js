//console.log("Hello World")

//Comentário de uma linha

/**
 * Comentário para mais de uma linha
 */

// TIPOS DE VARIÁVEIS
//LET
let ano = 2022
//console.log(ano)
ano = 2023
//console.log(ano)

//CONST
const melhorSagaDoMundo = "Star Wars"
//console.log(melhorSagaDoMundo)
//melhorSagaDoMundo = "Harry Potter" // vai dar erro


// TIPOS DE DADOS
//STRING
let exemploString = "Oi! Tudo bem? Hoje é dia 9"
let exemploString1 = "2"

//console.log(exemploString)

//NUMBER

let exemploNumber = 1
//console.log(exemploNumber)

//BOOLEANO OU BOOLEAN
//true ou false

let inverno = false
let RecifeVerao = true

//ARRAY (lista)

let arrayExemplo = [9, 2022, "oi", true, "star wars", ["tudo bem", 2]]

// console.log(arrayExemplo[0])
// console.log(arrayExemplo[1])
// console.log(arrayExemplo[2])
// console.log(arrayExemplo[3])

//comprimento do array ou a qtd de elementos
//console.log(arrayExemplo.length)

//adicionar elementos no array
arrayExemplo.push("Kenzie")

//retirar o último elemento do array
arrayExemplo.pop()
//console.log(arrayExemplo)


//OBJETO
/*
- nome
- idade
- cidadeNascimento
*/

let pessoa = {
    nome: "Nicole",
    idade: 18,
    cidadeNascimento: "Recife"
}



//console.log(pessoa.nome)
//console.log(pessoa.idade)

pessoa['comida'] = 'Cuscuz'

//console.log(pessoa)

// OPERADORES LÓGICOS
/*
IGUALDADE
1) === Extritamente igual ou Idêntico => verifica se os valores são iguais e do mesmo tipo.
Ex: 
2 === 2 // true
2 === "2" // false

2) == Igualdade => avalia se os valores são iguais, independente do tipo.
Ex:
3 == 3 // true
3 == "3" // true


DIFERENCIAÇÃO
1) !== Não Idêntico => avalis se os valores E os tipos são diferentes.
Ex:
3 !== "3" // true
3 !== 3 // false


2) != Diferente => avalia se os valores são diferentes, independente de tipo.
Ex:
3 != 3 // false
3 != "3" // false
4 != 3 // true
4 != '3' // true

-------
1) < Menor que 
Ex:
1 < 2 // true
2 < 1 // false

2) > Maior que
Ex:
2 > 1 // true
1 > 2 // false

3) <= Menor ou igual
Ex:
3 >= 2 // true
3 >= 29 // false
3 >= 3 // true

4) >= Maior ou igual
Ex: 
4 >= 3 // true
4 >= 29 // false
4 >= 4 // true
*/

/*
OPERADOR && => E
    TABELAS VERDADE DO E
        true && true => true
        true && false => false
        false && true => false
        false && false => false

OPERADOR || => OU
    TABELA VERDADE DO OU
        true || true => true
        true || false => true
        false || true => true
        false || false => false
*/

// CONDICIONAIS
/*
SE CHOVER
VOU VER B99

SE NÃO 
VOU PRA PRAIA
*/

let chuva = false
let nublado = false

// if (chuva == true) {
//     console.log("Ver B99")
// } else if (nublado == true) {
//     console.log("Tomar um cafézin")
// } else {
//     console.log("Partiu praia")
// }

/*
FUNÇÕES

function nomeDaFuncao(parâmetros => são opcionais) {
    código aqui
} 
*/

function soma(a, b){
    //console.log(a + b)
    return a + b 
}
//soma(27, 59)

let resultado = soma(27, 59)
//console.log(resultado)

function saudacao(){
    return "Oi! Tudo bem?"
}

//console.log(saudacao())

/*
LOOPS
Servem para executar um mesmo código várias vezes

FOR LOOP
Sintaxe:

for (instrução 1; instrução 2; instrução 3) {
    código a ser executado
}

instrução 1 => define uma variável antes do início do loop => variável contadora
instrução 2 => define uma condição para a execução do loop
instrução 3 => aumenta, ou diminui, um valor cada vez que o bloco de código no loop é executado


*/

let cidades = ["Manaus", "São Paulo", "Recife", "Goiânia", "Porto Alegre", "Boa Vista"]
//console.log(cidades.length) => 6
// console.log(cidades[0])
// console.log(cidades[1])
// console.log(cidades[2])
// console.log(cidades[3])
// console.log(cidades[4])
// console.log(cidades[5])

// for (let i = 0; i < cidades.length; i++){
//     console.log(cidades[i])
// }

for (let i = 0; i < 5; i++) {
    if(i % 2 === 0) {
        console.log("par" + i)
    } else {
        console.log("ímpar" + i)
    }
}

// o operador % (módulo) faz a divisão entre dois números e retorna o resto