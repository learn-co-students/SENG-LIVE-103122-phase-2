// Deliverable 4: Using the useParams hook, access the :id param from the URL
// to trigger appropriate GET requests

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const [claps, setClaps] = useState(0);
  const [project, setProject] = useState(null);
  
  // Add additional state to keep track of loading
  const [isLoaded, setIsLoaded] = useState(false);

  // Static Value
  // const id = 1;
  
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/projects/${id}`)
      .then((r) => r.json())
      .then((project) => {
        // console.log(project);

        // Update Value of project State from Null to {Object}
        setProject(project);

        // Once we have an object, updating isLoded from false to true
        setIsLoaded(!isLoaded);
      });
  }, []);

  // Issue => Attempting to Access Project Object Before It's Been
  // Set to Another Value than Null

  if (!isLoaded) return <h1>Loading...</h1>;
  
  // Issue => Attempting to Access Project Object Before It Has Been Set
  const { image, name, about, link, phase } = project;

  const handleClapClick = () => {
    setClaps((claps) => claps + 1);
  }

  return (
    <section>
      <div className="project-detail box">
        <div className="project-image">
          <img src={image} alt={name} />
          <button className="claps" onClick={handleClapClick}>
            👏{claps}
          </button>
        </div>
        <div className="details">
          <h2>{name}</h2>
          <p>{about}</p>
          {link ? (
            <p>
              <a target="_blank" rel="noreferrer" href={link}>
                Project Homepage
              </a>
            </p>
          ) : null}
          <div className="extra">
            <span className="badge blue">Phase {phase}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
