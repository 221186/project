function OpenPlayerConfig(event) {
  const personnelInfo = event.target.dataset.playerid;
  editedPlay = +personnelInfo;
  PlayOverlay.style.display = 'block';
  OpenBackdrop.style.display = 'block';
}

function DeletePlayerConfig() {
  PlayOverlay.style.display = 'none';
  OpenBackdrop.style.display = 'none';
  Userform.firstElementChild.classList.remove('error');
  InputError.textContent = '';
  Userform.firstElementChild.lastElementChild.value = ''
}

function SavePlayerConfig(event) {
  event.preventDefault();
  const formUser = new FormData(event.target);
  const enteredPlayername = formUser.get('username').trim();
  
  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add('error');
    InputError.textContent = '유효한 이름을 작성하세요.';
    InputError.style.fontWeight = '20rem';
  }
  const editedPlayer = document.getElementById('player-'+ editedPlay + '-data');
  editedPlayer.children[1].textContent = enteredPlayername;

  if (editedPlay === 1) {
    players[0].name = enteredPlayername;
  } else {
    players[1].name = enteredPlayername;
  }
  DeletePlayerConfig();
 }
