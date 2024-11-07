let myNum = 10;
let myName = 'Ann';

pageHeading.innerHTML = 'Hello: ' + myName;


function squares(val) {

    displayText.innerHTML = '';
    for (let i = 1; i <=val; i++) {

        displayText.innerHTML += `
        <p>
            The square of ${i} is: ${i * i}.
        </p>`;
    }
};

goButton.onclick = function(){
    squares(maxNumInput.value);
};

maxNumInput.oninput = function(){
    squares(maxNumInput.value);
}

clearButton.onclick = function (){
    displayText.innerHTML = '';
    maxNumInput.value = '';
};

bgColorInput.onchange = function(){
    document.body.style.backgroundColor = bgColorInput.value;
}
