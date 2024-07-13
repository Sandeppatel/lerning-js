//  --------------------- lecture number 24 ------------------------ (parenthicces)
// ++++++++++++++++++ Immediately Invoked function expression (IIFE) +++++++++++

//  iife -- >  jo funcation immidiatly excute ho jaye our globle scop se problem hoti hai kai var to jo globale scop ke jo variable hai
// ya dicleretion hai usko hatane ke liye hamane IIFE ka use kiya
//  function Invoked() {
//     console.log(`DB HELLO MORAL OFF THE STORRY`);
//  }
//  Invoked() //--> outuput -- DB HELLO MORAL OFF THE STORRY
 
// // yadi 2 parenthisece hai (funcation ki difinition)(excution call) to pahla 
//  (function Invoked() {
//          // named IIFE
//     console.log(`DB HELLO MORAL OFF THE STORRY`);
//  })();

//   ((name) => {
//     // not name IIFE
//     console.log(`welcom my hero ${name} `);
//   })("sandeep")

//  --------------------- lecture number 25 ------------------------ (parenthicces)
// ++++++++++++++++++ call stack  +++++++++++

// -------- javascript excution context--- interviw importent
// 1.) globle excution context
// 2.) funcation excution context
// 3.) eval excution context

//  { javacript } yah 2 phes me run hota hai 1.) memory creation phase
// 2.) excution phese

//   code 
// step 1 -- globle excution--  koi bhi code(chahe kitna bhi badaha ho) globle exution se run hota hai our this ke andar alocate kiya jata hai 
//  let val1 = 10
//  let val2  = 5
//  function addOne(val1 , val2) {
//     let total = val1 + val2
//     return total
//  }
//  step 2-- memory phase -
//  val1 --> undifined
//  val2 --> undifined
//  addOne --> difination
//  result1 --> undifined
//  reuslt2 --> undifined
//  let result1 = addOne(val1 , val2)
//  let result2 = addOne(10 , 2)

//   step 3. ) excution phase
// val1 <-- 10
// val2 <-- 10
// total (15) = 10 + 5;
// result1(15) <-- (10 + 5)
// result2(12) <-- (10 + 2)
//  addOne(result1)
//  addOne(result2)

//  ++++++ call stack +++

// function one() {
//     console.log("one");
//     three()
// }
// function two() {
//     console.log("two");
//     two()
// }
// function three() {
//     console.log("three");
//     one()
// }

//  --------------------- lecture number 26 ------------------------ (parenthicces)
// ++++++++++++++++++ fontrol flow  +++++++++++

//  ---------------if-----

// const oneGloe = true
// if (oneGloe) {
//     console.log("excuted");
// } 
// and comparision opreter < , > , <= , >= , != , === , !==
// const tempareture  =  50 
// if(tempareture > 40){
//     console.log(" lessthen is 40");
// }else
// {
// console.log(" greterthen then is 50");
// }
// const score  = 200
// if(score >100){
//     let power = "fly"
//     console.log(` user power ${power}`);
// }
// console.log(` user power ${power}`);

//  emplistit scop 
// const balense = 1000
// if (balense > 500) console.log("text"),console.log("text2");  // yah excute ho jata hai lekin company base se achha code nhi hai

// --------------switch ------------------

// const month = 4
// switch (month) {
//     case 1: 
//         console.log("janvary");
//         break;
//     case 2: 
//     console.log("farbary");
//          break;
//     case 3: 
//     console.log("march");
//          break;
//     default:
//         console.log("not a month");
//         break;
// }


// ============== truthy and falsi =======================

// const userEmail = "@sadndfaj23"
// if (userEmail) {
//     console.log(" yes is email");
// }
// else{
//     console.log("not this email");
// }


// const userEmai = ""
// if (userEmai) {
//     console.log(" yes is email");
// }
// else{
//     console.log("not this email");
// }
// falsy values

// --> false , 0 , -0 ,  bigInt 0n , "" , null , undefined , NaN , document.all   iske aalava truthy value hai

