// Check if there is any players in local storage
let players = JSON.parse(localStorage.getItem('players')) || ["Ayush", "Ballu", "Shanvi", "Ravi"];

// Get the scores from local storage or initialize with four zeros
let scores = JSON.parse(localStorage.getItem('scores')) || [0, 0, 0, 0];

// Create the characters array with initial values
const characters = ["Raja", "Mantri", "Sipahi", "Chor"];

// Create the value array with initial values
let values = JSON.parse(localStorage.getItem('scores')) || [1000, 500, 300, 0];


// Check if the counter value is already stored in localStorage
let counter = parseInt(localStorage.getItem('counter')) || 1;

// Get the scores from local storage or initialize with four zeros
let previousNumbers = JSON.parse(localStorage.getItem('previousNumbers')) || [0, 0, 0, 0];

// check the click even is chor or not
let isChor = "";

// const charactersIndices = [0, 1, 2, 3];
let charactersIndices = [1, 2, 3, 4];

// Unique Random Numbers (4)
const numbers = [0, 0, 0, 0];

// set character's indices
let chor;
let sipai;
let raja;
let mantri;

// chor heading and cotent ID
let chorH = " ";
let chorC = " ";

// mantri heading and cotent ID
let mantriH = " ";
let mantriC = " ";

// sipai heading and cotent ID
let sipaiH = " ";
let sipaiC = " ";

// sipai heading and cotent ID
let rajaH = " ";
let rajaC = " ";

// check is event executed
let eventExecuted = false;

// number of round
let round = parseInt(localStorage.getItem('round')) || 4;

// Update the counter value and store it in localStorage
function incrementCounter() {
  counter++;
  localStorage.setItem('counter', counter);
}

function setCharactersIDs(chorID, sipaiID, mantriID, rajaID) {

  chor = chorID;
  sipai = sipaiID;
  raja = rajaID;
  mantri = mantriID;

  chorH = "card" + chorID + "HI";
  chorC = "card" + chorID + "CI";

  // sipai heading and cotent ID
  sipaiH = "card" + sipaiID + "HI";
  sipaiC = "card" + sipaiID + "CI";

  // mantri heading and cotent ID
  mantriH = "card" + mantriID + "HI";
  mantriC = "card" + mantriID + "CI";

  // raja heading and cotent ID
  rajaH = "card" + rajaID + "HI";
  rajaC = "card" + rajaID + "CI";
}

// Display the current counter value on the webpage
function updateCounterDisplay() {
  const counterDisplay = document.getElementById('counter-display');
  counterDisplay.innerText = counter;
}

function submitForm() {
  eraseData();
  // Get the form players
  players[0] = document.getElementById('player1').value;
  players[1] = document.getElementById('player2').value;
  players[2] = document.getElementById('player3').value;
  players[3] = document.getElementById('player4').value;

  if (document.getElementById('player1').value == "")
    players[0] = "Ayush";
  if (document.getElementById('player2').value == "")
    players[1] = "Ballu";
  if (document.getElementById('player3').value == "")
    players[2] = "Shanvi";
  if (document.getElementById('player4').value == "")
    players[3] = "Ravi";



  round = document.getElementById('noRounds').value;
  localStorage.setItem('round', round);

  // Add the players to the array
  players.push({ player1: players[0], player2: players[1], player3: players[2], player4: players[3] });

  // Save the players to local storage
  localStorage.setItem('players', JSON.stringify(players));

  // open home page
  window.location = "/HTML/gameLayoutCC.html";
}

function showData() {
  // Update the information container
  document.getElementById('card1HI').innerHTML = '<h2>' + players[0] + '</h2>';
  document.getElementById('card2HI').innerHTML = '<h2>' + players[1] + '</h2>';
  document.getElementById('card3HI').innerHTML = '<h2>' + players[2] + '</h2>';
  document.getElementById('card4HI').innerHTML = '<h2>' + players[3] + '</h2>';
}


// eraseData 
function eraseData() {
  // Clear the players array and local storage
  players = [];
  localStorage.removeItem('players');

  scores = [];
  localStorage.removeItem('scores');

  // Reset the counter value and remove it from localStorage
  counter = 1;
  localStorage.removeItem('counter');
}

