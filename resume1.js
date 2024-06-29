document.addEventListener('DOMContentLoaded', function() {
    // Retrieve data from localStorage
    let name = localStorage.getItem("name");
    let designation = localStorage.getItem("designation");
    let aboutMe = localStorage.getItem("about_me");
    let experience = localStorage.getItem("experience");
    let email = localStorage.getItem("email");
    let phone = localStorage.getItem("phone");
    let inputFile = localStorage.getItem("inputFile");

    // Parse JSON data
    let languages = JSON.parse(localStorage.getItem("languages")) || [];
    let programmingLanguages = JSON.parse(localStorage.getItem("programmingLanguages")) || [];
    let interests = JSON.parse(localStorage.getItem("interests")) || [];

    // Populate the resume with the data
    if (name) document.getElementById("name").innerText = name;
    if (designation) document.getElementById("designation").innerText = designation;
    if (aboutMe) document.getElementById("aboutMe").innerText = aboutMe;
    if (experience) document.getElementById("experience").innerText = experience;
    if (email) document.getElementById("email").innerText = email;
    if (phone) document.getElementById("phone").innerText = phone;
    if (inputFile) document.getElementById("pimage").src = inputFile;

    // Populate languages
    let languagesList = document.getElementById("languages-list");
    languages.forEach(language => {
        let li = document.createElement("li");
        li.innerHTML = `<span>${language.language}</span><span class="percente"><div style="width: ${getProficiencyPercentage(language.level)}%;"></div></span>`;
        languagesList.appendChild(li);
    });

    // Populate programming languages
    let programmingLanguagesList = document.getElementById("programming-languages-list");
    programmingLanguages.forEach(pl => {
        let div = document.createElement("div");
        div.classList.add("box");
        div.innerHTML = `<h4>${pl.p_language}</h4><div class="percente"><div style="width: ${pl.percentage}%;"></div></div>`;
        programmingLanguagesList.appendChild(div);
    });

    // Populate interests
    let interestsList = document.getElementById("interests-list");
    interests.forEach(interest => {
        let li = document.createElement("li");
        li.innerHTML = `<i class="fa fa-star" aria-hidden="true"></i>${interest}`;
        interestsList.appendChild(li);
    });
});

function getProficiencyPercentage(level) {
    switch (level.toLowerCase()) {
        case 'beginner': return 25;
        case 'intermediate': return 50;
        case 'advanced': return 75;
        case 'fluent': return 100;
        default: return 0;
    }
}
