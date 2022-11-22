import ProjectListItem from "./ProjectListItem";
import { useState } from "react";

const ProjectList = ({ projects }) => {

  // Set Up State to Manage searchQuery
  const [ searchQuery, setSearchQuery ] = useState("");

  const filteredListItems = projects.filter(project => {

    // Filter Through Each Project and Determine
    // Whether the project.name includes searchQuery

    // .includes
    // .toLowerCase / .toUpperCase => Flatten searchQuery + project.name
  
    // return project.name.toUpperCase().includes(searchQuery.toUpperCase());
    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const projectListItems = filteredListItems.map((project) => (
    // <ProjectListItem key={project.id} project={project} />
    <ProjectListItem 
      key={project.id} 
      
      {...project} 
      
      // name={project.name}
      // about={project.about}
      // phase={project.phase}
      // link={project.link}
      // image={project.image}

      // ...
    />
  ));

  const handleSearchQuery = (e) => {
    // console.log(e.target.value)

    setSearchQuery(e.target.value);
  }

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input onChange={handleSearchQuery}type="text" placeholder="Search..." />

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
