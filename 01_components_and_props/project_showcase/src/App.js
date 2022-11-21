// - Return the `Header`, `ProjectForm` and `ProjectList` components
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

// - Import / provide the array of `projects` to `ProjectList` as props

// projects.js
import projects from './projects';

// console.log(projects);

// const Title = () => <h1>Here's My Simple Title Component</h1>;

const App = () => {
  return (
    <>
      <h1 className="App">Project Showcase</h1>
      {/* <Title /> */}
      <Header />
      <ProjectForm />
      <ProjectList projects={projects}/>
    </>
  );
}

export default App;
