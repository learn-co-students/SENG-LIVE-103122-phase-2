import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {

  // Lifted searchQuery State from ProjectList to App
  const [searchQuery, setSearchQuery] = useState("");

  // Lifted isDarkMode State From Header to App
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Storing Our Data in State Enables Us
  // to Work with that Data In a More Flexible Way
  const [projects, setProjects] = useState([]);

    // Once We Enable a Controlled ProjectForm

      // [...projects, newProject]

  // Set Up a Callback Function Responsible for Updating 
  // Our isDarkMode State
  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // # Deliverable 1: Configure a <button> in our App 
  // that will use json-server to fetch projects 
  // and store them in state

  const fetchProjects = () => {
    // Specify Request URL (Endpoint)
    fetch('http://localhost:4000/projects')
      
      // Parsing Out the JSON Response into JS
      .then(res => res.json())
      
      // Set JS Data as New Value (Array) for Projects
      .then(data => {
        setProjects(data);
      });
  }

  // Set Up Callback Function to Update searchQuery State
  const handleOnChange = (e) => setSearchQuery(e.target.value);

  const searchResults = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // - Add an onClick event listener to the "Load Projects" 
  // button

  // - When the button is clicked, make a fetch 
  // request to "http://localhost:4000/projects"
  // and set the `projects` state to the value 
  // returned by the response

  return (
    <div className={ isDarkMode ? "App" : "App light"}>
      <Header 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={onToggleDarkMode} 
        
        // props object would end up being...
        // { isDarkMode: isDarkMode, onToggleDarkMode: onToggleDarkMode }
      />
      <ProjectForm />
      <button onClick={fetchProjects}>Load Projects</button>
      <ProjectList 
        handleOnChange={handleOnChange}
        searchResults={searchResults}
      />
    </div>
  );
};

export default App;
