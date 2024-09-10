let toDoArray=[];


function Addera(){
   const inputElement= document.querySelector('.js-input');
   const name1=inputElement.value;
   console.log(name1);
   toDoArray.push(name1);
   console.log(toDoArray);
   //reset input
   inputElement.value='';
    
}

let toDoList=[];
function AdderaList(){
  let inputElement=document.querySelector('.js-display-input');
  let inputText=inputElement.value;
  console.log(inputText);
  toDoList.push(inputText);
  displayText();
  inputElement.value='';
  

}

function displayText(){
  let inputElement=document.querySelector('.js-display-input');
  let inputText=inputElement.value;
  document.querySelector('.js-show-massage').innerHTML= toDoList;

}
