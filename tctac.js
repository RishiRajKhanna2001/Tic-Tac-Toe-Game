let currentElement="X";

let gameState=["","","","","","","","",""];

let winner=document.getElementById('winner'); 

let winnerDeclared=false;

let winningCond=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    
];

function init() {
    let td=document.getElementsByTagName('td');

    for(let i=0;i<td.length;i++)
    {
        td[i].addEventListener('click',chance);
    }
}

function chance()
{
    let td=event.target;
    let index=td.getAttribute('index');

    if(td.innerHTML=="")
    {
    td.innerHTML=currentElement;
    gameState[index]=currentElement;
    checkWinner();
    checkDraw();
    changeCurrentElement();
    }
}

function checkWinner() {
 for (let i = 0; i < 8; i++) {
    let a=winningCond[i][0];
    let b=winningCond[i][1];
    let c=winningCond[i][2];
    
    if(gameState[a]==currentElement && gameState[b]==currentElement && gameState[c]==currentElement ){

       function changeColour(){
            let d=document.getElementById(a);
            let e=document.getElementById(b);
            let f=document.getElementById(c);
    
            d.style.backgroundColor="YellowGreen";
            e.style.backgroundColor="YellowGreen";
            f.style.backgroundColor="YellowGreen";
        }
        
        winner.innerHTML="Winner is : "+currentElement;
        changeColour();
        winnerDeclared=true;
        setTimeout(reMatch,10000);
    }
    
 }
}

function checkDraw() {
    if(!gameState.includes('') && winnerDeclared==false)
    {
        winner.innerHTML="It's a draw";
        setTimeout(reMatch,10000);
    }
}

function changeCurrentElement() {
    currentElement=currentElement=="X"?"O":"X";
}

function reMatch() {
   window.location.reload();
}

init();