//  truthy value
// "0" , 'false' , " " , [] , { } , function(){}//emti funcation kahte hai

// const username = ""
// if (username.length === 0 ) {
//     console.log("arr is empty");
// }

// const emptyboj = {}
// if (Object.keys(emptyboj).length === 0 ) {
//     console.log("object is empty");
// }

//  nullish coalescing opreter  (??) : null undefined
// understaning ki kaise value ko print karta hai
//  let val1;
//   val1 = 5 ?? 10  
//   let val2  = null ?? 10
//   let val3  = undefined ?? 15
//   let val4  = undefined ??  15  ?? 50
 

//   console.log(val1); // output -- 5
//   console.log(val2); // output -- 10
//   console.log(val3); // output -- 15
//   console.log(val4); // output -- 15

//  --------ternary opreter--------------
//  condition ? true : false
//   const  iceTeaprice = 100
//   iceTeaprice <= 80 ? console.log("less then 80"): console.log("more then 80");;

// ++++++++++++++++ lecture 27 ++++++++++++++
// ===============loop (itretion)==============

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is the best number");
//     }
//     console.log(element);
// }

//  sari 1 to 10 table
// for (let i = 1; i <=10; i++) {
//     console.log(`outer loop value : ${i}`);
//     for (let j = 1; j <=10; j++) {
//         // console.log(`outer loop i ${i} , inner looop j ${j}`);
//         console.log( i + '*' + j + '=' + i*j);
//     }
    
// }

//  const myArr = ["sandeep " , "deepak" , "patel " , "nagnaudi" ]
//  console.log(myArr.length);
// for (let i = 0; i < myArr.length; i++) {
//     const element = myArr[i];
//     console.log(element);
// }

// ============== keyword loop ===========
// ------ two keyword break and continue------------

// for (let i = 1; i <=20; i++) {
//     if (i== 5) {
//         console.log(`detected 5`);
//         break;
//     }
//     console.log(`value is ${i}`);
// }

// for (let i = 1; i <=20; i++) {
//     if (i== 5) {
//         console.log(`detected 5`);
//         continue
//     }
//     console.log(`value is ${i}`);
// }

// ================== lecture 28 =====================
// ------------------while -------------------
// let i = 0
// while (i <= 10) {
//     console.log(` value of index  ${i}`);
//      i = i+2
// }

// let myArr  = ['flash' , "batman" , "superman"]
// let  arr =0
// while (arr <= myArr.length) {
//     console.log(`value is ${myArr[arr]}`);
//     arr = arr + 1;
// }

// ---------------- do while ---------------

// let score = 1
// do {
//     console.log(`score is ${score}`);
//     score++
// } while (score <= 10);

// +++++++++++++++++++++++++ lecture 29 +++++++++++++++++++++++
// ============= high order Array loop ===================
// ------------------- for-in and  forEach ------------------
// ["" , "" , ""]
// [{} , {} , {} ]

// const  arr = [1 , 2 , 3 , 4 , 5]
// for (const num in arr) {
//     console.log(num);
// }

// const greeting = "hello woled"
// for (const greet in greeting) {
//    console.log(`each char is ${greet}`);
// }

// maps ---  unic value ke liye jana jata hai

// const map = new Map()
// map.set('IN' ,  "india")
// map.set('USA' , "united states of America")
// map.set('Fr' , "france")

// console.log(map)
// for (const key in map) {
//     console.log(map[key]);
// }
//  output {'IN' => 'india', 'USA' => 'united states of America', 'Fr' => 'france'}

// const myObject = {
//     js : 'javascript',
//     cpp : 'c++',
//     rb : "ruby",
// }
// for (const key in myObject) {
// //    console.log(myObject[key]);
// console.log(`${key} shortcut : ${myObject[key]}`);
// }
// output me sare kise aa gye hai 

// const programing = ["js " , "eb " , "py" , " java" , "cpp"]