function displayPage() {
  window.location.href = "/HTML/games.html";
}

// clear old players and open Games
function newGame() {
  eraseData();
  window.location.href = "/HTML/games.html";
}

// erase data and show score board 
function endGame() {
  window.location.href = "/HTML/scoreBoard.html";
}

// scores page will
function scoresPage() {
  // udate last game, before show scores 
  if (isChor)
    replyTrue();
  else
    replyFalse();

  window.location.href = "/HTML/scoreBoard.html";
}

// Function to update the table fields
function showScoreBoard() {
  const rankIndices = getRankIndices();

  document.getElementById("first-player").innerHTML = players[rankIndices[0]];
  document.getElementById("first-score").innerHTML = scores[rankIndices[0]];

  document.getElementById("second-player").innerHTML = players[rankIndices[1]];
  document.getElementById("second-score").innerHTML = scores[rankIndices[1]];

  document.getElementById("third-player").innerHTML = players[rankIndices[2]];
  document.getElementById("third-score").innerHTML = scores[rankIndices[2]];

  document.getElementById("fourth-player").innerHTML = players[rankIndices[3]];
  document.getElementById("fourth-score").innerHTML = scores[rankIndices[3]];
}

//  show games page
function scoreBoardDone() {
  eraseData();
  window.location.href = "/HTML/games.html";
}
// generating random number
function generateRandomNumbers() {
  const randimNums = [];
  while (randimNums.length < 4) {
    var num = Math.floor(Math.random() * 4) + 1;
    if (randimNums.indexOf(num) === -1) {
      randimNums.push(num);
    }
  }
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";
  for (var i = 0; i < randimNums.length; i++) {
    outputDiv.innerHTML += randimNums[i] + "<br>";
  }
}

// throw 
function draw() {
  // random index array
  const numbers = getUniqueRandomNumbers(4);

  const charactersIndices = getCharactersIndices(numbers);

  const chor = charactersIndices[3];
  const sipai = charactersIndices[2];
  const mantri = charactersIndices[1];
  const raja = charactersIndices[0];

  // set cho sipai IDs
  setCharactersIDs(chor, sipai, mantri, raja);

  // update informain in heading and conatens
  document.getElementById('card1CI').innerHTML = '<h1>' + characters[numbers[0]] + '</h1>'
    + '<h1>' + values[numbers[0]] + '</h1>';

  document.getElementById('card2CI').innerHTML = '<h1>' + characters[numbers[1]] + '</h1>'
    + '<h1>' + values[numbers[1]] + '</h1>';

  document.getElementById('card3CI').innerHTML = '<h1>' + characters[numbers[2]] + '</h1>'
    + '<h1>' + values[numbers[2]] + '</h1>';

  document.getElementById('card4CI').innerHTML = '<h1>' + characters[numbers[3]] + '</h1>'
    + '<h1>' + values[numbers[3]] + '</h1>';

  // hide by default chor sipai and show on click
  hideNshowChorSipai();

  // hide by  draw button after clicked it(it will show on select one of them cards)
  document.getElementById("drawBtn").style.display = "none";
  document.getElementById("drawBtnSpace").style.display = "block";

  // increase counter by 1
  document.getElementById('counter-container').innerHTML = counter + " / " + round;

  // storing data for last numbers
  previousNumbers[3] = chor;
  previousNumbers[2] = sipai;
  previousNumbers[1] = mantri;
  previousNumbers[0] = raja;
  // store cores data in local storage
  localStorage.setItem('previousNumbers', JSON.stringify(previousNumbers));
  // increment counter after ever draw
  incrementCounter();
}

function replyTrue() {
  let chor = previousNumbers[3];
  let sipai = previousNumbers[2];
  let mantri = previousNumbers[1];
  let raja = previousNumbers[0];


  // if reply, true
  scores[chor - 1] += values[3];
  scores[sipai - 1] += values[2];
  scores[mantri - 1] += values[1];
  scores[raja - 1] += values[0];

  // store cores data in local storage
  localStorage.setItem('scores', JSON.stringify(scores));
}

