function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculateResult() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateSquareRoot() {
    let display = document.getElementById("display");
    try {
        let value = eval(display.value);
        if (value < 0) {
            display.value = 'Error';
        } else {
            display.value = Math.sqrt(value);
        }
    } catch (e) {
        display.value = 'Error';
    }
}