// console.log(programing.length);
// for (const key in programing) {
//     console.log(programing[key]);
// }

// const map = new Map()
// map.set('IN' ,  "india")
// map.set('USA' , "united states of America")
// map.set('Fr' , "france")

// for (const key in map) {
//     console.log(key);
// } 
//  Map ke andar itretion nhi kiya ja sakta hai
   

// =================== forEach loop array ke very most =============
//  call back funcation  me uske undar name nhi hota hai
// const coding =  ["js" , "ruby" ,  " java" , "c++" , " python"]
// coding.forEach(function (item) { // forEach
//    console.log(item); 
// })

// const coding =  ["js" , "ruby" ,  " java" , "c++" , " python"]
//  coding.forEach((item) =>{  // arow funcation
//     console.log(item);
//  })

// const coding =  ["js" , "ruby" ,  " java" , "c++" , " python"]
// function printMe(item) {
    //     console.log(item);
    // }
    // coding.forEach(printMe)
    
    // const coding =  ["js" , "ruby" ,  " java" , "c++" , " python"]  // arow funcation
    // coding.forEach( (item , index , arr)=> {
    //     console.log(item , index , arr);
    // })
    // output --> js 0 (5) ['js', 'ruby', ' java', 'c++', ' python']
    //  ruby 1 (5) ['js', 'ruby', ' java', 'c++', ' python']
    //   java 2 (5) ['js', 'ruby', ' java', 'c++', ' python']
    //  c++ 3 (5) ['js', 'ruby', ' java', 'c++', ' python']
    //   python 4 (5) ['js', 'ruby', ' java', 'c++', ' python']

//  const mycoding = [
//     {
//         languagename : "javascript",
//         sortco : "js",
//     },
//     {
//         languagename : "javascript",
//         sortco : "js",
//     },
//     {
//         languagename : "javascript",
//         sortco : "js",
//     },
//     {
//         languagename : "javascript",
//         sortco : "js",
//     }
//  ]
//  mycoding.forEach((item , index , arr) => {
//     console.log(item.languagename);
//     console.log(item , index ,  arr);
//  })

// +++++++++++++++++++++ lecture 30 +++++++++++++++++++++
// ================= filter map and reduce in javascript ==========

// var myarr = ["sandeep" , "pare" , " premila" , "neha"]

// myarr.forEach((item) => {
//     console.log(item);
// }) // yah code exucute hogya hai

//   isse yah  pata chalta hai forEach return me value nhi deta hai
/* const value =  myarr.forEach((...item) =>{
    console.log(item);
    return value
});
console.log(value); */


// ================ use filter =================
// const myname = [1 , 2 , 3 , 4 , 5 , 6, 7 ,8 , 9]

//  const value =  myname.filter((num) => num > 5 )
//  console.log(value);  // output --[5 , 6 , 7 ,8 , 9]

// const valuse =  myname.filter((items) =>  items == 5)
// console.log(valuse);   // [5]

// const valu =  myname.filter((sum) => {
//    return sum < 5
// })
// console.log(valu);  // []  {}->ye lagne ke bad me  output ek array[] deta hai  our value return nhi karta hai our yadi value print ke liye reuturn ka use karte hai
/*======== use forEach ============
const myArr =[1 , 2 , 3 , 4 , 5 , 6, 7 ,8 , 9]

const newArr = []
const theArr = []
myArr.forEach((num) =>{
    if (num <= 5) {
        newArr.push(num)
    }
    else{
        theArr.push(num)
    }
})
console.log(newArr);
console.log(theArr);  */
// ++++++++++++++ filter ++++++++++++
//  filtel ko kise kisi value me return karna hota hai  === truth and false ke liye kam karta hai
// note ==== yadi {} scop lagaya hai to return dena very importent ho jata hai
/*
const books = [
    {title :'book one' , genre : 'fiction' , publish : 2008, edition : 2004},
    {title :'book two' , genre : 'fiction' , publish : 1981, edition : 2004},
    {title :'book three' , genre : 'fiction' , publish : 1981, edition : 2004},
    {title :'book fore' , genre : 'fiction' , publish : 2004, edition : 2004},
    {title :'book five' , genre : 'fiction' , publish : 2004, edition : 2004},
    {title :'book six' , genre : 'fiction' , publish : 2004, edition : 2004},
    {title :'book seven' , genre : 'fiction' , publish : 2008, edition : 2004},
    {title :'book acte' , genre : 'fiction' , publish : 2008, edition : 2004},
]
const mybook = books.filter((num) => num.genre === 'fiction')
console.log(mybook);

const valu =  books.filter((gk) => {
  return  gk.publish > 2004
})
console.log(valu);

const result =  books.filter((gk) => gk.title >= 'book fore')
 console.log( result);
 */
