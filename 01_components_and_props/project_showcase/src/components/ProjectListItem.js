const ProjectListItem = ({ project }) => {
    
    const { about, name, phase, link, image } = project;

    // const name = project.name;
    // const about = project.about;
    // ...

    // console.log(name);
    // console.log(about);
    
    return (
        <li>
            <figure>
                <img src={image} alt={`Project Title: ${name}`} />
            </figure>
            <article>
                <h4>{name}</h4>
                <p>{about}</p>
                <br />
            </article>
        </li>
    );
}

export default ProjectListItem;