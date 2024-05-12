function OpenPlayerConfig(event) { // 플레이어가 edit 버튼을 누르면 플레이어의 이름을 작성하는 칸이 나타난다. // 
  const personnelInfo = event.target.dataset.playerid;
  editedPlay =+ personnelInfo;
  PlayOverlay.style.display = 'block';
  OpenBackdrop.style.display = 'block';
}

function DeletePlayerConfig() { // 플레이어가 취소, 배경을 누르면 플래이어의 이름을 작성하는 칸이 사라진다. //
  PlayOverlay.style.display = 'none';
  OpenBackdrop.style.display = 'none';
  Userform.firstElementChild.classList.remove('error'); // 경고문을 디자인하기 위해 추가한 css class도 없애준다. // 
  InputError.textContent = ''; // 경고문 자체도 없애준다. //
  Userform.firstElementChild.lastElementChild.value = ''
}

function SavePlayerConfig(event) {
  event.preventDefault(); // 브라우저가 플레이어의 정보를 https서버로 보내는 기본값을 막기 위한 이벤트 객체의 메소드이다. //
  const formUser = new FormData(event.target); // event가 발생했을 때의 객체를 저장한다. 그리고 js에서 이를 처리한다.//
  const enteredPlayername = formUser.get('username').trim(); // FormData안의 get메소드를 통해 저장된 객체에 플레이어 이름을 가져온다. // 
  
  if (enteredPlayername === '') { // 만약 플레이어의 이름이 작성되지 않았다면 InputError 변수에 ID선택자로 받은 요소에 유효한 이름을 작성하라는 글이 나오게 한다. //
    event.target.firstElementChild.classList.add('error'); // 양식 요소인 event.target의 첫번째 요소인 div에 엑세스하고 CSS클래스를 추가하기 위해 classList 속성을 이용한다. //
    InputError.textContent = '유효한 이름을 작성하세요.';
    InputError.style.fontWeight = '20rem';
    return; // 만약 플레이어가 유효한 이름을 작성하지 않았다면 if문까지만 함수가 실행된다. //
  }
  const editedPlayer = document.getElementById('player-'+ editedPlay + '-data'); // 플레이어 1,2를 구분해서 정보를 가져온다.
  editedPlayer.children[1].textContent = enteredPlayername; // editedPlayer가 article 요소이고 이것의 2번째에 위치한 하위요소인 h3:플레이어 이름을 가져온다. // 

  if (editedPlay === 1) {
    players[0].name = enteredPlayername; // 만들어놓은 객체의 비어있는 name을 플레이어 이름으로 채운다. // 
  } else {
    players[1].name = enteredPlayername;
  }
  DeletePlayerConfig(); // 플레이어가 이름을 작성하고 확인을 누르면 브라우저가 submit하고 창이 닫힌다.
 }
 
