// функция прокрутки к нужному блоку
export default function scroll(yesSelector, noSelector, targetElem) {
    const btnYes = document.querySelector(yesSelector),
        btnNo = document.querySelector(noSelector);

    const speed = 0.4; // скорость прокрутки

    btnYes.addEventListener("click", (e) => {
        e.preventDefault();
        scrollLogic();
    });

    btnNo.addEventListener("click", (e) => {
        e.preventDefault();
        scrollLogic();
    });

    function scrollLogic() {
        let widthTop = document.documentElement.scrollTop, // значение сколько уже пролистано
            toBlock = document
                .querySelector(targetElem)
                .getBoundingClientRect().top, // получаем верхнюю границу элемента к которому будет прокрутка
            start = null; // начальная позиция откуда скроллим

        requestAnimationFrame(step); // функция анимации

        function step(time) {
            // функция для создания анимации
            if (start === null) {
                // если это первый запуск
                start = time;
            }

            let progress = time - start,
                r =
                    toBlock < 0
                        ? Math.max(
                              widthTop - progress / speed,
                              widthTop + toBlock
                          )
                        : Math.min(
                              widthTop + progress / speed,
                              widthTop + toBlock
                          ); // кол-во пикселей на которое надо пролистать в течении всей анимациии и в какую сторону

            document.documentElement.scrollTo(0, r); // скроллим до рассчитанного r

            if (r != widthTop + toBlock) {
                // если еще скролл не дошел до нужного элемента, то продолжаем выполнение анимации
                requestAnimationFrame(step);
            }
        }
    }
}
