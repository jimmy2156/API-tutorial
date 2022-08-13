
let newArray = []
function addingToBlogPost() {

  let html = ""
  for (let array of newArray) {
    html += `
  <h1>${array.title}</h1>
  <p>${array.body}</p>
    `
  }
  document.getElementById("img").innerHTML= html

}






fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then(res => res.json())
  .then(data => {
    
    newArray = data.slice(0, 5)
   addingToBlogPost()
    
    })
    document.getElementById("form").addEventListener("submit", function(event) {
      event.preventDefault()
      const postTitle = document.getElementById("title1").value
      const postBody = document.getElementById("body1").value
      const data = {
        title: postTitle,
        body: postBody

      }
      fetch("https://apis.scrimba.com/jsonplaceholder/posts", { method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json"
  }
    })
   .then(res => res.json())
   .then(data => { 
    newArray.unshift(data)
    addingToBlogPost()

   }
   
   
   )
   document.getElementById("form").reset()
  
    })
    