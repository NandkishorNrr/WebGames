// Check if there is any players in local storage
let players = JSON.parse(localStorage.getItem('players')) || [];

// Create the players array with initial values
const characters = ["Raja", "Mantri", "Sipai", "Chor"];

// Create the value array with initial values
const values = [1000, 500, 300, 0];

// Get the scores from local storage or initialize with four zeros
let scores = JSON.parse(localStorage.getItem('scores')) || [0, 0, 0, 0];

// Check if the counter value is already stored in localStorage
let counter = parseInt(localStorage.getItem('counter')) || 1;

// Unique Random Numbers (4)
const numbers = [];

// chor sipai index
const chorSipaiIndex = [];

// chor heading and cotent ID
chorH = " ";
chorC = " ";

// sipai heading and cotent ID
sipaiH = " ";
sipaiC = " ";

// Update the counter value and store it in localStorage
function incrementCounter() {
  counter++;
  localStorage.setItem('counter', counter);
  // updateCounterDisplay();
}

function setChorSipaiIDs(chorID, sipaiID) {
  chorH = "card" + chorID + "HI";
  chorC = "card" + chorID + "CI";

  // sipai heading and cotent ID
  sipaiH = "card" + sipaiID + "HI";
  sipaiC = "card" + sipaiID + "CI";
}


// Display the current counter value on the webpage
function updateCounterDisplay() {
  const counterDisplay = document.getElementById('counter-display');
  counterDisplay.innerText = counter;
}

// eraseData 
function eraseData() {
  // Clear the players array and local storage
  players = [];
  localStorage.removeItem('players');

  scores = [];
  localStorage.removeItem('scores');

  // Update the information container
  let container = document.getElementById('info');
  container.innerHTML = '';
}

function submitForm() {

  // Get the form players
  players[0] = document.getElementById('player1').value;
  players[1] = document.getElementById('player2').value;
  players[2] = document.getElementById('player3').value;
  players[3] = document.getElementById('player4').value;


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
  counter = 0;
  localStorage.removeItem('counter');

  // Update the information container
  let container = document.getElementById('info');
  container.innerHTML = '';
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

function showScoreBoard() {
  const rankIndices = getRankIndices();

  document.getElementById("first-player").innerHTML = players[rankIndices[0]];
  document.getElementById("first-score").innerHTML = scores[rankIndices[0]];

  document.getElementById("second-player").innerHTML = players[rankIndices[1]];
  document.getElementById("second-score").innerHTML = scores[rankIndices[1]];

  document.getElementById("thired-player").innerHTML = players[rankIndices[2]];
  document.getElementById("thired-score").innerHTML = scores[rankIndices[2]]

  document.getElementById("forth-player").innerHTML = players[rankIndices[3]];
  document.getElementById("forth-score").innerHTML = scores[rankIndices[3]];

  newGame();
}

//  show games page
function scoreBoardDone() {
  // eraseData();
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

  // get chor sipai indices
  // const indices = getChorSipai(numbers);

  // const chorSipaiIndices = chorSipaiIndices(arr);
  let chor = 1;
  let sipai = 4;

  // set cho sipai IDs
  setChorSipaiIDs(chor, sipai);

  // hide by default chor sipai and show on click
  hideNshowChorSipai();

  // increase counter by 1
  document.getElementById('counter-container').innerHTML = counter + " / 4";

  // no. of round played
  if (counter >= 5) {
    endGame();
  }

  // update informain in heading and conatens

  scores[0] = scores[0] + values[numbers[0]];
  document.getElementById('card1HI').innerHTML = '<h2>' + players[0] + '</h2>';
  document.getElementById('card1CI').innerHTML = '<h1>' + characters[numbers[0]] + '</h1>'
    + '<h1>' + values[numbers[0]] + '</h1>';

  scores[1] = scores[1] + values[numbers[1]];
  document.getElementById('card2HI').innerHTML = '<h2>' + players[1] + '</h2>';
  document.getElementById('card2CI').innerHTML = '<h1>' + characters[numbers[1]] + '</h1>'
    + '<h1>' + values[numbers[1]] + '</h1>';


  scores[2] = scores[2] + values[numbers[2]];
  document.getElementById('card3HI').innerHTML = '<h2>' + players[2] + '</h2>';
  document.getElementById('card3CI').innerHTML = '<h1>' + characters[numbers[2]] + '</h1>'
    + '<h1>' + values[numbers[2]] + '</h1>';

  scores[3] = scores[3] + values[numbers[3]];
  document.getElementById('card4HI').innerHTML = '<h2>' + players[2] + '</h2>';
  document.getElementById('card4CI').innerHTML = '<h1>' + characters[numbers[3]] + '</h1>'
    + '<h1>' + values[numbers[3]] + '</h1>';


  localStorage.setItem('scores', JSON.stringify(scores));
  // document.getElementById("card3").style.display = "non";
  incrementCounter()
}

// hide chor and sipai
function hideNshowChorSipai() {

  // hide chor and sipai content
  document.getElementById(chorC).style.display = "none";
  document.getElementById(sipaiC).style.display = "none";

  // Add click event listeners to card1HI and card2HI
  document.getElementById(chorH).addEventListener("click", showChorSipai);
  document.getElementById(sipaiH).addEventListener("click", showChorSipai);
};

//  show chor and sipai

function showChorSipai() {
  // show card1CI card2CI 
  document.getElementById(chorC).style.display = "block";
  document.getElementById(sipaiC).style.display = "block";
}

// generate rendom UniqueRandomNumbers

function getUniqueRandomNumbers(count) {
  const numbers = [1, 2, 3, 4];
  const result = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const number = numbers[randomIndex];
    result.push(number - 1);
    numbers.splice(randomIndex, 1);
  }
  return result;
}

// find chor and sipai
function getChorSipai(numbers) {
  const indices = [];
  indices.push(numbers.indexOf(2));
  indices.push(numbers.indexOf(3));
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