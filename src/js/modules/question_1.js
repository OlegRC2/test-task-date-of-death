export default function question_1() {
    const btns = document.querySelectorAll(".question_1"),
        mainPage = document.querySelector(".main-page"),
        question_2 = document.querySelector(".question-2");

    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            mainPage.style.display = "none";
            question_2.style.display = "block";
            window.scrollTo(0, 0);
        });
    });
}
