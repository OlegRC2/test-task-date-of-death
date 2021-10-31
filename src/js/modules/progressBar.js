import { load } from "./_animationVariables";

// функция для анимации прогресс-бара и % под ним
function progressBar(barSelector, numSelector) {
    const bar = document.querySelector(barSelector),
        num = document.querySelector(numSelector);

    bar.style.animation = load;

    const time = 5000, // время анимации счетчика в мс.
        step = 1, // шаг счетчика
        end = 100; // конец счетчика
    let start = 0; // начало счетчика

    const t = Math.round(time / (end / step));
    const interval = setInterval(() => {
        start = start + step;
        if (start == end) {
            clearInterval(interval);
        }
        num.innerHTML = `${start}%`;
    }, t);
}

export default progressBar;
