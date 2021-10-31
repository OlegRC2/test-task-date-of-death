import progressBar from "./progressBar";

export default function question_5() {
    const btns = document.querySelectorAll(".question_5"),
        question_5 = document.querySelector(".question-5"),
        recording = document.querySelector(".recording"),
        call = document.querySelector(".call");

    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            question_5.style.display = "none";
            recording.style.display = "block";
            window.scrollTo(0, 0);

            progressBar(
                ".recording__progress-bar-line",
                ".recording__percents"
            );

            setTimeout(() => {
                recording.style.display = "none";
                call.style.display = "block";
                window.scrollTo(0, 0);
            }, 5500);
        });
    });
}
