let userName = prompt("STATE YOUR FOR THE RECORD:")
userName ? document.getElementById(`greeting`).innerText = `Welcome, ${userName}!`: document.getElementById(`greeting`).innerText = 'Welcome!'

function shakeMagic8Ball(){
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

const userQuestion = prompt("WHAT IS YOUR QUESTION FOR ELMO?????");

if (randomNumber >= 0) {
  switch (randomNumber) {
  case 0:
    eightBall = 'Elmo says its certain';
    document.getElementById("response-img").src = "imgs/certant.gif"
    document.getElementById("response-img").classList.remove("dont")
    break;
  case 1:
    eightBall = 'Elmo says its decidedly so';
    document.getElementById("response-img").src = "imgs/decide.gif"
    document.getElementById("response-img").classList.remove("dont")
    break;
  case 2:
    eightBall = 'Elmo couldnt understand the question. Elmo says try again';
    document.getElementById("response-img").src = "imgs/try.gif"
    document.getElementById("response-img").classList.remove("dont")
    break;
  case 3:
    eightBall = 'Elmo is tired. Elmo can not predict your question now';
    document.getElementById("response-img").src = "imgs/cant.gif"
    document.getElementById("response-img").classList.remove("dont")
    break;
  case 4:
    eightBall = 'Elmo says that you shouldnt  count on it';
    document.getElementById("response-img").src = "imgs/dont.gif" 
    document.getElementById("response-img").classList.add("dont")
    break;
  case 5:
    eightBall = 'Elmo says no.';
    document.getElementById("response-img").src = "imgs/no.gif"
    document.getElementById("response-img").classList.remove("dont")
    break;
  case 6:
    eightBall = 'Elmo dosent think your outlook is so good';
    document.getElementById("response-img").src = "imgs/otlook.gif"
    document.getElementById("response-img").classList.remove("dont")
    break;
  case 7:
    eightBall = 'Elmo says yes.';
    document.getElementById("response-img").src = "imgs/yes.gif"
    document.getElementById("response-img").classList.add("dont")
    break; 
  }
} else {
  console.log(`HOW DARE YOU ASK ELMO AN IMPOSSIBLE QUESTION! LEAVE THIS WEBSITE AND NEVER RETURN!!`);
}
console.log(`Magic Eightball: ${eightBall}`); 
document.getElementById(`response-text`).innerText = `${userName} has asked the great and powerful, Meme King Elmo: ${userQuestion}. The great and powerful, Meme King Elmo has replied with: ${eightBall}`
}

