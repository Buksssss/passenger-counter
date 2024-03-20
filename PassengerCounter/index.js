
// let count = 7
// console.log(count)

// let myage = 35
// let humandogratio = 7

// let mydogage = myage * humandogratio

// console.log(mydogage)

// let count = 50
// console.log(count)
// count = count + 100
// console.log(count)
// count = count - 25
// console.log(count)
// count = count + 70
// console.log(count)

// function increment () {
//     console.log("the button was click")  
// }\

// function countdown() {
//     console.log (5)
//     console.log (4)
//     console.log (3)
//     console.log (2)
//     console.log (1)
// }
// countdown()
// countdown()

// function callout42 () {
//     console.log(42)
// }
// callout42()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function totallaptime() {
//     let totallaptime = lap1 + lap2 + lap3
//     console.log(totallaptime)
//     // console.log( lap1 + lap2 + lap3 )
// }
// totallaptime()

// let lapscompleted = 0
// function incrementlap () {
//     lapscompleted = lapscompleted + 1
// }
// incrementlap()
// incrementlap()
// incrementlap()
// console.log (lapscompleted)

// let countEl = document.getElementById ("count-el")
// console.log ("countEL")
// let count = 0

// function increment () {
//     count = count + 1
//     countEl.innerText = count
//     console.log (count)
// }

// let countEl = document.getElementById ("count-el") 
// console.log ("count-el")
// let count = 0
// function increment () {
//     count = count + 1
//     countEl.innerText = count
//     console.log (count)
// }

function save () {
    console.log(count)
}

// let username = "Buks"
// let message = "You Have 3 Notifications"
// let messageToUser = message + ", " + username + "!"

// console.log (messageToUser)

// let name1 = "buks"
// let greeting1 = "Hi, my name is "

// let mygreeting1 = greeting1 + name1

// console.log (mygreeting1)

let saveEl = document.getElementById ("save-el")
let countEl = document.getElementById ("count-el")
let count = 0

function increment () {
    count += 1
    countEl.textContent = count
    console.log (count)
}

function save () {
    let countStr = count +' - '
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    console.log(count)
}

// let points = 4
// let bonusPoints = "10"

// let totalPoints = points + bonusPoints

// console.log (totalPoints)

// string vs number (string wins)

// let welcomeEl = document.getElementById ("welcome-el")
// let name = "Buks"
// let greeting = "Welcome back, "
// welcomeEl.innerText = greeting + name

// // welcomeEl.innerText = welcomeEl.innerText + " emoji"
// welcomeEl.innerText += "-emoji"

// console.log (welcomeEl.innerText)
