const skills = [
    {
        name: "tech/aws",
        text: "AWS",
        color: "#F68F1E",
        proficiency: "Exploring it"
    },
    {
        name: "tech/ec2",
        text: "AWS EC2",
        color: "#FC390E",
        proficiency: "Exploring it"
    },
];

const infrastructureSkills = new Map();
skills.map(skill => {
    infrastructureSkills.set(skill.text.toLowerCase(), skill)
});

export default infrastructureSkills;