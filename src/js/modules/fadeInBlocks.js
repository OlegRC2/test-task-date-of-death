import { fadeIn } from "./_animationVariables";

// анимация появления блоков
export default function fadeInBlocks() {
    const promo = document.querySelector(".promo"), // берем каждую секцию
        hands = document.querySelector(".hands"),
        prediction = document.querySelector(".prediction");

    const heightPromo = +getComputedStyle(promo).height.replace(/\D/g, ""), // получаем текущую высоту каждого элемента, отрезаем "px", переводим в число
        heightHands = +getComputedStyle(hands).height.replace(/\D/g, ""),
        heightPrediction = +getComputedStyle(prediction).height.replace(
            /\D/g,
            ""
        );

    function addAnimation(elemSelector) {
        document.querySelector(elemSelector).style.animation = fadeIn;
    }

    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop >= heightPromo / 3) {
            addAnimation(".hands__square");
        }

        if (document.documentElement.scrollTop >= heightPromo) {
            addAnimation(".prediction__wrapper");
        }

        if (document.documentElement.scrollTop >= heightPromo + heightHands) {
            addAnimation(".question__wrapper");
        }

        // появление последнего блока. По высоте или доскроллили до конца страницы
        if (
            document.documentElement.scrollTop >=
                heightPromo + heightHands + heightPrediction / 2 ||
            document.documentElement.scrollHeight -
                document.documentElement.scrollTop ==
                document.documentElement.clientHeight
        ) {
            addAnimation(".runes__wrapper");
        }
    });
}
