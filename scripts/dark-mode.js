const body = document.querySelector('body');
const btnToggle = document.getElementById('dark-mode');
const argonLogo = document.getElementById('Argon-Logo');
const chakraLogo = document.getElementById('Chakra-Logo');

let toggle = false;

btnToggle.onclick = () => {
    body.classList.toggle('black');
    toggle = !toggle;
    argonLogo.src = toggle ? './image/signImg/Argon.svg' : "./image/Argon.svg";
    chakraLogo.src = toggle ? "./image/signImg/Chakra.svg" : "./image/Chakra.svg"
}