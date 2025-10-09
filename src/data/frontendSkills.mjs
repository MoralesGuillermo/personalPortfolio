const skills = [
    {
        name: "tech/html5",
        text: "HTML",
        color: "#E34F26",
        proficiency: "Advanced",
    },
    {
        name: "tech/css",
        text: "CSS",
        color: "#663399",
        proficiency: "Advanced",
    },
    {
        name: "tech/js",
        text: "Javascript",
        color: "#F7DF1E",
        proficiency: "Advanced",
    },
    {
        name: "tech/bootstrap",
        text: "Bootstrap",
        color: "#7952B3",
        proficiency: "Advanced",
    },
    {
        name: "tech/tailwindcss",
        text: "Tailwind",
        color: "#06B6D4",
        proficiency: "Intermediate",
    },
    {
        name: "tech/astro",
        text: "Astro JS",
        color: "#BC52EE",
        proficiency: "Intermediate",
    },
];

const frontendSkills = new Map();
skills.map(skill => {
    frontendSkills.set(skill.text.toLowerCase(), skill)
});

export default frontendSkills;