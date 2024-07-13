// +++++++++++++++lecture 33 ++++++++++++++

//  const h1 = document.createElement("h1")
//  console.log(h1);
//  h1.className = "main"
//  h1.id = "next"

/*
for (let i = 0; i <5; i++) {
    
      const div = document.createElement("div")
       console.log(div);
       div.className = "main"
       div.id = Math.round(Math.random() * 10 * 1)
      //  div.className = Math.round(Math.random() * 10 * 1)
       div.setAttribute("title", "genrated title")
       div.style.backgroundColor = "blue"
       div.style.padding = "10px"
      //  div.innerText = "sandeep our promod"
        
        const addText = document.createTextNode("moral of story")
        div.appendChild(addText)
        document.body.appendChild(div)
    
  }
*/

// ======================== lecture 34 ==========
/*
// method 1.)
 function addLanguage(langName){
     const li = document.createElement("li")
     li.innerHTML = `${langName}`
     document.querySelector('.language').appendChild(li)
 }
 addLanguage("python")
 addLanguage("javascript")*/
// 

// method 2.)
function add(langName) {
 const li  =    document.createElement("li")
 li.innerHTML = `${langName}`
 document.querySelector(".language")
 .appendChild(li)

}
add("python")
add("java")
 
// method 3.)
function addopLnanguage(langName){
  const li =  document.createElement("li")
  const addText  = document.createTextNode(langName)
  li.appendChild(addText)
  document.querySelector('.language').appendChild(li)
}
addopLnanguage("c++")


//  value eddit  use value ke sthan par newli add hojayega
const second =  document.querySelector("li:nth-child(2)")
console.log(second);
const newli = document.createElement('li')
newli.textContent = "Mogo"
second.replaceWith(newli)

// edit   outerHTML ka use use element ko replece kardega
 const first  = document.querySelector("li:first-child")
 first.outerHTML = '<li>TypeScript</li>'


//  remove

 const remov = document.querySelector("li:last-child")
 remov.remove()