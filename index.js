// 1.1
var soma = 25 + 12
var subtracao = -12 - (-29)
var div = 80 / 3
var resto = 80 % 3
soma += 5
soma -= 3

// 1.2
// caminho_5km && corro_2km, passo_o_dia_bem

// levanto_cedo || antes_das_8h, saio_tranquilo

// !(termino_o_trabalho) || !(tenho_compromisso), saio_tarde

// 1.3.1
var caminho = 5
var corro = 2
if (caminho == 5 && corro == 2) {
    console.log("Passo o dia bem")
}

var cedo = 7
var levanto = 7
if (levanto == cedo || levanto < 8) {
    console.log("Saio Tranquilo")
}

var TerminaOTrabalho = false
var TenhoCompromisso = false
if (!(TerminaOTrabalho) || !(TenhoCompromisso)) {
    console.log("Saio Tarde")
}

// 1.3.2
var numero = 5

numero % 1 === 0 && numero % numero === 0 ? console.log("Este número é um número primo") : console.log("Este número não é um número primo")


// 1.3.3

var hora = 1
var minutos = 0

hora > 0 ? minutos = hora * 60 : minutos = 60

// 1.4.1

var lista = [12, 6, 9, 42, 11, 102, 44, 15]
var soma = 0
for (let index = 0; index < lista.length; index++) {
    soma = soma + lista[index]
}
console.log(soma)

var contador = 0
var soma2 = 0
while (contador < lista.length) {
    soma2 = soma2 + lista[contador]
    contador++
}
console.log(soma2)

var soma3 = 0
var contador2 = 0
do {
    soma3 = soma3 + lista[contador2]
    contador2++
} while (contador2 < lista.length);
console.log(soma3)

// 1.4.2

for (let index = 0; index < 10; index++) {
    var primo = index
    console.log(primo)
    if (primo % 1 === 0 && primo % primo === 0) {
        if (primo === 1) {
            continue;
        } else {
            console.log("O primeiro número primo é: " + primo)
            break;
        }
    }
}

for (let index = 0; index < 100; index++) {
    if (index > 39 && index < 51) {
        continue;
    }
    console.log(index)
}

let nome
let senha
function Usuario() {
    nome = prompt("Insira um nome")
    senha = prompt("Insira uma senha")
}

let Nome
let Senha
function Usuario2(nome, senha) {

    Nome = prompt("Insira um nome existente")
    Senha = prompt("Insira uma senha existente")

    if (nome == Nome && senha == Senha) {
        return true
    } else {
        return false
    }
}