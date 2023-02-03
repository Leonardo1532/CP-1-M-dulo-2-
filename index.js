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

// 1.5.1 e 1.5.2 e 1.5.3

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

// 1.6.1

var idade
function ConfirmarDados(nome) {
    var nomeCompleto = nome + " da Silva"
    function getAnoNascimento() {
        idade = 20
        var ano = 2022 - idade
        return ano
    }
    console.log("Nome completo: " + nomeCompleto)
    console.log("Ano de nascimento: " + getAnoNascimento())
    console.log("Idade:  " + idade)
}

// 1.6.2

let geracao

let idade2

function ConfirmarDados2(nome) {
    const nomeCompleto = nome + " da Silva"
    geracao = "Millenium"
    function getAnoNascimento() {
        idade2 = 20
        let ano = 2022 - idade2
        return ano
    }
    let anoDeNascimento = getAnoNascimento()
    if (anoDeNascimento <= 1995) {
        geracao = "geração X"
    }
    console.log("Nome completo: " + nomeCompleto)
    console.log("Ano de Nascimento: " + anoDeNascimento)
    console.log("Geração: " + geracao)
}

// 1.6.3


function teste() {
    try {
        console.log("Entrou no try")
        if (1 != 2) {
            throw new Error("Deu ruim")
        }
    } catch (error) {
        console.log("Entrou no catch")
        console.log(error)
    }
}


function ConfirmarDados3(nome) {
    try {
        var nomeCompleto = nome + ' da Silva'
        function getAnoNascimento() {
            if (!idade) {
                throw new Error("Um erro foi encontrado e não foi possível concluir a operação")
            } else {
                var idade = 20
                var ano = 2023 - idade
                return ano
            }
        }
    } catch (error) {
        console.log(error)
    }
    console.log('Nome completo: ', nomeCompleto)
    console.log('Ano de nascimento: ', getAnoNascimento())
    console.log('Idade: ', idade)
}

//  1.6.4

function ConfirmarDados4(nome, idade) {
    let nomeCompleto = nome + " da Silva"
    function getAnoNascimento() {
        let ano = 2022 - idade
        return ano
    }
    let anoDeNascimento = getAnoNascimento()

    function geracaoPertence(anoDeNascimento) {
        if (anoDeNascimento < 1980) {
            return "geração X"
        } else {
            return "Millenium"
        }
    }
    let geracao2 = geracaoPertence(anoDeNascimento)

    console.log("Nome completo: " + nomeCompleto)
    console.log("Ano de Nascimento: " + anoDeNascimento)
    console.log("Geração: " + geracao2)
}