import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";

function App() {
  // let cities = ["Delhi", "Pune", "Mumbai", "Chennai", "Bangalore"];
  //   cities = []; // Comment this line to see the list items
  // const handleSelectItem = (item: string, index: number) => {
  // console.log(`Selected item: ${item} at index: ${index}`);
  // };
  const [isVisible, setVisibility] = useState(false);
  const handleBtnClick = () => {
    setVisibility(!isVisible);
  };
  const handleAlertClose = () => {
    setVisibility(false);
  };
  return (
    <div>
      {isVisible && (
        <Alert onClose={handleAlertClose}>
          React <span className="text-decoration-underline">World</span>
        </Alert>
      )}
      <Button color="primary" onClick={handleBtnClick}>
        Hello world
      </Button>
    </div>
  );
}

export default App;
