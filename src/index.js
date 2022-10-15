import {diff} from "./miniMaple";

document.addEventListener('DOMContentLoaded',setup)

function setup() {
    document.getElementById('diffButton').onclick = differentiate;
}

function differentiate() {
    const str = document.getElementById('str').value;
    const x = document.getElementById('x').value;
    const res = diff(str, x);

    const someDummyDiv = document.createElement('div');
    if (res == "NaN")
        someDummyDiv.innerHTML = `${str}, ${x} => error!`;
    else
        someDummyDiv.innerHTML = `${str}, ${x} => ${res}`;
    const container = document.getElementById('container');
    container.appendChild(someDummyDiv);
}

    // const someDummyDiv = document.createElement('div');
    // someDummyDiv.classList.add('generated');
    // const count = document.getElementsByClassName('generated').length;
    // someDummyDiv.innerHTML = `I was created by JS! There are already ${count} of my friends!`;
    // const container = document.getElementById('container');
    // container.appendChild(someDummyDiv);