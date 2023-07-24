import Dropdown from "./components/Dropdown";

function App() {
  const dropdownOptions = [
    "All products",
    "Photos",
    "Graphics",
    "Templates",
    "Plugins",
  ];

  return (
    <>
      <Dropdown options={dropdownOptions} />
    </>
  );
}

export default App;
