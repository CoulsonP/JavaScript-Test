var score = 0
var timeLeft = 75
var time = document.querySelector (".time")
var begin = document.querySelector ("#begin")
var startbtn = document.querySelector (".start")
var quest1 = document.querySelector ("#quest1")
var quest2 = document.querySelector ("#quest2")
var quest3 = document.querySelector ("#quest3")
var quest4 = document.querySelector ("#quest4")
var quest5 = document.querySelector ("#quest5")
var last = document.querySelector ("#last")
var your_score = document.querySelector ("#your_score")
var scores = document.querySelector (".scores")
var initials = document.querySelector ("#initials")
var submit = document.querySelector ("#submit")
var timerInterval;

function countdown() {
    timeLeft --
    time.textContent = timeLeft

    if (timeLeft <= 0) {
        console.log("gameover")
        clearInterval(timerInterval)
    }
}

function quizStart() {
    timerInterval = setInterval(countdown, 1000)
    begin.setAttribute("class", "hide")
    quest1.removeAttribute("class", "hide")
}

document.querySelector ("#questbtn1").onclick = checkQuest1
document.querySelector ("#questbtn2").onclick = checkQuest1
document.querySelector ("#questbtn3").onclick = checkQuest1
document.querySelector ("#questbtn4").onclick = checkQuest1

function checkQuest1() {
    if(this.value === "true") {
        console.log ("correct")
        alert("correct")
    }
    else {
        console.log ("incorrect")
        alert("incorrect")
        timeLeft = timeLeft -15
        time.textContent = timeLeft
    }
    quest1.setAttribute("class", "hide")
    quest2.removeAttribute("class", "hide")
}

document.querySelector ("#twoquestbtn1").onclick = checkQuest2
document.querySelector ("#twoquestbtn2").onclick = checkQuest2
document.querySelector ("#twoquestbtn3").onclick = checkQuest2
document.querySelector ("#twoquestbtn4").onclick = checkQuest2

function checkQuest2() {
    if(this.value === "true") {
        console.log ("correct")
        alert("correct")
    }
    else {
        console.log ("incorrect")
        alert("incorrect")
        timeLeft = timeLeft -15
        time.textContent = timeLeft
    }
    quest2.setAttribute("class", "hide")
    quest3.removeAttribute("class", "hide")
}

document.querySelector ("#threequestbtn1").onclick = checkQuest3
document.querySelector ("#threequestbtn2").onclick = checkQuest3
document.querySelector ("#threequestbtn3").onclick = checkQuest3
document.querySelector ("#threequestbtn4").onclick = checkQuest3

function checkQuest3() {
    if(this.value === "true") {
        console.log ("correct")
        alert("correct")
    }
    else {
        console.log ("incorrect")
        alert("incorrect")
        timeLeft = timeLeft -15
        time.textContent = timeLeft
    }
    quest3.setAttribute("class", "hide")
    quest4.removeAttribute("class", "hide")
}

document.querySelector ("#fourquestbtn1").onclick = checkQuest4
document.querySelector ("#fourquestbtn2").onclick = checkQuest4
document.querySelector ("#fourquestbtn3").onclick = checkQuest4
document.querySelector ("#fourquestbtn4").onclick = checkQuest4

function checkQuest4() {
    if(this.value === "true") {
        console.log ("correct")
        alert("correct")
    }
    else {
        console.log ("incorrect")
        alert("incorrect")
        timeLeft = timeLeft -15
        time.textContent = timeLeft
    }
    quest4.setAttribute("class", "hide")
    quest5.removeAttribute("class", "hide")
}

document.querySelector ("#fivequestbtn1").onclick = checkQuest5
document.querySelector ("#fivequestbtn2").onclick = checkQuest5
document.querySelector ("#fivequestbtn3").onclick = checkQuest5
document.querySelector ("#fivequestbtn4").onclick = checkQuest5

function checkQuest5() {
    if(this.value === "true") {
        console.log ("correct")
        alert("correct")
    }
    else {
        console.log ("incorrect")
        alert("incorrect")
        timeLeft = timeLeft -15
        time.textContent = timeLeft
    }
    quest5.setAttribute("class", "hide")
}











// at end of check quest 5 set attr hide on quest 5div remove attr hide on last var
startbtn.onclick = quizStart