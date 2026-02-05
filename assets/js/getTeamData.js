


document.addEventListener("DOMContentLoaded", () => {
    const lang = document.documentElement.lang || "en"; // ar | en

    fetch(`../locales/${lang}.json`)
        .then(res => res.json())
        .then(data => {

            const team = data.team;

            document.getElementById("teamTitle").textContent = team.title;
            document.getElementById("teamDescription").textContent = team.description;
            document.getElementById("techTitle").textContent = team.techTitle;

            const techList = document.getElementById("techList");
            techList.innerHTML = `
            <li><strong>Front-end:</strong> ${team.technologies.frontend}</li>
            <li><strong>Back-end:</strong> ${team.technologies.backend}</li>
            <li><strong>Mobile Apps:</strong> ${team.technologies.mobile}</li>
            <li><strong>Databases & Cloud:</strong> ${team.technologies.cloud}</li>
            <li><strong>Design & Management:</strong> ${team.technologies.tools}</li>
        `;
        });
});