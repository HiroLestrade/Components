const menu = document.querySelector(".menu");
const bttns = document.getElementsByClassName("bttn");

menu.onclick = () => {
    menu.classList.toggle("active");
}