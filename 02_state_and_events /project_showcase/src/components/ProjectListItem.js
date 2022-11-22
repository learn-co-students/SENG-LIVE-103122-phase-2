import { useState } from "react";

const ProjectListItem = (props) => {
  
  console.log(props);

  // Set up State / Setter Function
  const [ clapCount, setClapCount ] = useState(0);

  // Set up Helper Function to handleClaps

  const handleClaps = () => {
    // Directly Mutate State (BAD)
    // return clapCount = clapCount + 1;
    
    // Utilize Our setterFunction to Update State (GOOD)
    setClapCount(clapCount + 1);
  }

  return (
    <h1>Test</h1>
    // <li className="card">
    //   <figure className="image">
    //     <img src={image} alt={name} />
    //     <button onClick={handleClaps}className="claps">👏{clapCount}</button>
    //   </figure>

    //   <section className="details">
    //     <h4>{name}</h4>
    //     <p>{about}</p>
    //     {link ? (
    //       <p>
    //         <a href={link}>Link</a>
    //       </p>
    //     ) : null}
    //   </section>

    //   <footer className="extra">
    //     <span className="badge blue">Phase {phase}</span>
    //   </footer>
    // </li>
  );
};

export default ProjectListItem;
