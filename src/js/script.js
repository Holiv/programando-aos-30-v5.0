const totalHeight = document.querySelector("html").offsetHeight;
const articles = document.querySelectorAll('.articles');

const shrink = () => {

    setTimeout(() => {
        articles[0].classList.add("shrink");
    }, 0);

    setTimeout(() => {
        articles[1].classList.add("shrink");
    }, 4000);

    setTimeout(() => {
        articles[2].classList.add("shrink");
    }, 8000);

    setTimeout(() => {
        articles[3].classList.add("shrink");
        articles[0].classList.remove("shrink");
    }, 12000);

    setInterval(() => {

        setTimeout(() => {
            articles[0].classList.add("shrink");
            articles[1].classList.remove("shrink");
        }, 0);

        setTimeout(() => {
            articles[1].classList.add("shrink");
            articles[2].classList.remove("shrink");
        }, 4000);

        setTimeout(() => {
            articles[2].classList.add("shrink");
            articles[3].classList.remove("shrink");
        }, 8000);

        setTimeout(() => {
            articles[3].classList.add("shrink");
            articles[0].classList.remove("shrink");
        }, 12000);

    }, 16000);


}

window.onload = shrink();

// popup configuration
const popup = document.querySelector('#popup_introduction');
const popup_bg = document.querySelector('#popup_bg');
let popup_bg_height = `${totalHeight}px`
console.log(popup_bg_height);
const close_button = document.querySelector('#close_b');


window.addEventListener("load", function(){
    popup.style.display = "flex";
    popup_bg.style.display = "block";
    popup_bg.style.height = `${totalHeight}px`;
});

close_button.addEventListener('click', function(){
    popup.style.animation = "fadeaway 1s ease";
    popup_bg.style.animation = "bg_fadeaway 1s ease"
    setTimeout(() => {
        popup.style.display = "none";
        popup_bg.style.display = "none";
    }, 1000);
});