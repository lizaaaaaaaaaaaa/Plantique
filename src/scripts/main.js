import playIcon from "../assets/images/icons/video/play.svg";
import pauseIcon from "../assets/images/icons/video/pause.svg";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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

new Swiper(".new__slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  watchSlidesProgress: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  modules: [Pagination, Navigation],
});

const newFavoritesBtns = Array.from(
  document.getElementsByClassName("new__favorite")
);

newFavoritesBtns.forEach((btn) => {
  btn.onclick = () => {
    btn.classList.toggle("new__favorite-chosen");
  };
});

const qualityBtn = document.getElementsByClassName("quality__btn")[0];
const qualityVideo = document.getElementsByTagName("video")[1];

[qualityVideo, qualityVideo.nextElementSibling, qualityBtn].forEach(
  (element) => {
    element.onclick = () => {
      qualityBtn.classList.add("quality__btn-active");
      qualityVideo.parentElement.classList.add("quality__video-active");
      qualityVideo.playbackRate = 2;
      qualityVideo.play();
    };
  }
);

qualityVideo.onended = () => {
  qualityBtn.classList.remove("quality__btn-active");
  qualityVideo.parentElement.classList.remove("quality__video-active");
};

const faqBtns = document.getElementsByClassName("faq__btn");
const faqAnswers = document.getElementsByClassName("faq__answer");

for (let btn = 0; btn < faqBtns.length; btn++) {
  faqBtns[btn].onclick = () => {
    const isActive = faqBtns[btn].classList.contains("faq__btn-active");

    Array.from(faqBtns).forEach((btn) =>
      btn.classList.remove("faq__btn-active")
    );
    Array.from(faqAnswers).forEach((answer) =>
      answer.classList.remove("faq__answer-active")
    );

    if (!isActive) {
      faqBtns[btn].classList.add("faq__btn-active");
      faqAnswers[btn].classList.add("faq__answer-active");
    }
  };
}

const sections = Array.from(document.getElementsByTagName("section"));
const sectionBtn = document.getElementsByClassName("section-btn")[0];

let currentSectionIndex = 0;

sectionBtn.onclick = () => {
  currentSectionIndex++;

  if (currentSectionIndex >= sections.length) {
    currentSectionIndex = 0;
  }

  const nextSection = sections[currentSectionIndex];

  window.scrollTo({
    top: nextSection.offsetTop,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", () => {
  let currentActiveIndex = -1;

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      currentActiveIndex = index;
    }
  });

  if (currentActiveIndex !== -1) {
    currentSectionIndex = currentActiveIndex;
  }
});
