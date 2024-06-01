
// calculator done!!

let display = document.querySelector('.display');
let ControlButtons = document.querySelectorAll('.btn');
let allSymbols = ['+', '-', 'X', '/', 'C', '=', 'Del'];
let firstvalue = "";
let secondvalue = "";
let firstNumArray = [];
let secondNumarray = [];
let symbol = '';
let result = '';
let step;

function calculate() {
    firstvalue = parseFloat(firstvalue);
    secondvalue = parseFloat(secondvalue);
    if (symbol === '+') {
        result = firstvalue + secondvalue;
    }
    if (symbol === '-') {
        result = firstvalue - secondvalue;
    }
    if (symbol === 'X') {

        result = firstvalue * secondvalue;
    }
    if (symbol === '/') {
        if (secondvalue === 0) {
            result = 'cannot divide by zero';
        }
        else { result = firstvalue / secondvalue; }

    }

    display.value = result;
    firstNumArray = [];
    secondNumarray = [];
    firstNumArray.push(result);
    firstvalue = firstNumArray.join('');
    secondvalue = secondNumarray.join('');

}
function del() {
    if (!symbol) {
        // firstvalue = btnvalue;
        firstNumArray.pop(-1);
        firstvalue = firstNumArray.join('');
        display.value = firstvalue;
    }
    else if (symbol) {
        // secondvalue += btnvalue;
        let displayscreen = display.value;
        display.value = displayscreen.slice(0, -1);
        secondNumarray.pop(-1);
        secondvalue = secondNumarray.join('');
    }


}

for (let button of ControlButtons) {
    button.addEventListener('click', () => {
        const btnvalue = button.innerText;
        const btnIsSymbols = allSymbols.includes(btnvalue);
        // console.log(btnIsSymbols);
        if (firstvalue && btnIsSymbols) {
            secondvalue && calculate()
            symbol = btnvalue;

        }

        // console.log(firstvalue);

        else if (!symbol) {
            // firstvalue = btnvalue;
            if (btnvalue === '.' && firstNumArray.includes('.')) {
                return
            }
            firstNumArray.push(btnvalue);
            firstvalue = firstNumArray.join('');
            // console.log(firstvalue);
        }
        else if (symbol) {
            if (btnvalue === '.' && secondNumarray.includes('.')) {
                return
            }
            // secondvalue += btnvalue;
            secondNumarray.push(btnvalue);
            secondvalue = secondNumarray.join('');
            // console.log(secondvalue);
        }
        if (btnvalue !== '=') {
            display.value += btnvalue;
        }

        if (btnvalue === 'C') {
            firstNumArray = [];
            secondNumarray = [];
            firstvalue = '';
            secondvalue = '';
            symbol = '';
            result = '';
            display.value = '';
            return;
        }
    })
}




