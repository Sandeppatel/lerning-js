// ++++++++++++++ objects in depth +++++++++++++++++
// -------------------lecture 16--------------------

// singleton

// object literals

// const jsUser = {
//     name  :  "sandeep",
//     age : 20,
//     contect : 2432,
//     location : "jaipur",
//     email : "sandeeppatel243@",
//     isLoggedIn : false,
//     LastLoginDay : ["monday" , "saturday"]
// }

//  target karne ka type 1
// console.log(jsUser.email);

// // type 2
// console.log(jsUser["email"]);


// const mySym  =  Symbol("key1")
// const Array = {
//     "my name" : "sandeep patel",
//      age  : 25,
//      location : "bhopal",
   
//      [mySym ]:  "mykey1",
//       email : "snadepeu@133",
// }
// type 3
// console.log(Array["my name"]);
// console.log(Array["my name"] , Array.age, Array.location);


// //  niche ke 3 pe 
// console.log(Array.mySym);  //interwiv  not stisfy

// console.log(typeof Array.mySym); // interwiv  not stisfy

// console.log(Array[mySym]);  // interwiv stisfy

// Array.email = "deepakpahfj@123"
// Object.freeze(Array) // use freeze
// Array.email = "sandeeppatel@2132.com"
// console.log(Array);

// Array.greeting = function(){
//     console.log("heool");
// }
// console.log(Array.greeting());


// ++++++++++++++ objects +++++++++++++++++
// -------------------lecture 17--------------------

//  ye dono same hai
//1) const tinder = new Object()  // singleton object

// const tinder = {} //2) non singleton object

// tinder.id = "224sdf"
// tinder.name = "sandeep"
// tinder.location = "bhopal"

// console.log(tinder);//output-> {id: '224sdf', name: 'sandeep', location: 'bhopal'}

// const regularUser = {
//     email : "sandeep909393@hds",
//     name : "sandee",
//     fullname : {
//         userfullname : {
//             firstname : "sandeep",
//             lastname  : "patel",
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.adderss{}.name); // galat hai

// const users =  [
//     {
//         id : 1,
//         email : "sansee@123",
//     },
//     {
//         id : 1,
//         email : "sansee@123",
//     },
//     {
//         id : 1,
//         email : "sansee@123",
//     },
//     {
//         id : 1,
//         email : "sansee@123",
//     },
//     {
//         id : 1,
//         email : "sansee@123",
//     }
// ]
// console.log(users[1].email)  // sansee@123
// console.log(regularUser) // {email: 'sandeep909393@hds', name: 'sandee', fullname: {…}}

// // mathode
// console.log(Object.keys(regularUser));  // ['email', 'name', 'fullname']
// console.log(Object.values(regularUser)); // 'sandeep909393@hds', 'sandee', {…}]
// console.log(Object.entries(regularUser)); // yah volue dikhen ke liye use me aata hai

// console.log(regularUser.hasOwnProperty('name')); //  iska use proparty chech karne me hota hai ki proparty avaleval hai ya nhi jusko output ture and false dita hai

// ++++++++++++++ objects de-structure +++++++++++++++++
// -------------------lecture 18--------------------

//  object distructure iska use react me kiya jata hai
const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "sandeep",
}
console.log(course.courseInstructor);
const {courseInstructor : instra} = course // instra to is tarah se chenj kiya ja sakta hai
console.log(instra);

// const local = { // api
//     name : "san",
//     coursename : "js in hindi",
//     price : "free",
// }

[
    {},
    {},
    {},
]


// +++++++++++++++ lecture 19 20 +++++++++++++++++
// ------------------- funcation ---------------


// function myKey(){
//     console.log("s");
// console.log("a");
// console.log("n");
// console.log("d");
// console.log("e");
// console.log("e");
// console.log("p");
// }
// myKey()
// mykey  yadi itna bus likhana refrencs kahlata hai

//  jo input(variabel) dete hai  
// function addTownumber(num1 , num2) {
//      console.log(num1 + num2) ; 
// }

//  jo value dete hai ya initialies karte argument kahlata hai
// jo call karate hai argument kahlata hai
// addTownumber(3 , 4) //7
// // addTownumber(3 , "2")  // 32
// addTownumber(3 , null)


// const result  = addTownumber(2 , 5)
// console.log(result);  // undifind interwiv q

// tarika 1
// function addTwonumber(num1  , num2){
//     let result =  num1 + num2
//     console.log("sandeep");
//     return result;
// }

// const result = addTwonumber(4 , 5)
// console.log("result : " , result);


//  tepy two
// function addTwonumber(num1  , num2){
//     return num1 + num2
// }

//  const result =  addTwonumber(4 , 5)
// console.log("result : " , result);

// 4.) funcation paramiter and agument ke type 

// function logicArgument(username){
//      return `${username} just like that`
// }
// console.log(logicArgument("sandeep")) // sandeep just like that 
// console.log(logicArgument("")) // jsut like that 
// console.log(logicArgument()) // undifind just like that

//  kuchh is tarah ka bhi
// function logicArgument(username){
//     if(!username){
//         console.log(" plese enter the username ");
//     }
//      return `${username} just like that`
// }

// console.log(logicArgument("sandeep")) // undifind just like that
// console.log(logicArgument()) // undifind just like that


// function logicArgument(username = " sam"){ // username me value innisilize hai to if condition nhi chalegi
//     if(!username){
//         console.log(" plese enter the username ");
//     }
//      return `${username} just like that`
// }

