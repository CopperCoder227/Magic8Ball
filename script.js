let userName = prompt("STATE YOUR FOR THE RECORD:")
userName ? document.getElementById(`greeting`).innerText = `Welcome, ${userName}!`: document.getElementById(`greeting`).innerText = 'Welcome!'

function shakeMagic8Ball(){
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

const userQuestion = prompt("WHAT IS YOUR QUESTION FOR ELMO?????");

if (randomNumber >= 0) {
  switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    document.getElementById("response-img").src = "imgs/certant.gif"
    document.getElementById("response-img").classList.remove("dont")
    break;
  case 1:
    eightBall = 'It is decidedly so';
    document.getElementById("response-img").src = "imgs/decide.gif"
    document.getElementById("response-img").classList.remove("dont")
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    document.getElementById("response-img").src = "imgs/try.gif"
    document.getElementById("response-img").classList.remove("dont")
    break;
  case 3:
    eightBall = 'Cannot predict now';
    document.getElementById("response-img").src = "imgs/cant.gif"
    document.getElementById("response-img").classList.remove("dont")
    break;
  case 4:
    eightBall = 'Do not count on it';
    document.getElementById("response-img").src = "imgs/dont.gif" 
    document.getElementById("response-img").classList.add("dont")
    break;
  case 5:
    eightBall = 'My sources say no';
    document.getElementById("response-img").src = "imgs/no.gif"
    document.getElementById("response-img").classList.remove("dont")
    break;
  case 6:
    eightBall = 'Outlook not so good';
    document.getElementById("response-img").src = "imgs/otlook.gif"
    document.getElementById("response-img").classList.remove("dont")
    break;
  case 7:
    eightBall = 'Signs point to yes';
    document.getElementById("response-img").src = "imgs/yes.gif"
    document.getElementById("response-img").classList.add("dont")
    break; 
  }
} else {
  console.log(`HOW DARE YOU BREAK THE BALL WITH A NUMBER 8!!! GET OFT THIS WEBSITE AND BE GONE FROM THIS PLANE OF EXISTENCE!!!`);
}
console.log(`Magic Eightball: ${eightBall}`); 
document.getElementById(`response-text`).innerText = `${userName} has asked the Magic 8 Ball ${userQuestion}. the wise and wonderous 8 ball has replied with ${eightBall}`
}

