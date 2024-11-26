let userName = prompt("HI! Who Are You?")
userName ? document.getElementById(`greeting`).innerText = `Hello, ${userName}!`: document.getElementById(`greeting`).innerText = 'Hello!'

function shakeMagic8Ball(){
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

const userQuestion = prompt("What yis your question for the mighty 8 ball of doom????");

if (randomNumber >= 0) {
  switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
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

