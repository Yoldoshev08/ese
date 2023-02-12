// ========================== var let const
// var name = "Tom";
// var name = "Jack";
// name = 'Tom'

// console.log(name);

// console.log(name);

// let age = 56;
// let age = 100;
// age = 101

// const year = 2018;
// console.log(year);

// for (let i = 1; i <= 10; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 0);
// }

/* ========================== arrow functions */
// function sayHello() {
//   console.log("Hello");
// }

// const sayHello = () => {
//   console.log("Hello");
// };

// const sayHello = () => console.log("Hello");

// const sayHello = (name) => console.log("Hello " + name);

// const sayHello = name => console.log("Hello " + name);

// const sayHello = (name, age) => console.log("Hello " + name + " " + age);

// sayHello("Harry", 25);

// function sayHello() {
//   console.log("Function: ", this);
// }

// const sayHello2 = () => console.log("Arrow function: ", this);
// function sayHello() {
//   // console.log("Function: ", this);

//   return this; // Object{}
// }

// const sayHello2 = () => {
//   // console.log("Arrow function: ", this);
//   return this; // {}
// };

// const f = sayHello();
// const a = sayHello2();

// console.log(f === a);

// =============== Recursive function

// function compileNumbers(){
//   let i = 10

//   while(i >= 1){
//     console.log(i);

//     i--
//   }

// }
// compileNumbers()

// function compiler(n){
//   if(n <= 0){
//     return
//   }
//   console.log(n);
//   return compiler(n - 1)
// }

// compiler(10)

/* ===================== spread rest*/
// const numbers = [1, 2, 3, 4, 5, 6, 7, "Hello"];

// // // console.log(...arr);

// function sum(a, b, c, ...asd) {
//   console.log(a + b);
//   console.log(asd);
// }
// sum(...numbers);

// function xczxc(a, b) // a = 5   b = 11 //  xczxc(a, b) //
// console.log('a = ' + b)

// function swap() {
//   let a = 5;
//   let b = 11;
// //   let c = a;

//   console.log("a = ", a);
//   console.log("b = ", b);

//   console.log("Swapping...");
//   a = b;
//   b = c;

//   console.log("a = ", a);
//   console.log("b = ", b);
// }

// swap();

/* =============== object */
// const person = {
//   name: "Tom",
//   age: 11,
//   year: 2012,
// };

// const {age, name, year} = person

// console.log(year);

// const arr = [1, 2, 4, 5, 6];

// const [a, b, c, ...asd] = arr

// console.log(asd);

// function sum(a = 0, b = 0) {
//   return a + b;
// }

// const summer1 = sum(7);

// console.log(summer1);

// ================ class
// Object => Number String
// function MonstrOptions(helth){ // object constructor ==>
//     this.helth = helth
// }

// const monstr1 = new MonstrOptions(100) // Object
// console.log(monstr1);

// class MonstrOptions {
//   helth = 100;
// }

// const monter1 = new MonstrOptions()
// console.log(monter1);

// class Person {
//   firstname = "";
//   age = 0;

//   constructor(name, age, surname) {
//     this.firstname = name;
//     this.age = age;

//     this.surname = surname;
//   }

//   walk = function () {
//     console.log("Walking...");
//   };

//   run = function () {
//     console.log("Running...");
//   };

//   eat = function () {
//     console.log("Eating...");
//   };

//   speak = function () {
//     console.log("Speaking...");
//   };
// }

// const messi = new Person("Messi", 36, "Leo");
// const ranaldo = new Person("Ranaldo", 38, "Cristiano");

// console.log(messi);
// console.log(ranaldo);

// class Animal {
//   run = (what, speed) => {
//     console.log(what + " Running... " + speed + "m/s");
//   };

//   eating = () => {
//     console.log("Eating...");
//   };

//   sleeping = () => {
//     console.log("Slepping...");
//   };
// }

// class MeetAnimal extends Animal {
//   hunting = () => {
//     console.log("Hunting...");
//   };

//   killer = () => {
//     console.log("Killing...");
//   };
// }

// class GrassAnimal extends Animal {
//   escape = () => {
//     console.log("Escaping...");
//   };
// }

// const lion = new MeetAnimal();
// const sheep = new GrassAnimal();

// lion.run("Lion", 100);
// sheep.run("Sheep", 20);




function numbers(x ,y){



let a = y;
let b = x;
console.log("a = " + a);
console.log("b = " + b);


}
   
numbers(2008, 2007)
