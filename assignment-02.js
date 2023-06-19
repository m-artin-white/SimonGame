let color = [];
let player = [];
let incre;
let turn;
let pass;
let computerTurn;
let interval;
let on = false;
let running;
let num;
let num2;
let length = 200;
let counter=0;
let timeCheckVar;
let variable1;

//https://www.w3schools.com/jsref/met_document_queryselector.asp --> Link to how to use querySelector to select each css element and change it. 

const green = document.querySelector("#greenCircle");
const red = document.querySelector("#redCircle");
const yellow = document.querySelector("#yellowCircle");
const blue = document.querySelector("#blueCircle");
const startButton = document.querySelector("#but");


//https://www.w3schools.com/js/js_htmldom_eventlistener.asp Event listener to check whether the start button has been clicked, and if so it will start the game and change the 
//the color of the circle to green
startButton.addEventListener('click',(event)=>
{
    if(!on)
    {
        document.getElementById("littleCircle").style.backgroundColor="green";
        on = true;
        setTimeout(play,3000);
    }
})

//https://www.w3schools.com/JSREF/met_win_setinterval.asp Set interval code used from this website, used to keep the colors flashing until the interval is cleared
//.push pushes my sequence into the color array, which is used to keep track of whether the player is selecting colors in order.
//https://www.w3schools.com/js/js_random.asp random function
function play(){
    running = false;
    color = [];
    player =[];
    incre = 0;
    interval = 0;
    turn = 1;
    document.getElementById("curr").value="00";
    pass = true;
    for(var i = 0; i < 50; i++)
    {
        color.push(Math.floor(Math.random()*4)+1)
    }

    computerTurn = true;

    interval = setInterval(gameTurn, 800);
}


// set timeout function --> https://www.w3schools.com/jsref/met_win_settimeout.asp
function gameTurn(){
    on = false;

    if(incre == turn)
    {
        clearInterval(interval);
        computerTurn = false;
        clearColor();
        on = true;
        variable1 = setTimeout(endgame, 5000);
    }

    if(computerTurn)
    {
        if(player.length >= 5)
        {
            length = 100;
        }

        else if(player.length >= 9)
        {
            length = 50;
        }

        else if(player.length >= 13)
        {
            length = 25;
        }
        clearColor();
        setTimeout(()=>{
            if(color[incre]==1) greenFunction();
            if(color[incre]==2) redFunction();
            if(color[incre]==3) yellowFunction();
            if(color[incre]==4) blueFunction();
            incre++;
        },length);

    }

}

//functions to display colors on circles
function greenFunction(){
    document.getElementById("greenCircle").style.backgroundColor="lightgreen";
}

function redFunction(){
    document.getElementById("redCircle").style.backgroundColor="tomato";
}

function yellowFunction(){
    document.getElementById("yellowCircle").style.backgroundColor="lightyellow";
}

function blueFunction(){
    document.getElementById("blueCircle").style.backgroundColor="lightblue";
}

//resets the color of the circle once it blinks
function clearColor(){
    document.getElementById("greenCircle").style.backgroundColor="darkgreen";
    document.getElementById("redCircle").style.backgroundColor="darkred";
    document.getElementById("yellowCircle").style.backgroundColor="goldenrod";
    document.getElementById("blueCircle").style.backgroundColor="darkblue";
}

//Pushes the players sequence onto the player array, and then calls a check function to make sure the sequences still match
green.addEventListener('click',(event)=>{ if(on)
    {
        player.push(1);
        check();
        greenFunction();
        clearInterval(variable1);

        if(!running)
        {
            setTimeout(()=>{

                clearColor();
        },300)
        }
    }
})


red.addEventListener('click',(event)=>{ if(on)
    {

        player.push(2);
        check();
        redFunction();
        if(!running){
            setTimeout(()=>{
                clearColor();
            },300)
        }
    }
})

yellow.addEventListener('click',(event)=>{ if(on){
        player.push(3);
        check();
        yellowFunction();
        if(!running)
        {
            setTimeout(()=>{
            clearColor();
        },300)
        }
    }
})

blue.addEventListener('click',(event)=>{ if(on){
        
        player.push(4);
        check();
        blueFunction();

        if(!running)
        {
            setTimeout(()=>{
                clearColor();
            },300)
        }
    }
})

function check(){

   if(player[player.length-1]!== color[player.length-1])
   {
        pass = false;
   }

   if(pass == false )
   {
        increColor();
        endgame();
   }

   if(turn == player.length && pass && !running)
   {
    clearInterval(variable1);
    turn++;
    player =[];
    computerTurn=true;
    incre = 0;
    document.getElementById("curr").value++;
    interval = setInterval(gameTurn,800);
    timeCheckVar=false;
   }
}

function increColor(){
    
    document.getElementById("greenCircle").style.backgroundColor="lightgreen";
    document.getElementById("redCircle").style.backgroundColor="tomato";
    document.getElementById("yellowCircle").style.backgroundColor="lightyellow";
    document.getElementById("blueCircle").style.backgroundColor="lightblue";
   
}

//endgame function used to stop the game at a certain point
//flashes the cicrles 5 times simultaneously if the game ends

function endgame(){ 

    let test2=0;
    let test = setInterval(function(){
    if(test2%2==0)
    {
        increColor();
    }
    else{
        clearColor();
    }
    test2++;
    if(test2==10)
    {
        clearInterval(test);
    }

    },500);

    clearColor();

    num = document.getElementById("curr").value;
    num2 = document.getElementById("high").value;
    if(num>num2)
    {
        document.getElementById("high").value=num;
    }
    document.getElementById("curr").value="00";


    document.getElementById("littleCircle").style.backgroundColor="red";
    color = [];
    player = [];
    incre;
    turn;
    pass;
    computerTurn;
    interval;
    on = false;
    running;

}



