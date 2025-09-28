// Tech skills I manage
// Data for Skills.astro

/* Properties 
    name: Icon's path (Check astro-icon for more details)
    text: Skill text
    color: Hex value to apply to the icon
*/
import backendSkills from "./backendSkills.mjs";
import frontendSkills from "./frontendSkills.mjs";
import databaseSkills from "./databaseSkills.mjs";
import infrastructureSkills from "./infrastructureSkills.mjs";
import languageSkills from "./languageSkills.mjs";
import miscellaneousSkills from "./miscellaneousSkills.mjs";
import versionControlSkills from "./versionControlSkills.mjs";


const skills = new Map([...backendSkills, ...frontendSkills, ...databaseSkills, ...infrastructureSkills, ...languageSkills, ...miscellaneousSkills, ...versionControlSkills])

export default skills;