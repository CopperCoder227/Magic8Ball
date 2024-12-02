let userName = prompt("STATE YOUR FOR THE RECORD:")
userName ? document.getElementById(`greeting`).innerText = `Hello, ${userName}!`: document.getElementById(`greeting`).innerText = 'Hello!'

function shakeMagic8Ball(){
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

const userQuestion = prompt("ASK YOUR QUESTION TO THE 8 BALL OF MAGIC!!!");

if (randomNumber >= 0) {
  switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    document.getElementById("response-img").src = "imgs/certant.gif"
    break;
  case 1:
    eightBall = 'It is decidedly so';
    document.getElementById("response-img").src = "imgs/decide.gif"
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    document.getElementById("response-img").src = "imgs/try.gif"
    break;
  case 3:
    eightBall = 'Cannot predict now';
    document.getElementById("response-img").src = "imgs/cant.gif"
    break;
  case 4:
    eightBall = 'Do not count on it';
    document.getElementById("response-img").src = "imgs/dont.gif"
    break;
  case 5:
    eightBall = 'My sources say no';
    document.getElementById("response-img").src = "imgs/no.gif"
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break; 
  }
} else {
  console.log(`HOW DARE YOU BREAK THE BALL WITH A NUMBER 8!!! GET OFT THIS WEBSITE AND BE GONE FROM THIS PLANE OF EXISTENCE!!!`);
}
console.log(`Magic Eightball: ${eightBall}`); 
document.getElementById(`response-text`).innerText = `${userName} has asked the Magic 8 Ball ${userQuestion}. the wise and wonderous 8 ball has replied with ${eightBall}`
}

