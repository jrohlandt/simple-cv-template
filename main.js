// import data from "./data/sample-data.json" with {type: "json"};
import data from "./data/fullstack-data-1.json" with {type: "json"};

console.log(data);

// NAME
const nameEl = document.getElementById('name');
nameEl.innerHTML = data.name;

// LOCATION
const locationEl = document.getElementById('location');
locationEl.innerHTML = data.location;

// CONTACT
const contactEl = document.getElementById('contact');
contactEl.innerHTML = data.contact;

// SUMMARY
const summaryEl = document.getElementById('summary');
summaryEl.innerHTML = data.summary;

// SKILLS
const skillsEl = document.getElementById('skills');
let skillsText = "";
data.skills.forEach((line) => {
    skillsText += line + '<br>';
});
skillsEl.innerHTML = skillsText;

// WORK EXPERIENCE
const workEl = document.getElementById('work');
const createWorkExperienceCard = (exp, bottomSpacing=false) => {
    
    let card = `
    <div class="work-experience-card ${bottomSpacing ? 'space-bottom' : ''}"> 
        <div class="experience-heading">
            <a href="${exp.companyUrl}" target="_blank"><h3>${exp.companyName}</h3></a> 
            <span>${exp.duration}</span>
        </div>
        <div class="experience-subheading">
            <div class="role">${exp.role}</div>
            <div class="location-type">${exp.locationType}</div>
        </div>
        <ul>
    `;

    exp.bulletPoints.forEach(b => {
        card += `<li>${b}</li>`;
    });

    card += `
        </ul>
    </div>
    `;

    const el = document.createElement('li');
    el.innerHTML = `<li>${card}</li>`;
    workEl.appendChild(el);
}


data.workExperience.forEach((exp, i, arr) => {
    createWorkExperienceCard(exp, i !== arr.length - 1);
});

// EDUCATION
const educationEl = document.getElementById('education');
const createEducationCard = (edu, bottomSpacing=false) => {
    let card = `
        <div>
            <b>${edu.instituteName}: </b> ${edu.qualification}
        </div>
    `;

    const el = document.createElement('li');
    el.innerHTML = `<li>${card}</li>`;
    educationEl.appendChild(el);
};

data.education.forEach((edu, i, arr) => {
    createEducationCard(edu, i !== arr.length - 1);
});

