// - Accept the props (projects) provided to the component

// - Destructure `projects` from the props object

// - Map over the `projects` array to render a `ProjectListItem` component for each project:

//   - Provide a key prop set to the `project.id` value

//   - Provide each `project` object as a prop named `project`

import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects }) => {
    
    // Without Destructured Props
    // console.log(props.projects);
    
    // console.log(projects);
    
    // Callback Function
    // const myFunction = () => {
    //     // Some
    //     // Actions
    //     // Here
    // };

    // Component Function
    // const Title = () => <h1>Here's My Simple Title Component</h1>;

    const projectListItems = projects.map(project => {
        // console.log(project);
        return <ProjectListItem key={project.id} project={project}/>
    });

    return (
        <ul>
            { projectListItems }
            
            {/* <ProjectListItem /> */}
        </ul>
    );
}

export default ProjectList;