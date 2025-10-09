const skills = [
    {
        name: "tech/ec2",
        text: "AWS EC2",
        color: "#FC390E",
        proficiency: "Intermediate"
    },
    {
        name: "tech/aws",
        text: "AWS",
        color: "#F68F1E",
        proficiency: "Exploring it"
    },
    {
        name: "tech/s3",
        text: "AWS S3",
        color: "#2CA02C",
        proficiency: "Exploring it"
    },
];

const infrastructureSkills = new Map();
skills.map(skill => {
    infrastructureSkills.set(skill.text.toLowerCase(), skill)
});

export default infrastructureSkills;