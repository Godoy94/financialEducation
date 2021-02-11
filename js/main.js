function calcular() {

    var nome = document.getElementById('nome').value
    var custoFixo = parseFloat(document.getElementById('custoFixo').value)
    var salarioReal = custoFixo * 3
    
    if(nome == ''){
        nome = 'Visitante'
    }

    if(Number.isNaN(custoFixo)){
        custoFixo = 0
    }

    if(Number.isNaN(salarioReal)){
        salarioReal = 0
    }

    console.log(nome, custoFixo, salarioReal)

    salarioReal = salarioReal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })


    document.getElementById('infosNome').innerHTML = `Olá, ${nome}, </br>`
    document.getElementById('infosCustoMensal').innerHTML = `seu salário mensal deveria ser ${salarioReal}`

}

function limpar() {
    document.location.reload(true)
}