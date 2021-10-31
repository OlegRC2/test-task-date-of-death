import { userAge } from "./question_3";

export default function question_4() {
    const btns = document.querySelectorAll(".question_4"),
        question_4 = document.querySelector(".question-4"),
        question_5 = document.querySelector(".question-5");

    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const date = new Date(),
                userBirthday = new Date(
                    userAge.year,
                    userAge.mounth,
                    userAge.day
                );

            function diffDates(nowDay, day_two) {
                // считаем полные года с округлением
                return Math.round(
                    (nowDay - day_two) / (60 * 60 * 24 * 1000) / 365
                );
            }

            const age = diffDates(date, userBirthday);

            if (age > 35 && age < 46) {
                document.querySelector(".question-5__deskr").innerHTML =
                    "По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это дедушка или бабушка.";
            }

            if (age > 45) {
                document.querySelector(".question-5__deskr").innerHTML =
                    "По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей.";
            }

            question_4.style.display = "none";
            question_5.style.display = "block";
            window.scrollTo(0, 0);
        });
    });
}
