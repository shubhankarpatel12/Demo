document.getElementById("add-language-button").onclick = function() {
    let languageSection = document.getElementById("language-section");
    let newLanguageDiv = document.createElement("div");
    newLanguageDiv.innerHTML = `
        <label for="language">Language</label>
        <input type="text" class="language"><br>
        <label for="level">Level</label>
        <input type="text" class="level"><br>
    `;
    languageSection.appendChild(newLanguageDiv);
};

document.getElementById("add-programming-language-button").onclick = function() {
    let programmingLanguageSection = document.getElementById("programming-language-section");
    let newProgrammingLanguageDiv = document.createElement("div");
    newProgrammingLanguageDiv.innerHTML = `
        <label for="p_language">Programming Language:</label>
        <input type="text" class="p_language">
        <label for="percentage">Proficiency (%):</label>
        <input type="number" class="percentage" name="percentage" min="0" max="100"><br>
    `;
    programmingLanguageSection.appendChild(newProgrammingLanguageDiv);
};

document.getElementById("add-interest-button").onclick = function() {
    let interestsSection = document.getElementById("interests-section");
    let newInterestDiv = document.createElement("div");
    newInterestDiv.innerHTML = `<input type="text" class="interests"><br>`;
    interestsSection.appendChild(newInterestDiv);
};

document.getElementById("mySubmit").onclick = function(event) {
    event.preventDefault(); // Prevent form submission

    // Collect data from form fields
    let name = document.getElementById("name").value;
    let designation = document.getElementById("designation").value;
    let about_me = document.getElementById("aboutMe").value;
    let experience = document.getElementById("experience").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let inputFile = document.getElementById('input-file').files[0];

    // Collect languages
    let languages = [];
    document.querySelectorAll("#language-section > div").forEach(div => {
        let language = div.querySelector("input.language").value;
        let level = div.querySelector("input.level").value;
        if (language && level) {
            languages.push({ language, level });
        }
    });

    // Collect programming languages
    let programmingLanguages = [];
    document.querySelectorAll("#programming-language-section > div").forEach(div => {
        let p_language = div.querySelector("input.p_language").value;
        let percentage = div.querySelector("input.percentage").value;
        if (p_language && percentage) {
            programmingLanguages.push({ p_language, percentage });
        }
    });

    // Collect interests
    let interests = [];
    document.querySelectorAll("#interests-section > div").forEach(div => {
        let interest = div.querySelector("input.interests").value;
        if (interest) {
            interests.push(interest);
        }
    });

    // Store data in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("designation", designation);
    localStorage.setItem("about_me", about_me);
    localStorage.setItem("experience", experience);
    localStorage.setItem("languages", JSON.stringify(languages));
    localStorage.setItem("programmingLanguages", JSON.stringify(programmingLanguages));
    localStorage.setItem("interests", JSON.stringify(interests));
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    if (inputFile) {
        let reader = new FileReader();
        reader.onload = function (e) {
            localStorage.setItem('inputFile', e.target.result);
        };
        reader.readAsDataURL(inputFile);
    }

    // Redirect to display page
    window.location.href = "resume1.html";
};
