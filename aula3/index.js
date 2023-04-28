//console.log("Olá mundo!")
//comentario
/*
comentario de bloco
*/

//Sempre declarar variavel com let ou const

//typeScrypt tipa o javascript
const pi = 3.14;
const pessoa = {
    nome: "Jorge",
    idade: 32,
    profissao: "FullStackMaster"
}

let nome = "Jorge";
let cargo = "Fullstack Senior"
let frase1 = `Meu nome é ${pessoa.nome}. Eu tenho ${pessoa.idade} anos`

console.log("Bem vindo" + " " + nome + " " + cargo)
// console.log(typeof nome)
// console.log(pi)
// console.log(typeof pessoa)
console.log(frase1);

if (pessoa.idade >= 18) {
    console.log(`A pessoa de nome ${pessoa.nome} é maior de idade`)
}
else (
    console.log(`A pessoa é menor de idade`)
)