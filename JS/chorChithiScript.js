// Check if there is any players in local storage
let players = JSON.parse(localStorage.getItem('players')) || [];
// Create the players array with initial values
const characters = ["Raja", "Mantri", "Sipai", "Chor"];

// Create the value array with initial values
const values = [1000, 500, 300, 0];

// Get the scores from local storage or initialize with four zeros
let scores = JSON.parse(localStorage.getItem('scores')) || [0, 0, 0, 0];

function submitForm() {
  // Get the form players
  let player1 = document.getElementById('player1').value;
  let player2 = document.getElementById('player2').value;
  let player3 = document.getElementById('player3').value;
  let player4 = document.getElementById('player4').value;
  // let age = document.getElementById('age').value;

  // Add the players to the array
  players.push({ player1: player1, player2: player2, player3: player3, player4: player4 });

  // Save the players to local storage
  localStorage.setItem('players', JSON.stringify(players));

  // open home page
  window.location = "/HTML/gameLayoutCC.html";

  // open games page

}

function showData() {
  // Get the players from local storage
  let playesData = JSON.parse(localStorage.getItem('players')) || [];

  // Update the information container
  let cardContainer1 = document.getElementById('card1');
  let card1 = '<h2>' + playesData[0].player1 + '</h2>' + '<hr>';
  cardContainer1.innerHTML = card1;

  let cardContainer2 = document.getElementById('card2');
  let card2 = '<h2>' + playesData[0].player2 + '</h2>' + '<hr>';
  cardContainer2.innerHTML = card2;

  let cardContainer3 = document.getElementById('card3');
  let card3 = '<h2>' + playesData[0].player3 + '</h2>' + '<hr>';
  cardContainer3.innerHTML = card3;

  let cardContainer4 = document.getElementById('card4');
  let card4 = '<h2>' + playesData[0].player4 + '</h2>' + '<hr>';
  cardContainer4.innerHTML = card4;
}

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
function displayPage() {
  window.location.href = "/HTML/games.html";
}

// clear old players and open Games
function newGame() {
  eraseData();
  displayPage();
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

  // Get the players from local storage
  let playesData = JSON.parse(localStorage.getItem('players')) || [];

  // Update the information container
  let cardContainer1 = document.getElementById('card1');
  let infoContainer = document.getElementById('info');

  let info = '<h2>' + playesData[0].player1 + '</h2>'
    + '<h3> Score: ' + scores[0] + '</h3>' + '<hr>' +

   '<h2>' + playesData[0].player2 + '</h2>'
    + '<h3> Score: ' + scores[1] + '</h3>' + '<hr>' +

   '<h2>' + playesData[0].player3 + '</h2>'
    + '<h3> Score: ' + scores[2] + '</h3>' + '<hr>' +

   '<h2>' + playesData[0].player4 + '</h2>'
    + '<h3> Score: ' + scores[3] + '</h3>' + '<hr>' 
;

  infoContainer.innerHTML = info;

  scores[0] = scores[0] + values[numbers[0]];
  let card1 = '<h2>' + playesData[0].player1 + '</h2>' + '<hr>'
    + '<h1>' + characters[numbers[0]] + '</h1>'
    + '<h1>' + values[numbers[0]] + '</h1>';
  cardContainer1.innerHTML = card1;

  let cardContainer2 = document.getElementById('card2');

  scores[1] = scores[1] + values[numbers[1]];
  let card2 = '<h2>' + playesData[0].player2 + '</h2>' + '<hr>'
    + '<h1>' + characters[numbers[1]] + '</h1>'
    + '<h1>' + values[numbers[1]] + '</h1>';
  cardContainer2.innerHTML = card2;

  let cardContainer3 = document.getElementById('card3');
  scores[2] = scores[2] + values[numbers[2]];
  let card3 = '<h2>' + playesData[0].player3 + '</h2>' + '<hr>'
    + '<h1>' + characters[numbers[2]] + '</h1>'
    + '<h1>' + values[numbers[2]] + '</h1>';
  cardContainer3.innerHTML = card3;

  let cardContainer4 = document.getElementById('card4');
  scores[3] = scores[3] + values[numbers[3]];
  let card4 = '<h2>' + playesData[0].player4 + '</h2>' + '<hr>'
    + '<h1>' + characters[numbers[3]] + '</h1>'
    + '<h1>' + values[numbers[3]] + '</h1>';
  cardContainer4.innerHTML = card4;

  localStorage.setItem('scores', JSON.stringify(scores));
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
