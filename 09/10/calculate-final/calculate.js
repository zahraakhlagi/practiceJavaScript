
let calculation=localStorage.getItem('calculation')||'';

function updateCalculation(value){
  calculation+=value;
 // console.log(calculation);
 displayCalculation();
  //save in localstorage
  localStorage.setItem('calculation',calculation);
}

function displayCalculation(){
  document.querySelector('.js-calculation').innerHTML=calculation;
}