

// names input
 
    let firstpname=prompt("Enter player 1 name");
  let secondpname=prompt("enter player 2 name");

 

  

  document.querySelector("#name--0").textContent=firstpname;
  document.querySelector("#name--1").textContent=secondpname;

let value = document.querySelectorAll(".score");

for (let i = 0; i <= 1; i++) {
  value[i].textContent = 0;
}
// document.querySelector(".dice").style.display="none";
let playing=true;
let diceEl = document.querySelector(".dice");
const btnroll = document.querySelector(".btn--roll");
let score=[0,0];
let currentscore = 0;
let activeplayer=0;
let player0El=document.querySelector("player--0");
let player1El=document.querySelector("player--1");
function switching1()
{
  let total = document.getElementById("current--0").textContent;
  //  let gtotal= document.getElementById("score--0").textContent = total;
    
    // document.getElementById("current--0").textContent = 0;
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentscore=0;

    activeplayer= activeplayer == 1 ? 0 : 1; 

  //  player0El.classList.toggle('player--active');
  //  player1El.classList.toggle('player--active');
   
    if(activeplayer==1)
    {
      // document.getElementById("score--0").textContent = gtotal;

      // document.getElementById("current--0").textContent = 0;

    // document.querySelector(".player--0").style.opacity = "30%";
    document.querySelector(".player--1").style.opacity = "100%";
     document.querySelector(".player--1").style.backgroundColor="rgba(255, 255, 255, 0.4)";
    document.querySelector(".player--0").style.backgroundColor="transparent";
    }
    else{
    //   document.getElementById("score--0").textContent = gtotal;
    document.querySelector(".player--0").style.backgroundColor="rgba(255, 255, 255, 0.4)";
    // document.getElementById("current--0").textContent = 0;
    document.querySelector(".player--0").style.opacity = "100%";
    document.querySelector(".player--1").style.opacity = "30%";

    }

}
// coading
diceEl.classList.add("hidden");

// lets make an event listner for the class bt--roll

btnroll.addEventListener("click", function () {
  // lets display the dice according to the rendome number
 if(playing)
 {
  let dice = Math.trunc(Math.random() * 6) + 1;
  let ndice = dice;
  diceEl.classList.remove("hidden");

  // diceEl.scr = `dice-${dice}.png`;
  diceEl.src = ` dice-${dice}.png `;

  if (dice !== 1) {
    //  document.querySelector("#current--0").textContent=dice;

    currentscore += dice;
    console.log(currentscore);
    document.getElementById(`current--${activeplayer}`).textContent = currentscore;
  } else {
    
    let total = document.getElementById("current--0").textContent;
  //  let gtotal= document.getElementById("score--0").textContent = total;
    
    // document.getElementById("current--0").textContent = 0;
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentscore=0;

    activeplayer= activeplayer == 1 ? 0 : 1; 

  //  player0El.classList.toggle('player--active');
  //  player1El.classList.toggle('player--active');
   
    if(activeplayer==1)
    {
      // document.getElementById("score--0").textContent = gtotal;

      // document.getElementById("current--0").textContent = 0;

    // document.querySelector(".player--0").style.opacity = "30%";
    document.querySelector(".player--1").style.opacity = "100%";
     document.querySelector(".player--1").style.backgroundColor="rgba(255, 255, 255, 0.4)";
    document.querySelector(".player--0").style.backgroundColor="transparent";
    }
    else{
    //   document.getElementById("score--0").textContent = gtotal;
    document.querySelector(".player--0").style.backgroundColor="rgba(255, 255, 255, 0.4)";
    // document.getElementById("current--0").textContent = 0;
    document.querySelector(".player--0").style.opacity = "100%";
    document.querySelector(".player--1").style.opacity = "30%";

    }
    
    //switching player
    // btnroll.ariaDisabled();
   
  }
}
});

document.querySelector(".btn--hold").addEventListener("click", function(){

  if(playing)
  {
  console.log(" the button hass beeen clicked hold button has been pressed");
 score[activeplayer]+=currentscore;
 
  // document.querySelector(`.current--${activeplayer}`).textContent= score[activeplayer];

  document.querySelector(`#score--${activeplayer}`).textContent = score[activeplayer];
 let lscore= document.querySelector(`#score--${activeplayer}`).textContent;

 
 if(lscore>=100)
 {
  
  let names=document.querySelector("#score--0").textContent;
   if(names>=100)
   {
    document.getElementById("overlayy").textContent= `The Winner Is player ${firstpname} `;

   }  
   else{
    document.getElementById("overlayy").textContent= `The Winner Is player ${secondpname} `;
   }

       document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
      //  document.querySelector()
       document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
       setInterval(() => {  
   document.getElementById("overlayy").style.display="block";
   setInterval(() => {
    location.reload();
   }, 3000);
   
   }, 2000);
    
   playing=false;
  }
 else{
  switching1();
 }
  }
});
document.querySelector(".btn--new").addEventListener("click",()=>{

  location.reload();
});
