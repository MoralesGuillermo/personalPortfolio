function sortByPriority(projects){
    return projects.sort((a, b) => 
        a.frontmatter.priority - b.frontmatter.priority
    );
}

export {sortByPriority};