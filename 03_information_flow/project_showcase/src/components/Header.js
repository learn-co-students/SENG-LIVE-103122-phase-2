const Header = ({ isDarkMode, onToggleDarkMode }) => {
  
  // Destructure Props Object to Offer const Protections
  // const { isDarkMode, onToggleDarkMode } = props;
  
  // const [isDarkMode, setIsDarkMode] = useState(true);

  // const handleClick = () => setIsDarkMode(!isDarkMode);

  // isDarkMode = "something else";

  // console.log(isDarkMode);

  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  // Deliverable 2: Use Inverse Data flow to implement 
  // Light-Dark mode

  // - Refact isDarkMode state from the `Header` 
  // component to the `App` component.

  // - Create a callback function that updates 
  // `isDarkMode` and pass the callback function 
  // as a prop to the `Header` component

  // - Inside the `Header` component, invoke the 
  // callback function in place of updating the 
  // state

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
    </header>
  );
};

export default Header;