// console.log(logicArgument("sandeep")) // undifind just like that
// console.log(logicArgument()) // undifind just like that


// function arguMent(...num1 ){ // ... isi ko hi  rest opreter our sprede opreter bola jata hai
//     return num1;

// }
// console.log(arguMent(2 , 3 ,4   ,5 ))
// console.log(arguMent(2 , 3 ,4 , 6 , 5 , 2 , 6  ,5 ))


// function arguMent( val1 , val2,  ...num1 ){ // isme val1 =  2 and val2 = 3 pass ho gya haiour array me uske aalva chala gya hai
//     return num1;

// }
// console.log(arguMent(2 , 3 ,4   ,5 )) // [ 4 , 5 ]
// console.log(arguMent(2 , 3 ,4 , 6 , 5 , 2 , 6  ,5 ))

//  ek object ko funcation me kaise lete hai  .. very importebt course // type 1 object ko pass karne ka tarika
// const user = {
//     name :  "sandeep ",
//     pata  : " shahdol" ,
//     email : "sandeep234@2234",
//     id : 232434,
//     prices : 199
// }

// function useOfobject(anyObject) {
//     console.log(`name is a : ${user.name} and id : ${user.id} and prices : ${user.prices}`);
// }
// useOfobject(user)


// const myNewNumber = [200 , 300 , 400 , 500]

// function nameOdd(anyObject) {
//     return anyObject[0]
// }
// console.log(nameOdd(myNewNumber));
// console.log(nameOdd([20]));



// +++++++++++++++ lecture 21 +++++++++++++++++
// ------------------- global and local scop ---------------

// {} carlibrises ko hi scop  kahte hai
// global and local scop in javascript
// var c = 300
// if(true){
//     let a  = 10
//     const c = 30
//     var b = 20 
// }
// console.log(a);
// console.log(c);
// console.log(b);
// let a =60
// const d = 80 
// if(true){
//     let a= 30
//     const d =40
//     console.log( " INNER ",a);
//     console.log( " INNER ",d); // black scop
// }
// // globle scop
// console.log(a);
// console.log(d);

//var  let and const -->  var scop->{} ke andar our bahar bhi kam karta hai our let our const  scop ke andar kam karta hai {scop} ->bahar  not difined  ho jata hai  
// and bahar kam nhi karta hai  let and const ko print karne ke liye consle.log ka use scop ke andar karte hai

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// +++++++++++++++ lecture 22 +++++++++++++++++
// ------------------- scope level mini hosting ---------------

// imporent point funcation
// function one(){
//     const username = "sandeep"
//     function two() {
//         const chanal = "youtub"
//         console.log(username);
//     }
//     // console.log(chanal);
//         two()
// }
// one()


//  importent point if
// if (true) {
//     const username = "sandeep"
//     if (username === "sandeep") {
//         const website = " youtub"
//         console.log(username + website);
//     }
//     // console.log(website);  // yah arrar isliye hai kyoki black scop  eccese nhi ho sakta ---> website ka scop yaha pe nhi hai
// }
// console.log(username);  // yah arrar isliye hai kyoki black scop  eccese nhi ho sakta ---> website ka scop yaha pe nhi hai

// +++++++++++++++ interesting type funcation+++++++++++++++++++++++++

//1.) funcation statment
// function addone(num) {
//     return num + 1;
// }
// addone(4)
//  addone nhi chalega kyoki return pahle hi overwrite kar dega(return ho jayega )  our niche ka nhi padega output kuchh nhi hoga

// console.log(addone(4)) // yah output -- > 5
// function addone(num) {
//     return num + 1;
// }

//2.) funcation expretion kahte hai
// const myFuncation =  function(number) {
//     return number +1 
// }
// myFuncation(5) // yaha bhi return ho jayega main kuchh bhi print nhi karaya

//  yahi hosting ---> hosting jaha pe excution contest banta hai ki aap dicleration se pahle use nhi kar sakte yah funcation expretion me hota hai
// myFuncation(5) // but arrar de raha hai kyoki yaha pe dicleyar karne ke bad ek varible me hold kar diya hai
// const myFuncation =  function(number) {
//     return number +1 
// }

// ++++++++++++++ this keyword ++++++++++++

//  ---> use this
// const user = { 
//     username : "sandeep",
//     price : 999,
//    welcome :  function(params) {
//         console.log(`${this.username} , welcome to website`);
//     }
// }
// console.log(user.username)

// user.welcome()
// user.username = "sam"
// user.welcome()  // output --> sam welcome to website
// console.log(this);


// function nameOdd() {
//     let username = "sandeep"
//     console.log(this.username);
// }
// nameOdd()  // output {}

//  arow funcation
// santex  () => {} -- exampale 1
//  const chai = () => {
//     let username = "hitesh"
//     console.log(this);
// }
// chai() // output --> {} // our isme bhi this use kar sakte hai

//  example 2
//   const AddTwo = (num1 , num2) => {
//     return num1 + num2 
//  }
 
//  console.log(addTwo(4  , 6))

//  emplisit -->  jab aap return keyword use karte hai
//   const addTwo =  (num1 , num2) => num1 + num2
//   const addTo =  (num1 , num2) =>  ( num1 + num2 )
//   console.log(addTwo(3 ,5)) // 8

//   const myArr = [2 ,3  , 5]
// //   santex 1.>
//   myArr.forEach(function (params) {
    
//   })
// //   santex 2.>
// myArr.forEach(() =>())


