/*CODIGO IRIA GABRIELA */
import "./style.css";

window.onload = () => {
  
  let randomNumber = Math.random() * 10;
  document.querySelector('#the-excuse').innerHTML = randomNumber
  console.log("Hello Rigo from the console!" +randomNumber);
};
let generateExcuse = () => {

  let pronoun = [];
  let subject = ['joger','racoon','dog','driver', 'comedian','pincone'];
  let action = ['took my','threw my','yelled at my', 'stole my', 'bit my'];
  let possetion = ['homework','toe','shoe'];
  let where = ['on the street','in my house','in my drive way'];
  

  let proIndx = Math.floor(Math.random () * pronoun.length);
  let subjIndx = Math.floor(Math.random () * subject.length);
  let actIndx = Math.floor(Math.random () * action.length);
  let possetIndx = Math.floor(Math.random () * possetion.length);
  let whereIndex = Math.floor(Math.random () * where.length);
  
  return pronoun[proIndx]  +''+ action[actIndx] +''+ possetion[possetIndx]+''+ where[whereIndex];
};