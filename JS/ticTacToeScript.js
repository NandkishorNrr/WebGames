// Check if there is any players in local storage
let players = JSON.parse(localStorage.getItem('players')) || [];

var currentPlayer = 'X';
var gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function makeMove(row, col) {
    if (gameBoard[row][col] === '') {
        gameBoard[row][col] = currentPlayer;
        document.getElementsByClassName('cell')[row * 3 + col].textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        checkWin();
    }
}

function checkWin() {
    var winningCombinations = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ];

    for (var i = 0; i < winningCombinations.length; i++) {
        var combo = winningCombinations[i];
        var a = combo[0];
        var b = combo[1];
        var c = combo[2];

        if (
            gameBoard[a[0]][a[1]] !== '' &&
            gameBoard[a[0]][a[1]] === gameBoard[b[0]][b[1]] &&
            gameBoard[a[0]][a[1]] === gameBoard[c[0]][c[1]]
        ) {
            if (gameBoard[a[0]][a[1]] === 'X') {
                // document.getElementById('winner').innerHTML = '<h2>' + 'Player ' + players[1] + ' wins!' + '</h2>';
                alert('Player ' + players[1] + ' wins!');

            }
            else {
                // document.getElementById('winner').innerHTML = '<h2>' + 'Player ' + players[0] + ' wins!' + '</h2>';
                alert('Player ' + players[0] + ' wins!');
            }

            resetGame();
            return;
        }
    }

    // Check for a tie
    var isTie = gameBoard.every(function (row) {
        return row.every(function (cell) {
            return cell !== '';
        });
    });

    if (isTie) {
        alert('It\'s a tie!');
        resetGame();
    }
}

function resetGame() {
    // document.getElementById('winner').style.display = "none";
    gameBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    var cells = document.getElementsByClassName('cell');
    for (var i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }

    currentPlayer = 'X';
}

function submitForm() {
    // eraseData();
    // Get the form players
    players[0] = document.getElementById('player1').value;
    players[1] = document.getElementById('player2').value;

    // Add the players to the array
    players.push({ player1: players[0], player2: players[1] });

    // Save the players to local storage
    localStorage.setItem('players', JSON.stringify(players));

    // open home page
    window.location = "/HTML/gameLayoutTTT.html";
}

function showData() {
    // Update the information container
    document.getElementById('player1').innerHTML = '<h2>' + 'Player1: ' + players[0] + '(0)</h2>';
    document.getElementById('player2').innerHTML = '<h2>' + 'Player2: ' + players[1] + '(X)</h2>';
}

function endGame() {

    if (currentPlayer === 'X') {
        // document.getElementById('winner').innerHTML = '<h2>' + 'Player ' + players[1] + ' wins!' + '</h2>';
        alert('Player ' + players[0] + ' wins!');

    }
    else {
        // document.getElementById('winner').innerHTML = '<h2>' + 'Player ' + players[0] + ' wins!' + '</h2>';
        alert('Player ' + players[1] + ' wins!');
    }

    resetGame();
}

function displayPage() {
    resetGame();
    window.location.href = "/HTML/games.html";
}