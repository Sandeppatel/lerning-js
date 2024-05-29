//  basic knowllege const var and let 
// const accountId = 1234
// var accountEmail = " sandep122@12 "
// let accountPassword  = " 2222 "
// var accountCity = " bhopal "
//  let accountState; // undifind value



// //  accountId = 1498
//  accountEmail = " deepak122@12 "
//  accountPassword  = " aaa "
//  accountCity = " jablpur "

/*
prefer not to use var
because of issue in scope and functional scope
*/

// console.log(accountId);
// console.log([ accountEmail , accountPassword , accountCity , accountState]);



// "use strict ".replace; //treat aal js code as newer version 
//  alert(3 + 3) // we are using nodejs , not braowser

// let name = "sandeep "
// let age = 18 
// let isLoggedIn = false
 
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false


// var name = 345
// console.log(typeof undefined);// undefined
// console.log(typeof null);// object
//  null  // manli nall ek object hai jo js me chalene per object ans me aata hai


// lecture number 6:

let score = "33"  // " 123asd" , null , undifind ,  true , false


console.log(typeof score); // string
console.log(typeof score); // string

 let valueInNumber = Number(score)
 console.log(typeof valueInNumber); //number
 console.log(valueInNumber); // NaN

// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0

let isLoggedIn  = 1 ;// number 0 lene per  output false aata hai
let booleanIsLggedIn = Boolean(isLoggedIn)
console.log(booleanIsLggedIn);  // output - true

let isLogged  = "sandeep";
let booleanIsLgged = Boolean(isLogged)
console.log(booleanIsLgged);  // output - true

let sumNumber = 33;
let stringNumber = stringNumber(sumNumber)
console.log(stringNumber);


// lexture 7  topic number system 
// ************* operation ***********

let value = 3;
let nagValue = -value;
console.log(nagValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);

let str1 = " hello ";
let str2 = " sandeep ";
let str3 = str1 + str2;
console.log(str3);  // hello sandeep

console.log("1" + 2); // 12
console.log(1 + "2");  // 12
console.log("2 " + "4"); // 2 , 4
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2");  // 32
 console.log( (3+4) *  5 % 3);  // 2


 console.log(+true);  // 1
 console.log(+ "");  // 0
 let num1 , num2 , num3 , num4 
 num1 = num2 = num3 = num4 = 2+2

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);


// lexture 8  topic number system 
// ************* comparision ***********


console.log(2>1); //true
console.log(2==1); // false
console.log(2<2); // false
console.log(2<1);  // false

console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0);  // false
console.log(null >= 0);  // true
console.log(null < 0);  // false

console.log(undefined > 0); // false
console.log(undefined == 0);  // false
console.log(undefined >= 0);  // false
console.log(undefined < 0);  // false

console.log("2" === 2); // false


// *********** data type of javascript summry*********
// ___________________lecture 9__________________________________________

//  primitive
//  7 type : string , number , boolean , null ,undegined , symbol, bigInt

//  const score =100 // number 
//  const scoreValue = 100.3 // boolean
   
//   const isIn = false
//   const outTemp = null
//   let userFmail;   // undifined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
//  javascript ek daynamicly type hai


 const bigNumber = 2344425n

//  refrence ( non primitive)
// []-array , {}-object , ()-funcation

 const heros = ["shaktiman" , "naagraj" , "doga"];

 let myObj = {
    name: "sandeep",
    age: 18,
 }

 console.log(myObj); // name : 'sandeep',  age : 18

//   funcation
   const  myFuncation = function(value){
        console.log(value);
   }
 console.log("hello word");
 let outSide =  null;
 console.log(typeof outSide);
 console.log(typeof myFuncation);


//  ************ stack and heap memory************
//  ___________________lecture 10_______________________

//  stack (primitive ) , heap (non primitive / rifrence)

//  let anotherName = myTubname;
//  anotherName = "excellence coder school ";

//  console.log(myTubname);
//  console.log(anotherName);
 const userOne = {
    email: " sandeeppatel.gmail.com",
    upi: " user@ybl ",
 }

 let userTwo = userOne

 userTwo.email = " promodpatel@.com"

 console.log(userOne.email);
 console.log(userTwo.email);


//  ************ String ************
//  ___________________lecture 11_______________________

 const name = "hitesh"
const  repoCount = 60
// `` stet inter poletion
console.log(name + repoCount + "20"); // hitesh6020
 console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
//  output- hello my name is hitesh and my repo count is 60

const gameName = new String('hiteshhc')

 console.log(gameName[0]); //h
 console.log(gameName.__proto__); //String {'', anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …}

 console.log(gameName.length);  //8 
 console.log(gameName.toUpperCase());  //HITESHHC
 console.log(gameName.charAt(2));  // t
 console.log(gameName.indexOf('t'));  //2

const newString = gameName.substring(0, 4);
console.log(newString); // hite

