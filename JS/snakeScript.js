let players = JSON.parse(localStorage.getItem('players')) || [];

document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const gridSize = 20;
    const boardSize = 700;
    const snakeSpeed = 150;
    let snake = [{ x: 200, y: 200 }];
    let direction = 'right';
    let food = { x: 0, y: 0 };
    let score = 0;
    let gameLoop;
    let gameCount = 0;
    let isGamePaused = true;
    let highestScore = 0;

    function draw() {
        gameBoard.innerHTML = '';
        snake.forEach((dot) => {
            const snakeDot = document.createElement('div');
            snakeDot.className = 'snake-dot';
            snakeDot.style.left = dot.x + 'px';
            snakeDot.style.top = dot.y + 'px';
            gameBoard.appendChild(snakeDot);
        });

        const foodDot = document.createElement('div');
        foodDot.className = 'food-dot';
        foodDot.style.left = food.x + 'px';
        foodDot.style.top = food.y + 'px';
        gameBoard.appendChild(foodDot);

        document.getElementById('playerName').innerHTML = '<h2>Player:  ' + players[0] + '</h2>';
        document.getElementById('round').innerHTML = '<h2>Chance:  ' + (gameCount + 1) + ' / 3' + '</h2>';
        document.getElementById('currentScore').innerHTML = '<h2>You Scored:  ' + score + '<h2>';
        document.getElementById('highestScore').innerHTML = '<h2>Highest Score:  ' + highestScore + '</h2>';

    }

    function update() {
        const head = { x: snake[0].x, y: snake[0].y };

        switch (direction) {
            case 'up':
                head.y -= gridSize;
                break;
            case 'down':
                head.y += gridSize;
                break;
            case 'left':
                head.x -= gridSize;
                break;
            case 'right':
                head.x += gridSize;
                break;
        }

        snake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            score += 10;
            generateFood();
            snakeSpeed -= 10;
        } else {
            snake.pop();
        }

        if (isCollision()) {
            if (highestScore < score) {
                highestScore = score
            }
            score = 0;
            clearInterval(gameLoop);
            gameCount++;

            if (gameCount < 3) {
                // Restart the game with snake starting from the opposite side
                snake = [{ x: boardSize - gridSize, y: boardSize - gridSize }];
                direction = 'left';
                gameLoop = setInterval(update, snakeSpeed);
            } else {
                showGameOverAlert();
                setTimeout(restartGame, 2000);
            }
        }
        draw();
    }

    function generateFood() {
        const maxPos = boardSize / gridSize;
        food = {
            x: Math.floor(Math.random() * maxPos) * gridSize,
            y: Math.floor(Math.random() * maxPos) * gridSize,
        };

        if (isCollision()) {
            generateFood();
        }
    }

    function isCollision() {
        const head = snake[0];
        if (
            head.x < 0 ||
            head.x >= boardSize ||
            head.y < 0 ||
            head.y >= boardSize
        ) {
            return true;
        }

        for (let i = 1; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                return true;
            }
        }

        return false;
    }

    function handleKeydown(event) {
        const key = event.key;
        const validKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

        if (validKeys.includes(key)) {
            switch (key) {
                case 'ArrowUp':
                    if (direction !== 'down') {
                        direction = 'up';
                    }
                    break;
                case 'ArrowDown':
                    if (direction !== 'up') {
                        direction = 'down';
                    }
                    break;
                case 'ArrowLeft':
                    if (direction !== 'right') {
                        direction = 'left';
                    }
                    break;
                case 'ArrowRight':
                    if (direction !== 'left') {
                        direction = 'right';
                    }
                    break;
            }
        }
    }

    function updateGame() {
        if (!isGamePaused) {
            update();
        }
    }

    function toggleGamePause() {
        const toggleButton = document.getElementById('toggle-button');

        if (isGamePaused) {
            // Resume the game
            isGamePaused = false;
            toggleButton.innerText = 'Pause';
            gameLoop = setInterval(updateGame, snakeSpeed);
        } else {
            // Pause the game
            isGamePaused = true;
            toggleButton.innerText = 'Play';
            clearInterval(gameLoop);
        }
    }

    document.addEventListener('keydown', handleKeydown);

    generateFood();
    gameLoop = setInterval(updateGame, snakeSpeed);

    const toggleButton = document.getElementById('toggle-button');
    toggleButton.addEventListener('click', toggleGamePause);
});

function displayPage() {
    window.location.href = "/HTML/games.html";
}

function submitForm() {
    // eraseData();
    // Get the form players
    players[0] = document.getElementById('player1').value;

    // Add the players to the array
    players.push({ player1: players[0] });

    // Save the players to local storage
    localStorage.setItem('players', JSON.stringify(players));

    // open home page
    window.location = "/HTML/gameLayoutS.html";
}

function showGameOverAlert() {
    // Create a game over element
    var gameOverElement = document.createElement('div');
    gameOverElement.setAttribute('id', 'game-over');
    var msg = 'Game Over!';
    gameOverElement.innerText = msg;

    // Style the game over element
    gameOverElement.style.position = 'fixed';
    gameOverElement.style.top = '50%';
    gameOverElement.style.left = '50%';
    gameOverElement.style.transform = 'translate(-50%, -50%)';
    gameOverElement.style.backgroundColor = 'rgb(232, 220, 180)';
    gameOverElement.style.color = 'rgb(52, 9, 9)';
    gameOverElement.style.padding = '20px';
    gameOverElement.style.fontSize = '24px';
    gameOverElement.style.fontWeight = 'bold';
    gameOverElement.style.borderRadius = '10px';
    gameOverElement.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.4)';

    // Append the game over element to the body
    document.body.appendChild(gameOverElement);
}
function restartGame() {
    // Remove the game over element from the body
    var gameOverElement = document.getElementById('game-over');
    if (gameOverElement) {
        gameOverElement.parentNode.removeChild(gameOverElement);
    }

    // Restart the game
    snake = [{ x: boardSize - gridSize, y: boardSize - gridSize }];
    direction = 'left';
    gameCount = 0;
    highestScore = 0;
    score = 0;
    clearInterval(gameLoop);
    gameLoop = setInterval(update, snakeSpeed);
}

function endGame() {

    showGameOverAlert();
    setTimeout(restartGame, 2000);

    restartGame();
}