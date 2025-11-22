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
    {
        name: "tech/azure",
        text: "Azure",
        color: "#007fff",
        proficiency: "Exploring it"
    },
    {
        name: "tech/terraform",
        text: "Terraform",
        color: "#7B42BC",
        proficiency: "Exploring it"
    },
    {
        name: "tech/docker",
        text: "Docker",
        color: "#E5F2FC",
        proficiency: "Exploring it"
    },
    {
        name: "tech/blobstorage",
        text: "Blob Storage",
        color: "#007FFF",
        proficiency: "Exploring it"
    },
    {
        name: "tech/queuestorage",
        text: "Queue Storage",
        color: "#007FFF",
        proficiency: "Exploring it"
    },
];

const infrastructureSkills = new Map();
skills.map(skill => {
    infrastructureSkills.set(skill.text.toLowerCase(), skill)
});

export default infrastructureSkills;