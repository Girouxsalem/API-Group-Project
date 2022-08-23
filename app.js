/////////////////////// API Group Project ////////////////////////

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result");
const generate = document.getElementById("generate");
const sound = document.getElementById("sound");

generate.addEventListener("click", () => {
    let input = document.getElementById("input").value;
    fetch(`${url}${input}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML = `
                <div class="word">
                    <h2 id="wordDisplay">${input}</h2>
                    <button class="speech" onclick="playSound()">
                    <i class="fa-solid fa-volume-high"></i></button>
                    </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>${data[0].phonetic}</p>
                </div>
                <p class="meaning">${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="example">${data[0].meanings[0].definitions[0].example || ""}
                </p>`;
                sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
    })
    .catch( () => {
        result.innerHTML = `<h2 class="error">Couldn't Find That Word</h2>`;
    });
});
function playSound() {
    sound.play();
};






