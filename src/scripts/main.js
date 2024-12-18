import "../styles/style.scss";

const firstPlant = document.querySelectorAll(".intro__images img")[0];
const secondPlant = document.querySelectorAll(".intro__images img")[1];
const thirdPlant = document.querySelectorAll(".intro__images img")[2];

const plants = secondPlant.parentElement.parentElement;

plants.onmouseover = () => {
  secondPlant.parentElement.classList.remove("intro__descr-notHover");
  secondPlant.parentElement.classList.add("intro__descr-hover");
};

plants.onmouseleave = () => {
  secondPlant.parentElement.classList.remove("intro__descr-hover");
  secondPlant.parentElement.classList.add("intro__descr-notHover");
};

const handleMouseLeave = () => {
  secondPlant.style.top = "50%";
};

[firstPlant, thirdPlant].forEach((plant) => {
  plant.onmouseover = () => {
    secondPlant.style.top = `calc(50% + ${plant === firstPlant ? 25 : -25}px)`;
  };
  plant.onmouseleave = handleMouseLeave;
});

const menuBtn = document.getElementsByClassName("header__menu")[0];
const menu = document.getElementsByClassName("header__inner")[0];

menuBtn.onclick = () => {
  menuBtn.classList.toggle("header__menu-active");
  menu.classList.toggle("header__inner-active");
};
