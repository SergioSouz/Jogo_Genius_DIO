let order = [];
let clickedOrder = [];
let score = 0;
// 0 - verde 
// 1 - vermelho
// 2 - amarelo
// 3 - azul




const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');


let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] =  colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        ligntColor(elementColor, Number(i) + 1);
    }
    console.log('shuffleOrder ok ');
}

let ligntColor =  (element, number) =>{
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout( () => {
        element.classList.remove ('selected');
    });
    console.log('ligntColor ok ');
    
}


let checkOrder = () => {
    for (let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if ( clickedOrder.length == order.length){
        alert(`Pontuação:  ${score}\n Você acertou! Iniciando o proximo nivel!`);
        nextLevel();
    }
    console.log('checkOrder ok ');
    
}


let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() =>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
    console.log('click ok ');
}

let createColorElement = (color) => {
    if (color == 0 ){
        return green;
    }else if (color == 1 ){
        return red;
    }else if (color == 2 ){
        return yellow;
    }else if (color == 3){
        return blue;
    }

    console.log('createColorElement ok ');

}

let nextLevel = () =>{
    score ++;
    shuffleOrder();

    console.log('nextLevel ok ');
}


let gameOver = () =>{
    alert(`Pontução: ${score} \n Você Perdeu o jogo!\n Clique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
    console.log('gameOver ok ');
}

let playGame = () => {
    alert('Bem vindo ao Genesis Iniciando novo Jogo!');
    score = 0;

    nextLevel();
    console.log(" playGame OK");
}


green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();