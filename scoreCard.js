
let scoreCount = 0
document.getElementById('score').innerText = scoreCount
console.log(scoreCount)

let guestCount = 0

document.getElementById('guests').innerText = guestCount

function oneS(){
    scoreCount += 1
    document.getElementById('score').innerText = scoreCount
    
}

function twoS(){
    scoreCount += 2
    document.getElementById('score').innerText = scoreCount
    
}

function threeS(){
    scoreCount += 3
    document.getElementById('score').innerText = scoreCount
    
}

// for guest card

function one(){
    guestCount += 1
    document.getElementById('guests').innerText = guestCount
    
}

function two(){
    guestCount += 2
    document.getElementById('guests').innerText = guestCount
    
}

function three(){
    guestCount += 3
    document.getElementById('guests').innerText = guestCount
    console.log(guestCount)
}