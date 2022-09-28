const totalHeight = document.querySelector("html").offsetHeight;
const articles = document.querySelectorAll('.articles');
const popupBg = document.querySelector('#popup_bg');
const branchImg = document.querySelector('#branch');
const toggleMenu = document.querySelector('#toggle_menu');
const toggleBar = document.querySelectorAll('.toggle_bar');
const styleDisplayNone = `style.display = "none"`
const styleDisplayBlock = `style.display = "block"`


const articlesCarrousel = () => {

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

window.onload = articlesCarrousel();

//display functions
const displayNone = elements => {
    elements.style.display = "none"
}

const displayBlock = elements => {
    elements.style.display = "block"
}

// popup configuration
const popup = document.querySelector('#popup_introduction');
const popup_bg = document.querySelector('#popup_bg');
let popup_bg_height = `${totalHeight}px`
const close_button = document.querySelector('#close_b');


window.addEventListener("load", function(){
    popup.style.display = "flex";
    popup_bg.style.display = "block";
    popup_bg.style.height = '100vh';
});

close_button.addEventListener('click', function(){
    popup.style.animation = "fadeaway 1s ease";
    popup_bg.style.animation = "bg_fadeaway 1s ease";
    close_button.classList.add("click_button");

    setTimeout(() => {
        displayNone(popup);
        displayNone(popup_bg);

        displayBlock(branchImg);
    }, 1000);
});

// side menu and menu toggler button config
const rotateFunctionAdd = (rotateElementPositive, rotateElementNegative) => {
    rotateElementPositive.classList.add("toggle_01");
    rotateElementPositive.classList.remove("toggle_02_0");
    rotateElementNegative.classList.add("toggle_02");
    rotateElementNegative.classList.remove("toggle_01_0");

    toggleBar[1].classList.add("fadeaway");
    setTimeout(() => {
        displayNone(toggleBar[1]);
    }, 950);
}

const rotateFunctionRemove = (rotateElementPositive, rotateElementNegative) => {
    rotateElementPositive.classList.remove("toggle_01");
    rotateElementNegative.classList.remove("toggle_02");
    
    toggleBar[1].classList.remove("fadeaway");
    setTimeout(() => {
        displayBlock(toggleBar[1]);
    }, 50);
}

const showSideMenu = () => {
    const menuBar01 = document.querySelector(".toggle_01");
    const menuBar02 = document.querySelector(".toggle_02");
    console.log(menuBar01, menuBar02)

    menuBar01 ? rotateFunctionRemove(toggleBar[0], toggleBar[2]) : rotateFunctionAdd(toggleBar[0], toggleBar[2]);
}

toggleMenu.addEventListener("click", showSideMenu);

