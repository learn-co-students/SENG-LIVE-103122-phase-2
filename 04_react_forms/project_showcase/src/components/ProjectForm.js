import { useState } from "react";

const ProjectForm = ({ addNewProject }) => {
  
  // Deliverable 1: Make the `ProjectForm` component a 
  // controlled component

    // Initialize state for all the form fields found 
    // in the component

      // Not Best Practice (Individual States)
      // const [ name, setName ] = useState("");
      // const [ about, setAbout ] = useState(""); 

      const initialFormValues = {
        name: "",
        about: "",
        phase: "",
        link: "",
        image: ""
      }
    
      // Best Practice (One State - Object)
      const [ formData, setFormData ] = useState(initialFormValues);


    // Add an `onChange` event to each field that will 
    // update state associated to the field that is 
    // interacted with

      // Not Best Practice (Individual States)
      // const handleNameInput = (e) => {
      //   // console.log(e.target.value);

      //   setName(e.target.value);
      // }

      // const handleAboutInput = (e) => {
      //   // console.log(e.target.value);

      //   setAbout(e.target.value);
      // }

      // Best Practice (One State - Object)
      const handleFormData = (e) => {
        // How can I pull / set consts for "name" + "value" from e.target?
        const { name, value } = e.target;

        // console.log(name);
        // console.log(value);

        // When we invoke setFormData, we want to provide a newObject
        // as the argument.

        // Provide a `value` attribute to each form field 
        // that will return the associated piece of state
        setFormData({ ...formData, [name]: value});
      }

    // Add an `onSubmit` event handler to the form
    const handleFormSubmit = (e) => {
      
      // e => submit Event
      e.preventDefault();

      // Pull All Values from formData State (Object)
      const newProject = formData;

      // Merge newProject into projects State (Array)

      addNewProject(newProject);

      // Clear Out Remaining Input Values
      setFormData(initialFormValues);
    }



  return (
    <section>

      {/* Preview of Possible Feature */}
      {/* <h1>{formData.name}</h1> */}

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
