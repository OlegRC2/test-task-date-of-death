// функция для смены длины линии в блоке промо в зависимости от ширины экрана
function promoLine(lineSelector) {
    const line = document.querySelector(lineSelector);

    function resizeLine() {
        if (document.body.clientWidth < 1440) {
            line.style.width = "100%";
        } else {
            line.style.width = "1440px";
        }
    }

    resizeLine();

    window.addEventListener("resize", () => {
        resizeLine();
    });
}

export default promoLine;
