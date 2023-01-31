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
var numero = 8

numero % 97 == 0 ? console.log("Este número não é um número primo") : console.log("Este número é um número primo")


// 1.3.3

var hora = 1
var minutos = 0

hora > 0 ? minutos = hora * 60 : minutos = 60