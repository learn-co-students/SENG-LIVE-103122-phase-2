import { useState } from "react";

const ProjectForm = ({ addNewProject }) => {

  const initialFormValues = {
    name: "",
    about: "",
    phase: "",
    link: "",
    image: ""
  }

  const [formData, setFormData] = useState(initialFormValues);

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value});
  }

  const handleFormSubmit = (e) => {      
    e.preventDefault();
    
    // const newProject = formData;

    // Deliverable 1: Persist the new project upon the 
    // `ProjectForm` submission

      // Send the new project data to the server using a 
      // `POST` fetch request

    // Optimistic Rendering
    // addNewProject(formData);
      
    const requestObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }

    fetch("http://localhost:4000/projects", requestObj)
      .then((res) => res.json())
      .then((newProject) => { 
        
        console.log(newProject);

        // Pessimistic Rendering
        addNewProject(newProject);

        // Optimistic Rendering
          // Function to Clean Up Optimistic Rendering from Before

        setFormData(initialFormValues);
    });
  }

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleFormSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          value={formData.name}
          onChange={handleFormData}
        />

        <label htmlFor="about">About</label>
        <textarea 
          id="about" 
          name="about"
          value={formData.about}
          onChange={handleFormData}
        />

        <label htmlFor="phase">Phase</label>
        <select 
          name="phase" 
          id="phase"
          value={formData.phase}
          onChange={handleFormData}
        >
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input 
          type="text" 
          id="link" 
          name="link" 
          value={formData.link}
          onChange={handleFormData}
        />

        <label htmlFor="image">Screenshot</label>
        <input 
          type="text" 
          id="image" 
          name="image" 
          value={formData.image}
          onChange={handleFormData}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;