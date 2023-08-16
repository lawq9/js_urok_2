// let mySymb = Symbol();
// let mySymb2 = Symbol(); 

// console.log(mySymb === mySymb2);

// let worker = {
//  'name':'John',
//  'lastname':'Coner',
// [mySymb]: 'hello',
// sayHello: function(){
// console.log(`Hello!My name is ${this.name}`);
// }

// }
// console.log(worker.mySymb);

// for(let key in worker){
// console.log(worker [key]);
// }

// worker.sayHello=function(){
// console.log('Hello');
// }
//  worker.sayHello();
// *методы

// let mass = [1,2,34];
// let i = 0;
// for(let i = 0;i<mass.length; i++){
// console.log(mass[i]);
// }
// let fad = [3,5,9];
// let done = true;
// for(let i = 0; done; i++){
// if (fad[i]==undefined){

//     done = false;
//     break;
// }
// }
// console.log(fad)

// let red = [3,9, 7];
// let jord = true;
// let i = 0;
// while(jord){
// if (red[i]==undefined){
// jord = false;
// break;
// }
// console.log(red[i]);
// i++;
// }

// let array = {
//     name: "John",
//     lastname: "Larin",
//     age: 40,
//     method: function () {
//         console.log(this.name + " " + this.lastname + " " + this.age);
//     }
// };
// array.method();
// console.log(array.age);

// let final = array;
// console.log(final);

// final.superfinal = [145];
// console.log(final);
// console.log(array);

// let x;
// if(5>3){
// x=true;
// }else{
// x=false;
// }
// console.log(x);

// let z =(5>3);
// console.log(z);

// let s = () => 1 + 2;
// console.log(s(1 + 2));

// let jas = function (jose) {
//     console.log('GAME '+ jose + '!');
// }
// jas('OVER');

 let object = {
 lastname:'Faver',
 age:34,
 status: 'gamer',
 }
//  let clon ={};
//  for(let key in object){
//  clon[key]=object[key];

//  }
//  console.log(clon);

let newObj = Object.assign({}, object);
console.log(newObj);