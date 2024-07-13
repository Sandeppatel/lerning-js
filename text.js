
// document.getElementById('owl').onclick = function(){
//     alert("owl clicked")
// }
//  attachEvent()
// jQuery  - on



//  const owls = document.getElementById('owl')
//  owls.addEventListener('click' , function () {
//     alert("owl clicked again")
//  })

// type , timestamp , defaultPrecented
// target , toelement , srcElement , currentTarget , 
// clientX , clientY , screenY ,  screenX
// altkey , ctrlkey , shiftkey , keyCode 


//  false and true likhane ka matlab jab  top to buttom kam karta hai and flase lekhne per buttom to top kam karta hai
/*
 const images = document.getElementById('images')
 images.addEventListener('click' , function(e){
    console.log("clicked inside the ul");
 },false)

 const indeas =  document.getElementById('indea')

 indeas.addEventListener('click' , function(e){
    console.log("indea cliked");
    e.stopPropagation()
 },false)

 document.getElementById('google').addEventListener('click' ,function(e){
    console.log("google clicked");
    e.preventDefault()  /// iske use  kisi bhi funcation ko na chalane ke liye kiya jata hai
    e.stopPropagation() // keval useke andar ka text chalega
 },false)
*/
// ===========click karu to gyab ho jaye write the program ============
/*
document.querySelector('#images').addEventListener('click' ,function(e){
    
    console.log(e.target.parentNode); // parentNod se parent salect hota hai
    let removeIt = e.target.parentNode // tagName ka use kar sakte hai tag ko dekhane ke
    removeIt.remove()  // type one click karke remove ke liye
})*/
// removeIt.parentNode.removeChild(removeIt)

/*
document.querySelector('#images').addEventListener('click' ,function(e){
    
    console.log(e.target.tagName); // parentNod se parent salect hota hai  tagName ka use kar sakte hai tag ko dekhane ke
    if(e.target.tagName == 'IMG'){
   console.log(e.target.id);
        let removeIt = e.target.parentNode 
        removeIt.remove()  // type one click karke remove ke liye
    }

})
*/

// ++++++++++++ lecture 37  38 ++++++++++
// ++++++++++ topic ascronus code +++++++++++++

