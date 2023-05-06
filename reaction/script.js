const button = document.querySelector(".btn-primary");
let btndiv = document.querySelector(".btn-pdiv")
let actualValue = 0

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function random() {
    return Math.floor(Math.random() * 10000)
}

let xcount = 0
let time = 0
var currentTime = 0
var millisecondsPassed = 0

function changeAttBtn(color, value) {
    if (color != 0) {
        button.style.backgroundColor = `${color}`;
    }
    if (value != 0) {
        button.setAttribute("value", `${value}`);
    }
}

function tellTime() {
    currentTime = new Date();
    millisecondsPassed = currentTime.getTime();
    console.log(millisecondsPassed);

    let time = {
        "min": new Date().getMinutes(),
        "s": new Date().getSeconds(),
        "ms": new Date().getMilliseconds()
    }
    console.log(time)
}

async function starting() {
    xcount = 0
    changeAttBtn("Red", 'Espere...')
    await sleep(random());
    stop();
}

function stop() {
    changeAttBtn("Green", 'CLICA')
    tellTime()
}

function end() {
    button.style.backgroundColor = "Black";
    let actualTime = new Date().getTime()
    time = actualTime - millisecondsPassed
    changeAttBtn("Black", `${time}ms`)
    xcount = 1
}

function change(x) {
    if (x == 0) {
        actualValue++
        starting()
    } else {
        actualValue = 0
        end()
    }
}

function btn() {
    change(actualValue);
}