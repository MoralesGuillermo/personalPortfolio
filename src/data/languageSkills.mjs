const skills = [
    {
        name: "languages/spanish",
        text: "Spanish",
        color: "#F1BF00",
        proficiency: "Native"
    },
    {
        name: "languages/english",
        text: "English",
        color: "#0A3161",
        proficiency: "Native"
    },
    {
        name: "languages/japanese",
        text: "Japanese",
        color: "#BC002D",
        proficiency: "Intermediate"
    },
];

const languageSkills = new Map();
skills.map(skill => {
    languageSkills.set(skill.text.toLowerCase(), skill)
});

export default languageSkills;