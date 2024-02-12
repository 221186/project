const PlayOverlay = document.getElementById('config-overlay');
const OpenBackdrop = document.getElementById('backdrop');

const DeleteBtn = document.getElementById('deletebtn');
const DeleteBackdrop = document.getElementById('backdrop');

const EditOneBtn = document.getElementById('edit-player-1-btn');
const EdittwoBtn = document.getElementById('edit-player-2-btn');

const Userform = document.querySelector('form');
const UserInput = document.getElementById('playname');
const InputError = document.getElementById('config-error');

EditOneBtn.addEventListener('click', OpenPlayerConfig);
EdittwoBtn.addEventListener('click', OpenPlayerConfig);

DeleteBtn.addEventListener('click', DeletePlayerConfig);
DeleteBackdrop.addEventListener('click', DeletePlayerConfig);

Userform.addEventListener('submit', SavePlayerConfig);

