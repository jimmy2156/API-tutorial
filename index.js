
document.getElementById("click1").addEventListener("click", function() {

    fetch("https://apis.scrimba.com/bored/api/activity")
      .then(res => res.json())
      .then(data => { document.getElementById("img").textContent = data.activity })
})




