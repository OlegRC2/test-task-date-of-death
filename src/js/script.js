import media from "./modules/media";
import select from "./modules/select";
import scroll from "./modules/scroll";
import fadeInBlocks from "./modules/fadeInBlocks";
import question_1 from "./modules/question_1";
import question_2 from "./modules/question_2";
import question_3 from "./modules/question_3";
import question_4 from "./modules/question_4";
import question_5 from "./modules/question_5";
import call from "./modules/call";

window.addEventListener("DOMContentLoaded", () => {
    fadeInBlocks(); // анимация появления блоков
    scroll(".promo__yes", ".promo__no", ".question"); // функция прокрутки к нужному блоку
    media(
        ".promo__line",
        ".prediction__img",
        ".footer__text",
        ".call__footer-text"
    ); // функция для отображения некоторых элементов на мобильных экранах
    select(
        ".header-day",
        ".body-day",
        ".current-day",
        ".question-3__wrapper",
        ".select-day",
        1,
        31
    ); // функция работы селекта с днями
    select(
        ".header-mounth",
        ".body-mounth",
        ".current-mounth",
        ".question-3__wrapper",
        ".select-mounth",
        1,
        12
    ); // функция работы селекта с месяцами
    select(
        ".header-year",
        ".body-year",
        ".current-year",
        ".question-3__wrapper",
        ".select-year",
        1920
    ); // функция работы селекта с годами, текущий год не передается, он вычисляется

    question_1();
    question_2();
    question_3();
    question_4();
    question_5();
    call();
});
