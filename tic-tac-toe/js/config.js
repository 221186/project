function OpenPlayerConfig() {
  PlayOverlay.style.display = 'block';
  OpenBackdrop.style.display = 'block';
}

function DeletePlayerConfig() {
  PlayOverlay.style.display = 'none';
  OpenBackdrop.style.display = 'none';
  Userform.firstElementChild.classList.remove('error');
  InputError.textContent = '';
}

function SavePlayerConfig(event) {
  event.preventDefault();
  const formUser = new FormData(event.target);
  const enteredPlayername = formUser.get('username').trim();
  
  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add('error');
    InputError.textContent = '유효한 이름을 작성하세요.';
  }
 }