const gameData = [ // 게임판에 체크되는 플레이어의 표시를 알기 위해 리스트를 만들었다. //
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlay = '0';
let activePlay = 0; // 누구의 차례인지 알려주기 위한 변수 초기화. //
let currentRound = 1;
let gameisOver = false

const players = [ // 플레이어의 이름이 저장될 수 있도록 name을 빈칸으로 한 객체를 만들었다. // 
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
const GameButtons = document.querySelectorAll('#game-board li'); // 1개 이상의 리스트 항목들에 모두 엑세스한다. //
const PlayerTrunName = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');

EditOneBtn.addEventListener('click', OpenPlayerConfig);
EdittwoBtn.addEventListener('click', OpenPlayerConfig);

DeleteBtn.addEventListener('click', DeletePlayerConfig);
DeleteBackdrop.addEventListener('click', DeletePlayerConfig);

Userform.addEventListener('submit', SavePlayerConfig); // 백엔드 서버가 있다고 가정하고 확인을 누르면 플레이어의 이름을 저장하기 위해 submit으로 이벤트를 설정했다. // 

StartButton.addEventListener('click', NewGameStart);

for (const GameButton of GameButtons) { // 게임 버튼들 모두를 반복문으로 넣어 버튼 하나하나를 클릭했을 때 Gamefield 함수를 사용하도록 한다. //
  GameButton.addEventListener('click', GameField);
}

