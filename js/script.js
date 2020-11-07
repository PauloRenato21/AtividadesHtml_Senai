window.addEventListener('load', cores);

document.getElementById('red').addEventListener('input', cores)
document.getElementById('green').addEventListener('input', cores)
document.getElementById('blue').addEventListener('input', cores)

function cores(){
    let red = Number((document.querySelector('#red').value))
    let green =  Number((document.querySelector('#green').value))
    let blue =  Number((document.querySelector('#blue').value))

    const rgb = "Rgb("+ red +", "+ green +", "+ blue +")";

    document.querySelector('#resultado').value = rgb;

    const resul = document.getElementById('resultado')
    resul.style.backgroundColor = rgb;
}