const anotherString = gameName.slice(-8, 4);
console.log(anotherString); //hite

const newStringOne = " sandeep  "
 console.log(newStringOne); // ...sandeep...
 console.log(newStringOne.trim()); // sandeep -no space

 const url  = "https://sandeep.com/hitesh%20choudhary"
console.log(url.replace('%20' , '-')); //https://sandeep.com/hitesh-choudhary

console.log(url.includes('hitesh')) // ture
console.log(url.includes('sundar')) // false

console.log(gameName.split('-')); // ' sandeep'



// ************ Number & math ************
//  ___________________lecture 12_______________________

// ++++++++++++++ number ++++++++++++++

const scor = 400
console.log(score); //400 

const balence = new Number(100)
console.log(balence); //number :{ 100}

console.log(balence.toString()); // 100
console.log(balence.toString().length); //3


console.log(balence.toFixed(2)); //100.00

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(5)); // yah string proparty value ke anusar number print karta hai output= 23.89 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // 10, 00, 000


// +++++++++++++++ math +++++++++++++++++
// ---------------- lecture 12-------------------

console.log(Math);  // bs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
console.log(Math.abs(4)); //4
console.log(Math.round(4.2)); // 4
console.log(Math.ceil(4.3)); // 5
console.log(Math.floor(3.9)); //3
console.log(Math.min(2 , 5, 1 ,6 ,2)); //1
console.log(Math.max(4 , 3 , 6 , 8 ,2 )); // 8

console.log(Math.random()); // math.random ki value hamesha 0 ya 1 aata hai 
console.log(Math.random()*10+1);
console.log(Math.random()*10+1);

const min = 10;
const max = 20;
console.log(Math.random()*(max-min+1));
console.log(Math.random()*(max-min+1));
console.log(Math.floor(Math.random()*(max-min+1)+10)); // importent line



// ************ date time ************
//  ___________________lecture 13_______________________

// let myDate = new Date()
// console.log(myDate.toString());  //Thu May 02 2024 17:06:44 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString()); //2024-05-02T11:37:15.819Z   
// console.log(myDate.toUTCString()); //Thu, 02 May 2024 11:37:31 GMT
// console.log(typeof myDate); // object
// console.log(myDate.toLocaleDateString());  //  2/5/2024
// console.log(myDate.toTimeString()); //  17:08:06 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString());  //  2/5/2024, 5:08:18 pm
// console.log(myDate.toDateString());  // Thu May 02 2024

// let myCreatedDate = new Date(2023 , 0 , 23)
// console.log(myCreatedDate.toDateString());  //  Mon Jan 23 2023


// let newDate = new Date("2023-01-14")
// console.log(newDate.toLocaleDateString()); //  14/01/2023

// ************ array  ************
//  ___________________lecture 14_______________________


// const myArr = [1 , 1 , 2 , 3 , 4 ,5]
// console.log(myArr[4]);

// const myHero = ["sandeep" , "pradip" , " neha " , " naresh " ,  " umesh "]
// console.log(myHero[3])

// const myArr2 =  new Number(1 , 2 , 3 ,4 ,5)
// console.log(myArr2[1]);

// // array mathods posh and pop
// myArr.push(6)
// myArr.push(7)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// //  unshift and shift
// myArr.unshift(6)
// myArr.unshift(9)
// console.log(myArr);


// myArr.shift()
// console.log(myArr);

// //  arr methods
// console.log(myArr.includes(5));
// console.log(myArr.indexOf(5));


// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);
// console.log(typeof newArr);

// slice and splice

// const newarray = [1 , 2 , 3 , 4 , 5]
// console.log("A" , newarray);

// const myn1 = newarray.slice(3 , 5)

// console.log(myn1);
// console.log("B" , newarray);

// const myn2 = newarray.splice(1 , 3)
// console.log("C" , newarray);
// console.log(myn2);

// ************ array funcation  ************
//  ___________________lecture 15_______________________



const myArr = ["ramesh", " mahesh ", "nithsh"]
const dc = ["golu", "molu", "lala"]

//  type   1 marg karne ka tarika

// myArr.push(...dc)
// console.log(myArr);

//  type 2

// const concat =  myArr.concat(dc)
// console.log(concat);

//  type 3 
// yah ek spred oprater kahlata hai

// const newArr = [...myArr , ...dc]
// console.log(newArr);

const newArr = [1 , 2 , 3 ,  [4 , 5 , 6], 7 ,[3 , 4 ,[3, 6, 7]]]
const realArr  =  newArr.flat(Infinity)
console.log(realArr);


// console.log(Array.isArray("sandeep"))
// console.log(Array.from("sandeep"));

console.log(Array.isArray("sandep"))
console.log(Array.from("sandep"))
console.log(Array.from({name :  "sandeep"}))  // intresting array interwev


let scror1 = 100
let scror2 = 200
let scror3 = 300

console.log(Array.of(scror1 , scror2 , scror3));