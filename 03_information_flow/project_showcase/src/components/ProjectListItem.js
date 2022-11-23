import { useState } from "react";

const ProjectListItem = ({ name, image, link, about, phase }) => {

  // Making Copy of props Object
  // let myCopy = {...props}

  // console.log(myCopy)

  // If We Wanted const Protections For Attributes
  // const { id, name, about, phase, link, image } = project;

  // console.log(props);

  // let name = props.name;

  // name = "something else"
  
  // console.log(name);

  const [clapCount, setClapCount] = useState(0);

  const handleClap = () => setClapCount(clapCount + 1);

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button className="claps" onClick={handleClap}>
          👏{clapCount}
        </button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
      </footer>
    </li>
  );
}

export default ProjectListItem;
