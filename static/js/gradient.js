var copy_text = document.getElementById("grad-text")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var gradient = document.getElementById("gradient")
var tooltip = "Copied to clipboard!"


function setGradient() {
    gradient.style.background =
        "linear-gradient(45deg, " +
        color1.value +
        " ," +
        color2.value +
        ") ";
    copy_text.textContent = gradient.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


function copy_to_clipboard() {
    navigator.clipboard.writeText(copy_text.textContent);
    
}