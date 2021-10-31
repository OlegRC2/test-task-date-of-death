let userAge = {}; // возраст пользователя

export default function question_3() {
    const btn = document.querySelector(".question-3__btn"),
        question_3 = document.querySelector(".question-3"),
        spinner = document.querySelector(".spinner"),
        question_4 = document.querySelector(".question-4"),
        currentDay = document.querySelector(".current-day"),
        currentMounth = document.querySelector(".current-mounth"),
        currentYear = document.querySelector(".current-year"),
        daySelect = document.querySelector(".select-day"),
        mounthSelect = document.querySelector(".select-mounth"),
        yearSelect = document.querySelector(".select-year");

    btn.addEventListener("click", () => {
        const day = currentDay.getAttribute("data-value"),
            mounth = currentMounth.getAttribute("data-value"),
            year = currentYear.getAttribute("data-value");

        if (!day) {
            daySelect.classList.add("select-no-number");
        }
        if (!mounth) {
            mounthSelect.classList.add("select-no-number");
        }
        if (!year) {
            yearSelect.classList.add("select-no-number");
        }

        if (day && mounth && year) {
            userAge = {
                day: day,
                mounth: mounth,
                year: year,
            };
            question_3.style.display = "none";
            spinner.style.display = "block";

            setTimeout(() => {
                spinner.style.display = "none";
                question_4.style.display = "block";
                window.scrollTo(0, 0);
            }, 2000);
        }
    });
}

export { userAge };
