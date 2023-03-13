import BoxGenerator from "./BoxGenerator";
import ListGenerator from "./ListGenerator";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  // useRef hook helps us to easily access current value
  const boxes = useRef();
  const [numBoxes, setNumBoxes] = useState(0);
  const [selectedBoxes, setSelectedBoxes] = useState([]);

  const updateBoxes = () => {
    let num = boxes.current.value;

    if (num === "") {
      setNumBoxes(0);
    }

    // check if we have a number, that it's an int, and that it's positive
    else if (
      !isNaN(num) &&
      Number.isInteger(parseInt(num)) &&
      parseInt(num) > 0
    ) {
      // deal with leading zeros edge case
      if (num[0] !== "0") {
        setNumBoxes(num)
      }
    }
  };

  return (
    <main id="grid-container">
      <div className="grid-item" id="form">
        <form onChange={updateBoxes}>
          <label>Input number of boxes to generate:</label>
          <input
            name="box-form"
            type="text"
            placeholder="# Boxes"
            id="input"
            ref={boxes}
          ></input>
        </form>
      </div>
      <ListGenerator list={selectedBoxes} > </ListGenerator>
      <BoxGenerator num={numBoxes} select={selectedBoxes} setSelect={setSelectedBoxes}></BoxGenerator>
      
    </main>
  );
}

export default App;
