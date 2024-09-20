let score=JSON.parse(localStorage.getItem('score'))|| {
  wins:0,
  losses:0,
  ties:0
};
updateScoreElement();
let isAutoPlaying=false;

let intervalId;

let autoButton=document.querySelector('.js-auto-btn');
autoButton.addEventListener('click',()=>{
  autoPlay();
});

function autoPlay(){
  if(!isAutoPlaying){
    intervalId= setInterval(()=>{ 
      let playerMove=pickComputerMove();
      playGame(playerMove);
      autoButton.innerHTML='Stop playing';
    },1000);
    isAutoPlaying=true;
  }else{
    clearInterval(intervalId);
    isAutoPlaying=false;
    autoButton.innerHTML='Auto Play';

  }
 
}

 const rockButton= document.querySelector('.js-button1');
 const paperButton=document.querySelector('.js-button2');
 const scissorsButton=document.querySelector('.js-button3');

 //add keydown to our game by using event
 document.body.addEventListener('keydown',(event)=>{
    if(event.key==='r'){
      playGame('rock');
    }else if(event.key==='p'){
      playGame('paper');
    }else if(event.key==='s'){
      playGame('scissors');
    }else if(event.key==='a'){
      autoPlay();
    }else if(event.key==='v'){
      event.preventDefault();
      confirmReset();
      console.log('backspace');   
    }
 });

 rockButton.addEventListener('click',()=> {
  playGame('rock');
 });
 paperButton.addEventListener('click',()=>{
  playGame('paper');
 });
 scissorsButton.addEventListener('click',()=>{
  playGame('scissors');
 });
function playGame(playerMove){
  const computerMove=pickComputerMove();
  let result='';

  if(playerMove ==='scissors'){
    if(computerMove==='rock'){
      result='You lose'
    }else if(computerMove==='paper'){
      result='You win';
    }else if(computerMove==='scissors'){
      result='Tie';
    }
  }else if(playerMove==='paper'){
    if(computerMove==='rock'){
      result='You win';
    }else if(computerMove==='paper'){
      result='Tie';
    }else if(computerMove==='scissors'){
      result='You lose';
    }
  }else if(playerMove==='rock'){
    if(computerMove==='rock'){
      result='Tie';
    }else if(computerMove==='paper'){
      result='You lose';
    }else if(computerMove==='scissors'){
      result='You win';
    }
  }

  if(result==='You win'){
    score.wins +=1;
  }else if(result==='You lose'){
    score.losses +=1;
  }else if(result==='Tie'){
    score.ties +=1;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();

  document.querySelector('.js-result').innerHTML=result;
  document.querySelector('.js-moves').innerHTML=`You
   <img src="images/${playerMove}.webp" class="move-icon">
   <img src="images/${computerMove}.webp" class="move-icon">
   Computer
  `;


}

 function updateScoreElement(){
  document.querySelector('.js-score')
    .innerHTML=`Wins:${score.wins},
                Losses:${score.losses},
                Ties:${score.ties}`;
 }


function pickComputerMove(){
  const randomNumber= Math.random();
  let computerMove='';

  if(randomNumber>=0 && randomNumber<1/3){
    computerMove='rock';
  }else if(randomNumber>=1/3 && randomNumber <2/3){
    computerMove='paper';
  }else if(randomNumber >=2/3 && randomNumber <1){
    computerMove='scissors';
  }
  return computerMove;
}

function confirmReset(){
  let confirmMessage='';
  let confirmText=document.querySelector('.confirm-message');
  
  const html= `

            <p>Are you sure you want to reset the score?</p>
            <button class="yes-button">Yes</button>
            <button class="no-button">No</button>
  `;
  confirmMessage+=html;
  confirmText.innerHTML= confirmMessage;

  let yesBtn= document.querySelector('.yes-button');
  let noBtn= document.querySelector('.no-button');

  yesBtn.addEventListener('click',()=>{
    resetScore();
    confirmText.innerHTML='';
  });
  
  noBtn.addEventListener('click',()=>{
    confirmText.innerHTML='';
  
  });
}




function resetScore(){
  score.wins=0;
  score.losses=0;
  score.ties=0;
  localStorage.removeItem('score');
  updateScoreElement();
}


let resetButton=document.querySelector('.js-reset');
resetButton.addEventListener('click',()=>{
  confirmReset();
 
});