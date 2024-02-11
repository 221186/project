const display = document.getElementById('display');  // ID가 display인 태그를 찾는다.

function add(input) { //버튼(사용자의 입력)을 누르면 계속 늘어나도록 한다.
    display.value += input
}

function calculator() { //eval함수를 통해 display의 값들을 계산한다.
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = 'Error';
    }
}

function cleardisplay() { // C 버튼을 누르면 값이 없어진다.
    display.value = "";
}