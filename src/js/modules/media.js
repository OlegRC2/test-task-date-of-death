// функция для отображения некоторых элементов на мобильных экранах
function media(
    lineSelector,
    imgSelector,
    footerSelectorMainPage,
    footerSelectorEnd
) {
    const line = document.querySelector(lineSelector), // линия в хедере
        imgHeaven = document.querySelector(imgSelector), // картинка в блоке prediction
        footerMain = document.querySelector(footerSelectorMainPage), // блок с текстом в футере на главной странице
        footerEnd = document.querySelector(footerSelectorEnd); // блок с текстом в футере на последнем экране

    function resizeLine() {
        if (document.body.clientWidth < 1440) {
            line.style.width = "100%";
        } else {
            line.style.width = "1440px";
        }
    }

    function resizeImg() {
        if (document.body.clientWidth > 1440) {
            imgHeaven.style.left = "0";
            imgHeaven.style.transform = "none";
            imgHeaven.src = "img/heaven.png";
        } else if (document.body.clientWidth < 501) {
            imgHeaven.src = "img/heaven_small.png";
        } else {
            imgHeaven.src = "img/heaven.png";
            imgHeaven.style.left = "50%";
            imgHeaven.style.transform = "translateX(-50%)";
        }
    }

    footerMain.addEventListener("click", () => {
        footerMain.classList.toggle("footer__active");
        window.scrollBy(0, 19);
    });

    footerEnd.addEventListener("click", () => {
        footerEnd.classList.toggle("call__active-footer");
        window.scrollBy(0, 19);
    });

    resizeLine();
    resizeImg();

    window.addEventListener("resize", () => {
        resizeLine();
        resizeImg();
    });
}

export default media;
