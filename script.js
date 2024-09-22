// Typing Animation Effect for the Title
const typingText = document.querySelector(".typing-text");
const text = "Welcome To Dika Website!!";

let index = 0;
function typeText() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 100);
  }
}

document.addEventListener("DOMContentLoaded", typeText);
