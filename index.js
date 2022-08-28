document.getElementById('button').addEventListener('click', color) 


let deckId 
let computerScore = 0
let yourScore = 0
function color() {


fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
  .then(res => res.json())
  .then(data => {  console.log(data)
    document.getElementById("remaining").innerText = `Remaining cards: ${data.remaining}`
  deckId = data.deck_id
  console.log(deckId)

  
 }
  )}
  document.getElementById("draw").addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
      .then(res => res.json())
      .then(data => {console.log(data)
        document.getElementById("remaining").innerText = `Remaining cards: ${data.remaining}`
      
    document.getElementById("img1").children[0].innerHTML = `
    <img src=${data.cards[0].image} class="cards" />
  
    `
    document.getElementById("img1").children[1].innerHTML = `
    <img src=${data.cards[1].image} class="cards" />`


    const winner = selectingWinner(data.cards[0], data.cards[1])
    document.getElementById("winner1").innerText = winner

    if (data.remaining === 0) {
      document.getElementById("draw").disabled = true
      if (computerScore > yourScore) {
      document.getElementById("winner1").textContent = `Final score: Computer won this game and the score is ${computerScore}`
      } else if (yourScore > computerScore) {
        document.getElementById("winner1").textContent = `Final score: You won the game and the score is  ${yourScore}`
      } else {
        document.getElementById("winner1").textContent = `Its Draw`
      }
    }
    

      })
  })
   

  function selectingWinner(card1, card2) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
     const card1ValueIndex = valueOptions.indexOf(card1.value)
     const card2ValueIndex = valueOptions.indexOf(card2.value)
    if (card1ValueIndex > card2ValueIndex) {
      yourScore++
      document.getElementById("yourscore").textContent = `Your score: ${yourScore}`
     return "You won"
    } else if (card2ValueIndex > card1ValueIndex) {
      computerScore++
      document.getElementById('computerscore').textContent = `Computer Score: ${computerScore}`
      return "Computer won"
    } else {
      return "draw"
    }
    
    } 
   