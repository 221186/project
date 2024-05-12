 function resetGame() { // 전에 진행됐던 게임 요소들을 초기화시켜 기존에 설정했던 기본값으로 바꿔주는 함수이다. //
  gameisOver = false;
  activePlay = 0;
  currentRound = 1;
  gameOverElement.firstElementChild.innerHTML = 
  '<span id="winner-user">플레이어 이름</span>님의 승리입니다!';
  gameOverElement.style.display = 'none';

  let gameBoardIndex = 0; // 반복문을 통해 게임 버튼들의 인덱스로 엑세스하고 모두 지워준다. //
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
    alert('플레이어가 게임을 시작하지 않았습니다.'); // 만약 한 사람이라도 플레이어 이름을 작성하지 않았다면 경고문이 나온다. //
    return; // if문이 true이면 우선 if문까지 실행한다. //
  }

  resetGame(); // 플레이어가 다시 게임을 시작했다면 대부분의 설정을 초기화시켜야하므로 resetGame함수를 위에 써준다. //
  
  PlayerTrunName.textContent = players[activePlay].name; // 첫번째 플레이어의 차례를 알려주기 위해 이 코드가 반복되더라도 추가했다. //
  GameBoard.style.display = 'block'; // 게임판을 보이도록 한다. //
 }

 function switchplayer() {
  if (activePlay === 0) { // 0으로 초기화한 activePlay를 0과 1로 계속 바꾸기 위해 조건문을 이용한다. //
    activePlay = 1;
  } else {
    activePlay = 0;
  }
  PlayerTrunName.textContent = players[activePlay].name; // 동적으로 변하는 activePlay로 어떤 플레이어인지 인덱싱하고 그 플레이어의 name을 추가한다. 그리고 누구의 차례인지 알려준다.//
 }

 function GameField(event) {
  const selectedField = event.target; // 게임 버튼을 클릭했을 때의 이벤트 객체를 저장한다. // 
  const selectedColumn = selectedField.dataset.col - 1; // 게임 버튼들에 저장했던 열을 인덱스로 접근하기 위해 -1 하였다. //
  const selectedRow = selectedField.dataset.row - 1; // 게임 버튼들에 저장했던 행을 인덱스로 접근하기 위해 -1 하였다. //

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert('다른 필드를 선택하세요!'); // 이미 클릭한 버튼에 대해서는 경고문이 나온다. //
    return;
  }

  selectedField.textContent = players[activePlay].symbol; // 동적으로 변하는 activePlay로 어떤 플레이어인지 인덱싱하고 그 플레이어의 symbol을 추가한다. //
  selectedField.classList.add('disabled'); // css 디자인을 추가하기 위해 클래스를 추가했다. // 

  gameData[selectedRow][selectedColumn] = activePlay + 1; // activePlay에 1를 더한 것은 실제 플레이어들을 1또는 2이기 때문이다. //
  
  const winnerId = checkForGameOver(); // 함수를 통해 winnerId에는 플레이어 1이 이기면 1을 플레이어 2가 이기면 2를 무승부가 나면 -1가 저장된다. //
  
  if (winnerId !== 0) { // 만약 0이라면 무승부이다. // 
    gameOver(winnerId);
  }

  currentRound++; // 0으로 초기화시킨 currentRound를 버튼이 모두 눌릴때까지 증가시킨다. //
  switchplayer();
 }

 function checkForGameOver() {
  for (let i = 0; i < 3; i++) { 
    if ( // 이 경우는 반복문을 통해 열을 기준으로 모두 같은 문자가 있는지 확인한다. //
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
  for (let j = 0; j < 3; j++) {
    if ( // 이 경우는 반복문을 통해 행을 기준으로 모두 같은 문자가 있는지 확인한다. //
      gameData[0][j] > 0 &&
      gameData[0][j] === gameData[1][j] &&
      gameData[1][j] === gameData[2][j]
    ) {
      return gameData[0][j];
    }
  }
  if ( // 이 경우는 조건문을 통해 좌에서 우로 가는 대각선에 모두 같은 문자가 있는지 확인한다. //
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }
  if ( // 이 경우는 조건문을 통해 우에서 좌로 가는 대각선에 모두 같은 문자가 있는지 확인한다. //
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[0][2];
  }

  if (currentRound === 9) { // currentRound가 9가 된다면 버튼 9개가 다 눌리고도 승부가 나지 않은 것이므로 우선 -1을 반환한다. // 
    return -1;
  }

  return 0; // 승자도 무승부도 없으면 우선 0을 반환한다. //

 }

 function gameOver(winnerId) {
  gameisOver = true;
  gameOverElement.style.display = 'block';

  if (winnerId > 0) { // winnerId가 1이상이라면 승부가 난 것이다. //
    const winnerName = players[winnerId - 1].name; // players 객체는 0으로 시작하므로 winnerId에 -1를 하고 players 객체의 name에 접근한다. // 
    gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
  } else { // winnerId가 -1이라면 무승부를 나타낸다. //
    gameOverElement.firstElementChild.textContent = '무승부입니다!'
  }

 }