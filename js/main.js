function calculate() {
    var nome = document.getElementById('nome').value;
    var custoFixo = parseFloat(document.getElementById('custoFixo').value);
    var salarioReal = custoFixo * 3;
    
    if(nome == ''){
        nome = 'Visitante';
    }

    if(Number.isNaN(custoFixo)){
        custoFixo = 0;
    }

    if(Number.isNaN(salarioReal)){
        salarioReal = 0;
    }

    salarioReal = salarioReal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    document.getElementById('infosNome').innerHTML = `Olá, ${nome}, </br>`
    document.getElementById('infosCustoMensal').innerHTML = `seu salário mensal deveria ser ${salarioReal}`

    resetInput();
}

function resetInput(){
    document.getElementById('nome').value = '';
    document.getElementById('custoFixo').value = '';
}

function limpar()   {
    window.location.reload();
}