// ------------------- use map -------------------
//  map  arr ho ya kisi bhi prakar ka number ho use  + - * and / ke liye use me late hai
  /* const myNumber = [1 , 2 , 3 , 4 ,5 ,6 ,7 ,8 ,9 ,10]

  const addNum =  myNumber.map( (num) => num  + 10)
  console.log(addNum);

 const value = myNumber.map((num) => {
   return  num + 10
  })
  console.log(value);
  */ 
//  ------------------- chain rool -----------------
/*
   const myNumber = [1 , 2 , 3 , 4 ,5 ,6 ,7 ,8 ,9 ,10]
const newArr = []
  const value =  myNumber
  .map((num) => num * 10)
  .map((num) => num +2)
   .filter((num) => num > 50)
   
  console.log(value);
*/
// ------------- Array.reduce() ------------
//reduse ka use hotlo ke bil ke liye kiya jata hai
/* 
const myNums = [ 1 , 2 ,3]
const myTotal  = myNums.reduce(function (acc , curentval) {
     console.log(`acumeleter is value ${acc} , acurentval ${curentval}`);
   return acc + curentval 
}, 0)
console.log(myTotal);
*/
// =============== and use reduse. arrow ==============
/*
const myNums = [ 1 , 2 ,3]

 const valu =  myNums.reduce((acc , cureent) => acc + cureent ,0)
  console.log(valu);
//  {scop}
 const value =  myNums.reduce((acc , cureent) => {
  return  acc + cureent 
 },3)
  console.log(value);
  */
/*
  const shopingcard = [
    {
     itemscord   : "js notes",
     price : 999,
    },
    {
     itemscord   : "ptthon",
     price : 1000,
    },
    {
     itemscord   : "c++",
     price : 99,
    },
    {
     itemscord   : "java",
     price : 39,
    }
  ]
 const pricetopay =  shopingcard.reduce((acc , item) => acc + item.price ,0)
  console.log(pricetopay);
  */
//   libriry ke liye use kiya jata hai


//  querySelector ka use kisi specific  key (input , li , ul , h1 ,  p , span , ) ke liye use hota hai
//  querySelectoyAll ka use kisi bhi div ya class (h1 ko ta target karte hai to class ke andar sabhi h1 target ho jayega) ko target karget karne ke use hota hai uske andar ke sare element target hota hai
/*
const parent = document.querySelector('.parent')
 console.log(parent);
 console.log(parent.children);
//  console.log(parent.children[1].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
    const element = parent.children[i].innerHTML;

    console.log(element);
}
*/
const parent = document.querySelector('.parent')

parent.children[1].style.color = "green"
console.log(parent.firstElementChild.innerHTML);
console.log(parent.lastElementChild.innerHTML);

 const day = document.querySelector('.day1')
 console.log(day.innerHTML);
 console.log(day.parentElement);   // parentElement use yadi childran target me hai to uska parent ko janne me kiya jata hai
 console.log(day.nextElementSibling.innerHTML);   // parentElement use yadi childran target me hai to uska parent ko janne me kiya jata hai
 console.log("NODES : ", parent.childNodes); // importent method
 console.log("NODES : ", parent.childNodes); // importent method
 