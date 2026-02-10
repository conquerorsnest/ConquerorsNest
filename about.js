/* Typing Effect */
const texts = [
    "Founder & CEO – Conquerors Nest",
    "Web Developer",
    "UI/UX Designer",
    "Digital Strategist"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 120);
})();

/* Theme Toggle */
function toggleTheme(){
    document.body.classList.toggle("light");
}