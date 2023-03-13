function BoxGenerator(props) {
  const selectedBoxes = props.select;
  const setSelectedBoxes = props.setSelect;

  function isPrime(num) {
    // 1 is not prime
    if (num <= 1) {
      return false;
    }
    // 2 and 3 are prime
    else if (num <= 3) {
      return true;
    }
    // Check if the number is divisible by 2 or 3
    else if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }
    // Check if the number is divisible by any odd number greater than 3 up to the square root of the number
    for (let i = 5; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  // determine what class this box should be based on its number value
  function oddEvenPrime(num) {
    if (isPrime(num)) {
      return "primeBox";
    } else if (num % 2 === 0) {
      return "evenBox";
    }
    return "oddBox";
  }

  function handleBoxClick(event) {
    const currButton = event.target;
    const val = parseInt(currButton.id);

    // adding to list
    if (currButton.style.border === "") {
      currButton.style.border = "4px solid yellow";
      setSelectedBoxes([...selectedBoxes, val].sort((a, b) => parseInt(a) - parseInt(b)));
    } 
    // removing from list
    else { 
      currButton.style.border = "";
      const index = selectedBoxes.indexOf(val);
      const updatedSelectedBoxes = [...selectedBoxes];
      updatedSelectedBoxes.splice(index, 1);
      setSelectedBoxes(updatedSelectedBoxes);
    }
  }

  function GenerateBoxes(num) {
    const boxNumbers = Array.from(
      { length: num },
      (item, index) => (item = index + 1)
    );
    let ret = boxNumbers.map((element) => (
      <button
        className={oddEvenPrime(element)}
        key={element}
        id={element}
        onClick={handleBoxClick}
      >
        {element}
      </button>
    ));
    return ret;
  }

  return (
    <div className="grid-item" id="box-area">
      {GenerateBoxes(props.num)}
    </div>
  );
}

export default BoxGenerator;
