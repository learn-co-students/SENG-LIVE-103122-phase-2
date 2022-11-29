import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {

// Deliverable 2: Implement useEffect in App component 
// to load projects

  // Import the `useEffect` hook from the React library

  // Invoke `useEffect` and make a `GET` request using 
  // the `fetch` method

    // useEffect(CB Function (Behavior), Dependency Array (Optional))
    
    useEffect(() => {
      // console.log("SIDE EFFECT FIRED!");
      
      fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
    }, []);

    // Omit DA => No Constraints Around Side Effect Behavior(s)
    // [] => Only Fire Off Side Effect ONCE
    // [some, state, variables] => Fire Off Side Effect When ANY Change

  // Update `projects` state upon successful response 
  // from the server

// Deliverable 3: Demonstrate the order of operations 
// between rendering a component and running the side 
// effect

  // Place a console.log() inside the `App` component as 
  // well as the `useEffect` method
  
  // Open up the devtools to observe when each phase of 
  // the component will occur 

  // console.log("COMPONENT RENDERED!");

  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const addNewProject = newProject => {
    const newProjectCollection = [...projects, newProject];
    setProjects(newProjectCollection);
  }

  // const handleClick = () => {
  //   fetch("http://localhost:4000/projects")
  //     .then((res) => res.json())
  //     .then((projects) => setProjects(projects));
  // };

  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <ProjectForm addNewProject={addNewProject}/>
      {/* <button onClick={handleClick}>Load Projects</button> */}
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;