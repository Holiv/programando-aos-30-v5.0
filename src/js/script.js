const totalHeight = document.querySelector("html").offsetHeight;
const articles = document.querySelectorAll('.articles');
const popupBg = document.querySelector('#popup_bg');
const branchImg = document.querySelector('#branch');
const toggleMenu = document.querySelector('#toggle_menu');
const toggleBar = document.querySelectorAll('.toggle_bar');
const styleDisplayNone = `style.display = "none"`;
const styleDisplayBlock = `style.display = "block"`;

const card = document.querySelectorAll(".card_menu");
const card_0 = card[0];
const card_1 = card[1];
const card_2 = card[2];
const card_3 = card[3];

const hideCard0 = "hide_card_0";
const hideCard1 = "hide_card_1";
const hideCard2 = "hide_card_2";
const hideCard3 = "hide_card_3";

const showCard0 = "show_card_0"
const showCard1 = "show_card_1"
const showCard2 = "show_card_2"
const showCard3 = "show_card_3"

//add showAll function - show all cards
const addShowAll = (card1, card2, card3, card4, show1, show2, show3, show4, hide1, hide2, hide3, hide4) => {
    card1.classList.add(show1);
    card1.classList.remove(hide1);
    card2.classList.add(show2);
    card2.classList.remove(hide2);
    card3.classList.add(show3);
    card3.classList.remove(hide3);
    card4.classList.add(show4);
    card4.classList.remove(hide4);
}
const addHideAll = (card1, card2, card3, card4, hide1, hide2, hide3, hide4, show1, show2, show3, show4) => {
    card1.classList.add(hide1);
    card1.classList.remove(show1);
    card2.classList.add(hide2);
    card2.classList.remove(show2);
    card3.classList.add(hide3);
    card3.classList.remove(show3);
    card4.classList.add(hide4);
    card4.classList.remove(show4);
}
//remove hide function
const removeHide = (card1, card2, hide1, hide2) => {
    card1.classList.remove(hide1);
    card2.classList.remove(hide2);
}
//add show function
const addShow = (card1, card2, show1, show2) => {
    card1.classList.add(show1);
    card2.classList.add(show2);
}
//add hide function
const addHide = (card1, card2, hide1, hide2) => {
    card1.classList.add(hide1);
    card2.classList.add(hide2);
}

const substitution = (card1, card2, changeSet, hideCard_1, hideCard_2, showCard_1, showCard_2) => {

    setTimeout(() => {
        const cardContent = document.querySelectorAll(".card_content");

        const cardContentItem0 = cardContent[0];
        const cardContentItem1 = cardContent[1];
        const cardContentItem2 = cardContent[2];
        const cardContentItem3 = cardContent[3];

        switch (changeSet) {
            case 1:
                card1.appendChild(cardContentItem1);
                card2.appendChild(cardContentItem0);
                break;
            case 2:
                card1.appendChild(cardContentItem2);
                card2.appendChild(cardContentItem0);
                break;
            case 3:
                card1.appendChild(cardContentItem3);
                card2.appendChild(cardContentItem0);
                break;
            default:
                alert('valor inválido');
        }
    removeHide(card1, card2, hideCard_1, hideCard_2);
    addShow(card1, card2, showCard_1, showCard_2);
    }, 1500);
}

const menuMove = (card1, card2, changeSet, hideCard1_p, hideCard2_p, showCard1_p, showCard2_p) => {
    //add hide class animation
    addHide(card1, card2, hideCard1_p, hideCard2_p);
    //calling the substitution function then adding and removing classes Hide and Show
    substitution(card1, card2, changeSet, hideCard1_p, hideCard2_p, showCard1_p, showCard2_p);
}

toggleMenu.addEventListener("touchstart", function () { addShowAll(card_0, card_1, card_2, card_3, showCard0, showCard1, showCard2, showCard3, hideCard0, hideCard1, hideCard2, hideCard3) });
card_1.addEventListener("touchstart", function () { menuMove(card_0, card_1, 1, hideCard0, hideCard1, showCard0, showCard1) });
card_2.addEventListener("touchstart", function () { menuMove(card_0, card_2, 2, hideCard0, hideCard2, showCard0, showCard2) });
card_3.addEventListener("touchstart", function () { menuMove(card_0, card_3, 3, hideCard0, hideCard3, showCard0, showCard3) });

//open e close menu by touch
const container = document.querySelector('#inner_container');
let clientX;
let deltaX;
container.addEventListener('touchstart', (e) => {
    clientX = e.touches[0].clientX;
}, false);
container.addEventListener('touchend', (e) => {
    deltaX = e.changedTouches[0].clientX - clientX;

    if (deltaX != 0){
        console.log(deltaX);
        deltaX < -150 ? addShowAll(card_0, card_1, card_2, card_3, showCard0, showCard1, showCard2, showCard3, hideCard0, hideCard1, hideCard2, hideCard3) : addHideAll(card_0, card_1, card_2, card_3, hideCard0, hideCard1, hideCard2, hideCard3, showCard0, showCard1, showCard2, showCard3);
    }
});


// 

//Carrouseel
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


window.addEventListener("load", function () {
    popup.style.display = "flex";
    popup_bg.style.display = "block";
    popup_bg.style.height = '100vh';
});

close_button.addEventListener('click', function () {
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

    menuBar01 ? rotateFunctionRemove(toggleBar[0], toggleBar[2]) : rotateFunctionAdd(toggleBar[0], toggleBar[2]);
}

toggleMenu.addEventListener("click", showSideMenu);