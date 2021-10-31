export default function call() {
    const textWithDate = document.querySelector(".call__square-text"),
        btn = document.querySelector(".call__btn"),
        infoBlock = document.querySelector(".getInfo");

    const today = new Date();
    today.setDate(today.getDate() + 1);

    textWithDate.innerHTML = `<span>Первое значимое событие может произойти уже ${today.getDate()}.${
        today.getMonth() + 1
    }.${today.getFullYear()},</span> вам надо быть готовым, чтобы
    последствия не оказались необратимыми.`;

    function transform(res) {
        for (let key in res) {
            res[key] = res[key] === "" ? "no data" : res[key];
        }

        return {
            name: res.name,
            height: res.height,
            mass: res.mass,
            hairColor: res.hair_color,
            skinColor: res.skin_color,
            eyeColor: res.eye_color,
            birthYear: res.birth_year,
            gender: res.gender,
        };
    }

    btn.addEventListener("click", () => {
        fetch("https://swapi.dev/api/people/1/")
            .then((res) => res.json())
            .then((data) => {
                const character = transform(data);

                infoBlock.innerHTML = `
                <span>Character data</span><br>
                Name: ${character.name}<br>
                Mass: ${character.mass}<br>
                Hair color: ${character.hairColor}<br>
                Skin color: ${character.skinColor}<br>
                Eye color: ${character.eyeColor}<br>
                Birth year: ${character.birthYear}<br>
                Gender: ${character.gender}<br>
                `;
            });
    });
}
