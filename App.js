const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameState = Array(9).fill(null);

cells.forEach(cell => cell.addEventListener('click', handleCellClick));

function handleCellClick(event) {
    const index = event.target.dataset.index;
    if (gameState[index] === null) {
        gameState[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        if (checkWin()) {
            alert(`${currentPlayer} wins!`);
        } else if (gameState.every(cell => cell !== null)) {
            alert('Draw!');
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWin() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    return winningCombinations.some(combination => 
        combination.every(index => gameState[index] === currentPlayer)
    );
}

document.getElementById('restart').addEventListener('click', () => {
    gameState.fill(null);
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
});
