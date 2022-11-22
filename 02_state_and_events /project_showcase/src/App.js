import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

import projects from "./projects";

// Hook Imports

import { useState } from "react";

const App = () => {
  
  const [ isDarkMode, setDarkMode ] = useState(true);
  
  const handleClick = () => {
    
    // When we make a State change, this causes our Components
    // to re-render.
    setDarkMode(!isDarkMode)
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} handleClick={handleClick}/>
      <ProjectForm />
      <ProjectList projects={projects} />
      {/* <SomeOtherComponent projects={projects} /> */}
    </div>
  );
};

export default App;
