const skills = [
    {
        name: "tech/python",
        text: "Python",
        color: "#3776AB",
        proficiency: "Advanced"
    },
    {
        name: "tech/php",
        text: "PHP",
        color: "#777BB4",
        proficiency: "Advanced"
    },
    {
        name: "tech/fastapi",
        text: "Fastapi",
        color: "#009688",
        proficiency: "Intermediate"
    },
    {
        name: "tech/java",
        text: "Java",
        color: "#f89820",
        proficiency: "Intermediate"
    },
    {
        name: "tech/springboot",
        text: "Springboot",
        color: "#6DB33F",
        proficiency: "Intermediate"
    },
    {
        name: "tech/laravel",
        text: "Laravel",
        color: "#FF2D20",
        proficiency: "Intermediate"
    },
    {
        name: "tech/nodedotjs",
        text: "Node JS",
        color: "#5FA04E",
        proficiency: "Intermediate"
    },
    {
        name: "tech/azurefunctions",
        text: "Azure Functions",
        color: "#008AD7",
        proficiency: "Intermediate"
    },

];

const backendSkills = new Map();
skills.map(skill => {
    backendSkills.set(skill.text.toLowerCase(), skill)
});

export default backendSkills;