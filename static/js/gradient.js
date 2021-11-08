var copy_text = document.getElementById("grad-text")
var color1 = document.getElementById("color1")
var color2 = document.getElementById("color2")
var gradient = document.getElementById("gradient-box")
var angle = document.getElementById("angle") 


function setGradient() {
    gradient.style.background =
        "linear-gradient("+ angle.value
        + "deg, " +
        color1.value +
        " ," +
        color2.value +
        ") ";
    copy_text.textContent = gradient.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
angle.addEventListener("input",setGradient)


function copy_to_clipboard() {
    navigator.clipboard.writeText(copy_text.textContent);
}