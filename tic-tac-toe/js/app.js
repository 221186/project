const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlay = '0';
let activePlay = 0;
let currentRound = 1;
let gameisOver = false

const players = [
  {
    name: '',
    symbol: 'X'
  },
  {
    name: '',
    symbol: 'O'
  }
]

const PlayOverlay = document.getElementById('config-overlay');
const OpenBackdrop = document.getElementById('backdrop');

const DeleteBtn = document.getElementById('deletebtn');
const DeleteBackdrop = document.getElementById('backdrop');

const EditOneBtn = document.getElementById('edit-player-1-btn');
const EdittwoBtn = document.getElementById('edit-player-2-btn');

const Userform = document.querySelector('form');
const UserInput = document.getElementById('playname');
const InputError = document.getElementById('config-error');

const StartButton = document.getElementById('start-game-btn');
const GameBoard = document.getElementById('game-start');
const GameButtons = document.querySelectorAll('#game-board li'); 
const PlayerTrunName = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');

EditOneBtn.addEventListener('click', OpenPlayerConfig);
EdittwoBtn.addEventListener('click', OpenPlayerConfig);

DeleteBtn.addEventListener('click', DeletePlayerConfig);
DeleteBackdrop.addEventListener('click', DeletePlayerConfig);

Userform.addEventListener('submit', SavePlayerConfig);

StartButton.addEventListener('click', NewGameStart);

for (const GameButton of GameButtons) {
  GameButton.addEventListener('click', GameField);
}

