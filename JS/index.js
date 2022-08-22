const selectButton = document.getElementsByClassName("select-btn")
let playerCount=0;
for (let button of selectButton) {
    let playerId = button.id

    document.getElementById(playerId).addEventListener('click', function () {
        playerCount++
        // player name find 
        const playerNameElement = document.getElementById(playerId)
        let playerName = playerNameElement.parentNode.querySelector("h5").innerText
      
        // find the player name holder
        let playerHolderElement = document.getElementById("player-holder")
        let playerHolderElementInnerHtml = playerHolderElement.innerHTML

       
        if (playerCount >=6 ) {
            alert("Five Player is Limited")
            return;
        }

        let createLi = document.createElement("li")
        createLi.innerText = playerName
        playerHolderElement.append(createLi)
        

    })
 
}

