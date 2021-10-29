// функция для отображения некоторых элементов на мобильных экранах
function media(lineSelector, imgSelector, footerSelector) {
    const line = document.querySelector(lineSelector), // линия в хедере
        imgHeaven = document.querySelector(imgSelector), // картинка в блоке prediction
        footer = document.querySelector(footerSelector); // блок с текстом в футере

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

    footer.addEventListener("click", () => {
        const currentHeight = getComputedStyle(footer).height;

        if (currentHeight == "19px") {
            footer.style.height = "27px";
            window.scrollBy(0, 8);
        } else {
            footer.style.height = "19px";
        }
    });

    resizeLine();
    resizeImg();

    window.addEventListener("resize", () => {
        resizeLine();
        resizeImg();
    });
}

export default media;
