import "../styles/style.scss";
import playIcon from "../assets/images/icons/video/play.svg";
import pauseIcon from "../assets/images/icons/video/pause.svg";

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

const videoControl = document.getElementsByClassName("for__control")[0];
const video = document.getElementsByTagName("video")[0];

videoControl.onclick = () => {
  if (video.paused) {
    video.play();
    videoControl.children[0].src = pauseIcon;
    videoControl.children[0].alt = "play video";
  } else {
    video.pause();
    videoControl.children[0].src = playIcon;
    videoControl.children[0].alt = "stop video";
  }
};

const speciesTabs = Array.from(document.getElementsByClassName("species__btn"));
const contents = Array.from(
  document.getElementsByClassName("species__content")
);

speciesTabs.forEach((tab) => {
  tab.onclick = () => {
    contents.forEach((content) =>
      content.classList.remove("species__content-active")
    );
    speciesTabs.forEach((tab) => tab.classList.remove("species__btn-active"));

    const content = document.getElementById(tab.getAttribute("data-button"));

    content.classList.add("species__content-active");
    tab.classList.add("species__btn-active");
  };
});

contents.forEach((content) => {
  const cards = Array.from(content.children);
  cards.forEach((card) => {
    card.onclick = () => {
      cards.forEach((card) => card.classList.remove("species__card-active"));
      card.classList.add("species__card-active");
    };
  });
});