// if reply, false
function replyFalse() {
  let chor = previousNumbers[3];
  let sipai = previousNumbers[2];
  let mantri = previousNumbers[1];
  let raja = previousNumbers[0];


  scores[chor - 1] += values[1];
  scores[sipai - 1] += values[2];
  scores[mantri - 1] += values[3];
  scores[raja - 1] += values[0];

  // store cores data in local storage
  localStorage.setItem('scores', JSON.stringify(scores));
}

// hide chor and sipai
function hideNshowChorSipai() {

  // hide chor and sipai content
  document.getElementById(chorC).style.display = "none";
  document.getElementById(sipaiC).style.display = "none";
  document.getElementById("isChor").style.display = "block";
  document.getElementById("isChor").innerHTML = "?...";

  var isEventExecuting = false; // Variable to track if an event is already executing
  // eventExecuted = false;

  document.getElementById(chorH).addEventListener("click", function () {
    if (!isEventExecuting) {
      isEventExecuting = true; // Mark event as executing
      isChor = true;
      showChorSipai();
      isEventExecuting = false; // Reset event execution status
      eventExecuted = true;
    }
  });

  document.getElementById(sipaiH).addEventListener("click", function () {
    if (!isEventExecuting) {
      isEventExecuting = true; // Mark event as executing
      isChor = false;
      showChorSipai();
      isEventExecuting = false; // Reset event execution status
      eventExecuted = true;
    }
  });

  if (eventExecuted) {
    // udate scores
    if (isChor)
      replyTrue();
    else
      replyFalse();
    showScoreBoard();
  }
  // document.getElementById('isChor').innerHTML = "Your answer is: " + isChor;
}


//  show chor and sipai and clicked element chorH

function showChorSipai() {

  // show card1CI card2CI 
  document.getElementById(chorC).style.display = "block";
  document.getElementById(sipaiC).style.display = "block";
  document.getElementById("drawBtn").style.display = "block";
  document.getElementById("drawBtnSpace").style.display = "none";
  document.getElementById("isChor").style.display = "block";

  // check for assigning write result true or not
  document.getElementById('isChor').innerHTML = " " + isChor;

  // showing character and values acc. repkyied
  if (!isChor) {
    document.getElementById(chorC).innerHTML = '<h1>' + characters[3] + '</h1>'
      + '<h1>' + values[1] + '</h1>';
    document.getElementById(mantriC).innerHTML = '<h1>' + characters[1] + '</h1>'
      + '<h1>' + values[3] + '</h1>';
  }
  else {
    document.getElementById(chorC).innerHTML = '<h1>' + characters[3] + '</h1>'
      + '<h1>' + values[3] + '</h1>';
    document.getElementById(mantriC).innerHTML = '<h1>' + characters[1] + '</h1>'
      + '<h1>' + values[1] + '</h1>';
  }

  // counter = round, hide draw button
  if (counter >= round + 1) {
    document.getElementById("drawBtn").style.display = "none";
    document.getElementById("drawBtnSpace").style.display = "none";
    document.getElementById("scrBtn").style.display = "block";
  }
  if (counter >= round + 2) {
    scoresPage();
  }

  // isReplyNotTrue(flag);
}

// generate rendom UniqueRandomNumbers
function getUniqueRandomNumbers(count) {
  const numbers = [0, 1, 2, 3];
  const result = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const number = numbers[randomIndex];
    result.push(number);
    numbers.splice(randomIndex, 1);
  }
  return result;
}

// get characters indices
function getCharactersIndices(num) {
  const indices = [];
  indices[0] = num.indexOf(0) + 1;
  indices[1] = num.indexOf(1) + 1;
  indices[2] = num.indexOf(2) + 1;
  indices[3] = num.indexOf(3) + 1;
  return indices;
}

// rank of players
function getRankIndices() {

  // create a copy of the original array and sort it in descending order
  const sortedscores = [...scores].sort((a, b) => b - a);

  // create a new array to store the indices in descending order
  const rankscores = new Array(scores.length);

  // loop through the sorted array and find the index of each element in the original array
  for (let i = 0; i < sortedscores.length; i++) {
    const index = scores.indexOf(sortedscores[i]);
    rankscores[i] = index;
  }
  return rankscores;
}