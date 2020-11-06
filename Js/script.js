const acao = document.getElementById('confirmar')
acao.addEventListener('click', multas)

const imprime = document.getElementById('imprime')
imprime.addEventListener('click', imprimir)

function multas(){
    condicao1();
    condicao2();
    condicao3();
}

function imprimir(){
    print();
}

function condicao1(){

    let infratormax = Number((document.getElementById("infrator")).value)
    let maxvia = Number((document.getElementById("max")).value)
    let pessoa = String((document.getElementById('nome')).value)

    if(infratormax > maxvia){

        if(infratormax > maxvia && infratormax <= (maxvia + 7)){
            document.getElementById('resultado').innerText = `Advertência
            
            TRANSITAR EM VELOCIDADE SUPERIOR A MAXIMA PERMITIDA EM ATE 07

            Condutor: ${pessoa}
            
            Pontos na carteira: 02

            Valor da Multa: R$ 80,50`;
            document.getElementById('resultado').style.backgroundColor = 'yellow'
        }
    }
    else{
        document.getElementById('resultado').innerText = `Livre
        
        Liberar o Condutor ${pessoa}`;

        document.getElementById('resultado').style.backgroundColor = 'green';
    }
}

function condicao2(){

    let infratormax = Number((document.getElementById("infrator")).value)
    let maxvia = Number((document.getElementById("max")).value)
    let pessoa = String((document.getElementById('nome')).value)

    let result = maxvia * 20 / 100;
    let result2 = maxvia * 50 /100;

    if(infratormax > (maxvia + 7) && infratormax <= (maxvia + result)){
        document.getElementById('resultado').innerText = `Autuado
        
        Infração  Grave
        
        TRANSITAR EM VELOCIDADE SUPERIOR A MAXIMA PERMITIDA EM ATE 20
        
        Condutor: ${pessoa}

        Pontos na carteira: 04

        Valor da Multa: R$ 130,16`;

        document.getElementById('resultado').style.backgroundColor = 'lightblue';
    }
    else if(infratormax > (maxvia + result) && infratormax <= (maxvia + result2)){
        document.getElementById('resultado').innerText = `Autuado

        Infração Gravíssima

        TRANSITAR EM VELOCIDADE SUPERIOR A MAXIMA PERMITIDA EM MAIS DE 20 ATE 50 

        Condutor: ${pessoa}

        Pontos na carteira: 05

        Valor da Multa: R$ 195,23`;

        document.getElementById('resultado').style.backgroundColor = 'orange';
    }
}

function condicao3(){

    let infratormax = Number((document.getElementById("infrator")).value)
    let maxvia = Number((document.getElementById("max")).value)
    let pessoa = String((document.getElementById('nome')).value)

    let result = maxvia * 50 /100;

    if(infratormax > (maxvia + result)){
        document.getElementById('resultado').innerText= `Autuado

            Infração Gravíssima 
            
            Penalidade de suspensão do direito de dirigir
            
            Transitar em Velocidade Superior a Máxima Permitida em mais de 50 

            Condutor: ${pessoa}

            Pontos na carteira: 07
            
            Valor da Multa: R$ 880,41`;

        document.getElementById('resultado').style.backgroundColor = 'red'
    }
}