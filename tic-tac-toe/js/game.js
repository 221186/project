 function resetGame() {
  gameisOver = false;
  activePlay = 0;
  currentRound = 1;
  gameOverElement.firstElementChild.innerHTML = 
  '<span id="winner-user">플레이어 이름</span>님의 승리입니다!';
  gameOverElement.style.display = 'none';

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameBoardItemElement = GameButtons[gameBoardIndex];
      gameBoardItemElement.textContent = '';
      gameBoardItemElement.classList.remove('disabled');
      gameBoardIndex++;
    }
  }
 }
 
 function NewGameStart() {
  if (players[0].name === '' || players[1].name === '') {
    alert('플레이어가 게임을 시작하지 않았습니다.');
    return;
  }

  resetGame();
  
  PlayerTrunName.textContent = players[activePlay].name;
  GameBoard.style.display = 'block';
 }

 function switchplayer() {
  if (activePlay === 0) {
    activePlay = 1;
  } else {
    activePlay = 0;
  }
  PlayerTrunName.textContent = players[activePlay].name;
 }

 function GameField(event) {
  if (gameisOver) {
    return;
  }

  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert('다른 필드를 선택하세요!');
    return;
  }

  selectedField.textContent = players[activePlay].symbol;
  selectedField.classList.add('disabled');

  gameData[selectedRow][selectedColumn] = activePlay + 1;
  
  const winnerId = checkForGameOver();
 
  if (winnerId !== 0) {
    gameOver(winnerId);
  }

  currentRound++;
  switchplayer();
 }

 function checkForGameOver() {
  for (let i = 0; i < 3; i++) { 
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
  for (let j = 0; j < 3; j++) {
    if (
      gameData[0][j] > 0 &&
      gameData[0][j] === gameData[1][j] &&
      gameData[1][j] === gameData[2][j]
    ) {
      return gameData[0][j];
    }
  }
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }
  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[0][2];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
 }

 function gameOver(winnerId) {
  gameisOver = true;
  gameOverElement.style.display = 'block';

  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
  } else {
    gameOverElement.firstElementChild.textContent = '무승부입니다!'
  }

 }