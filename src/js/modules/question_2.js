export default function question_2() {
    const btns = document.querySelectorAll(".question_2"),
        question_2 = document.querySelector(".question-2"),
        question_3 = document.querySelector(".question-3");

    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            question_2.style.display = "none";
            question_3.style.display = "block";
            window.scrollTo(0, 0);
        });
    });
}
