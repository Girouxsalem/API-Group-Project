/////////////////////// API Group Project ////////////////////////

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result");
const generate = document.getElementById("generate");
const soundBtn = document.querySelector(".speech");

generate.addEventListener("click", () => {
    fetch(`${url}`).then((response) => response.json) .then((data) => console.log(data));
});

soundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${wordDisplay.innerText}`);
    speechSynthesis.speak(utterance);
    // SpeechSynthesisUtterance is a web speech api that represents a speech request
});







