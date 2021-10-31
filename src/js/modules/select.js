export default function select(
    headerSelector,
    bodySelector,
    currentSelector,
    wrapperSelector,
    daySelector,
    startNum,
    endNum = new Date().getFullYear()
) {
    const selectHeader = document.querySelector(headerSelector),
        selectBody = document.querySelector(bodySelector),
        selectCurrent = document.querySelector(currentSelector),
        wrapper = document.querySelector(wrapperSelector); // для закрытия селекта при клике вне селекта

    if (endNum > 1000) {
        // года показываем с текущего до прошлого
        for (let i = endNum; i >= startNum; i--) {
            const day = `<div class="select__item" data-value=${i}>${i}</div>`;
            selectBody.innerHTML += day;
        }
    } else {
        for (let i = startNum; i <= endNum; i++) {
            if (endNum === 12) {
                // если показываем месяцы, то ставим 0 перед одноразрядным чичлом
                if (i < 10) {
                    const day = `<div class="select__item" data-value=0${i}>0${i}</div>`;
                    selectBody.innerHTML += day;
                } else {
                    const day = `<div class="select__item" data-value=${i}>${i}</div>`;
                    selectBody.innerHTML += day;
                }
            } else {
                const day = `<div class="select__item" data-value=${i}>${i}</div>`;
                selectBody.innerHTML += day;
            }
        }
    }

    wrapper.addEventListener("click", (e) => {
        const target = e.target;

        if (target.closest(daySelector)) {
            selectBody.classList.toggle("select-active");
        } else if (
            selectBody.classList.contains("select-active") &&
            target != selectHeader
        ) {
            selectBody.classList.toggle("select-active");
        }
    });

    selectBody.addEventListener("click", (e) => {
        const target = e.target;

        // убираем красный бордер если он есть
        if (
            target.closest(daySelector).classList.contains("select-no-number")
        ) {
            target.closest(daySelector).classList.remove("select-no-number");
        }

        selectCurrent.innerHTML = target.getAttribute("data-value");

        selectCurrent.setAttribute(
            "data-value",
            target.getAttribute("data-value")
        );
    });
}
