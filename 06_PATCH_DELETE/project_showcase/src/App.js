import { useEffect, useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectEditForm from "./components/ProjectEditForm";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState(null);

  // Methods to Update projects State 

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((resp) => resp.json())
      .then((projects) => setProjects(projects));
  }, []);
  
  const onAddProject = (newProj) => {
    setProjects((projects) => [...projects, newProj]);
  };

  const handleUpdate = (updatedProj) => {
    // Find updateProj in projects

      // .map Over projects / Capturing the Return Value (New Array)

    // console.log(updatedProj);

    const updatedProjects = projects.map(originalProject => {
      if (originalProject.id === updatedProj.id) {
        
        console.log("MATCH FOUND!");
        
        return updatedProj;
      } else {
        return originalProject;
      }
    });

    // Update projects State to Include Updated Project in Place of 
    // Original Project 
    setProjects(updatedProjects);
  }

  const handleDelete = (deletedProj) => {

    //  The goal is to return a new array with the deleted project excluded
    const updatedProjects = projects.filter(originalProject => {
        return deletedProj.id !== originalProject.id;
    });

    setProjects(updatedProjects);
  }

  // -----------------------

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  const completeEditing = () => {
    setProjectId(null);
  };

  const enterProjectEditModeFor = (projectId) => {
    setProjectId(projectId);
  };

  const renderForm = () => {
    if (projectId) {
      return (
        <ProjectEditForm
          projectId={projectId}
          completeEditing={completeEditing}
          handleUpdate={handleUpdate}
        />
      );
    } else {
      return <ProjectForm onAddProject={onAddProject} />;
    }
  };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      {renderForm()}
      <ProjectList
        projects={projects}
        enterProjectEditModeFor={enterProjectEditModeFor}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
