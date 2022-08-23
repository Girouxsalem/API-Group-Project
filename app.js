/////////////////////// API Group Project ////////////////////////
// URL:  https://od-api.oxforddictionaries.com/api/v2
// API KEY:  0415e12cec4a9f7b67521a618de23066
// App ID: b6985f44

const url = "https://od-api.oxforddictionaries.com/api/v2";
const apiKey = "0415e12cec4a9f7b67521a618de23066";
const appId = "b6985f44";

function newWord() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('wordDisplay').innerHTML = quotes[randomNumber];
}

soundBtn = document.querySelector(".speech");

soundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${wordDisplay.innerText}`);
    speechSynthesis.speak(utterance);
    // SpeechSynthesisUtterance is a web speech api that represents a speech request
});





