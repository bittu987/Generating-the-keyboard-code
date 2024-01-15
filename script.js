document.addEventListener('keydown',(e) =>{
    const KeyName = document.querySelector("div > h1 > span");
    KeyName.innerHTML = e.key;

    const keyNo = document.querySelector("#key-number");
    keyNo.innerHTML = e.keyCode;
})