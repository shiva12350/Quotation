const cont=document.querySelector(".container")
const content=document.querySelector(".content")

function quotes(){
fetch("https://api.quotable.io/random")
.then(res => {
  return res.json()
}).then(data =>{
   content.innerHTML=data.content
// console.log(data)
})
}

