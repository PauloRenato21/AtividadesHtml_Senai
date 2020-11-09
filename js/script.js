document.getElementById('adicionar').addEventListener('click', analisar)
let num = document.getElementById('num')
let digitados = document.getElementById('resultado')
let numeros = []

function analisar(){
    vazio();
    soma();
}

function vazio(){

    let num = Number((document.getElementById('num')).value);

    if(num == ''){
        alert("Número Vazio. Por favor adicione um número entre 1 e 100");
    }
}

function soma(){

    numeros.push(Number(num.value))
    let caixa = document.createElement('div')
    caixa.text = `Valor ${num.value} adicionado.`
    digitados.appendChild(caixa)
    res.innerHTML = '' // limpa o resultado
   
}
