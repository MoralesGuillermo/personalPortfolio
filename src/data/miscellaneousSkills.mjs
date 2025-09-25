const skills = [
    {
        name: "tech/linux",
        text: "Linux",
        color: "#FCC624",
        proficiency: "Intermediate"
    },
        {
        name: "tech/selenium",
        text: "Selenium",
        color: "#43B02A",
        proficiency: "Exploring it"
    },
];

const miscellaneousSkills = new Map();
skills.map(skill => {
    miscellaneousSkills.set(skill.text.toLowerCase(), skill)
});

export default miscellaneousSkills;