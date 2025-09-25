const skills = [
     {
        name: "tech/git",
        text: "Git",
        color: "#F05032",
        proficiency: "Intermediate"
    },
    {
        name: "tech/github",
        text: "Github",
        color: "#181717",
        proficiency: "Intermediate"
    },
    {
        name: "tech/workflows",
        text: "CI/CD",
        color: "#F05032",
        proficiency: "Exploring it"
    },
];

const versionControlSkills = new Map();
skills.map(skill => {
    versionControlSkills.set(skill.text.toLowerCase(), skill)
});

export default versionControlSkills;