fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then(res => res.json())
  .then(data => {
    
    const allArr = data.slice(0, 5)
    document.getElementById("img").innerHTML= allArr
    
    console.log(data.slice(0, 5))})