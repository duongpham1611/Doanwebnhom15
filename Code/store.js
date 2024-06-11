var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const slider = document.querySelector(".slider");
const sliderMain = document.querySelector(".slider-main");
const sliderItems = document.querySelectorAll(".slider-item");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const sliderItemWidth = sliderItems[1].offsetWidth;
const slidersLength = sliderItems.length;
let positionX = 0;
let index = 0;

nextBtn.addEventListener("click", () => {
    handleChangeSlide(1);
});
prevBtn.addEventListener("click", () => {
    handleChangeSlide(-1);
});
const handleChangeSlide = (dir) => {
    if (dir === 1) {
        index++;
        positionX = positionX - sliderItemWidth;
        sliderMain.style = `transform: translateX(${positionX}px);`;
        handleShowHideBtn(index);
        console.log(index);
    } else if (dir === -1) {
        index--;
        positionX = positionX + sliderItemWidth;
        sliderMain.style = `transform: translateX(${positionX}px);`;
        handleShowHideBtn(index);
    }
};
const handleShowHideBtn = (index) => {
    if (index == 0) {
        prevBtn.classList.add("displayNone");
    } else {
        prevBtn.classList.remove("displayNone");
    }
    if (index == 6) {
        nextBtn.classList.add("displayNone");
    } else {
        nextBtn.classList.remove("displayNone");
    }
};
