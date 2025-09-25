const skills = [
    {
        name: "tech/microsoft-sql-server-2",
        text: "SQL",
        color: "#191970",
        proficiency: "Advanced"
    },
    {
        name: "tech/mysql",
        text: "MySQL",
        color: "#4479A1",
        proficiency: "Advanced"
    },
    {
        name: "tech/microsoft-sql-server-2",
        text: "SQL Server",
        color: "#E81123",
        proficiency: "Advanced"
    },
    {
        name: "tech/postgresql",
        text: "PostgreSQL",
        color: "#4169E1",
        proficiency: "Exploring it"
    },
    {
        name: "tech/supabase",
        text: "Supabase",
        color: "#3FCF8E",
        proficiency: "Exploring it"
    },
];

const databaseSkills = new Map();
skills.map(skill => {
    databaseSkills.set(skill.text.toLowerCase(), skill)
});

export default databaseSkills;