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
        // disable the button after clicking 
        const disableButton= document.getElementById(playerId)
        disableButton.disabled=true
       
       
        if (playerCount >=6 ) {
            alert("Five Player is Limited")
            disableButton.disabled=false
            return;
        }
        //Change the color of disable button
        if(disableButton.disabled === true) {
            const Buttonclass=disableButton.classList
            Buttonclass.remove("btn-info")
            Buttonclass.add("btn-secondary")
       
            
          
        }
        

        let createLi = document.createElement("li")
        createLi.innerText = playerName
        playerHolderElement.append(createLi)


        

    })
 
}

// Calculatiing player Expeenace 
document.getElementById("player-calculate").addEventListener ('click', function () {
    // total palyer 
    let  totalPayerElement=document.getElementById("player-holder")
   
    let totalPayer= totalPayerElement.querySelectorAll("li").length


    // Find the price of a player in number
    const perPlayerInputElement=  document.getElementById("per-player-input")
    let perPlayerInputElementValue= parseFloat(perPlayerInputElement.value)

// Check is player is selected or not 
   if(totalPayer===0) {
    alert("Please Select players")
   }

//    Check is the input is number or not
   if(isNaN(perPlayerInputElementValue)) {
    alert ('Please Enter The Player Price in Number')
   }

    // calculation of total price of player 
   let playerTotalprice = perPlayerInputElementValue*totalPayer
    
    //get player expance value
    const playerExpensesElement =document.getElementById("player-expenses")
    const playerExpensesValue= playerExpensesElement.innerText
    playerExpensesElement.innerText=playerTotalprice
    perPlayerInputElement.value=''
   
})

