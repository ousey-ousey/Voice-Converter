let speech = new SpeechSynthesisUtterance();
let voices = [];

let voiceselect = document.querySelector('select');
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => (voiceselect.options[i] = new Option(voice.name, i)));
}

voiceselect.addEventListener("change", (e) => {
    const selectedIndex = e.target.value;
    speech.voice = voices[selectedIndex];
});

document.querySelector("button").addEventListener("click", function () {
    const text = document.getElementById("text-input").value;
    if (text.trim() !== "") { // Check if input is not empty
        speech.text = text;
        window.speechSynthesis.speak(speech);
    } else {
        alert("Please enter some text to speak.");
    }
});
