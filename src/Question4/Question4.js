import { useState, useEffect } from "react";
const Question4 = () => {
  const [
    numberOfCyclesSavedOnCorrectPrediction,
    setNumberOfCyclesSavedOnCorrectPrediction,
  ] = useState(0);
  const [
    numberOfCyclesCostOnWrongPrediciton,
    setNumberOfCyclesCostOnWrongPrediciton,
  ] = useState(0);
  const [
    probabilityOfOcurrenceForCorrectPrediction,
    setProbabilityOfOcurrenceForCorrectPrediction,
  ] = useState(0);
  const [ numberOfCyclesSaved, setNumberOfCyclesSaved] = useState(0);
  const [ numberOfCyclesWasted, setNumberOfCyclesWasted] = useState(0);

  
  const [ overallGain, setOverallGain ] = useState(0);

  useEffect(() => {
    setOverallGain( Math.round(numberOfCyclesSaved-numberOfCyclesWasted) );
    }, [numberOfCyclesSaved, numberOfCyclesWasted]);

  function handleCorrectChange(e){
    setNumberOfCyclesSaved(e.target.value/100 * numberOfCyclesSavedOnCorrectPrediction );
  }

  function handleWrongChange(e){
    setNumberOfCyclesWasted((1-e.target.value/100 ) * numberOfCyclesCostOnWrongPrediciton );
  }

  return (
    <div>
        <div>Question 4</div>
      <label>
        A processor uses branch prediction in an attempt to improve performance.
        A correctly predicted branch saves 3 clock cycles, and a mis-prediction
        costs 2 cycles. Show an analysis of these two cases and determine the
        overall gain for correctly predicting 40% and 80% of branches
        respectively
      </label>
      <div>
        <label>Branch correctly predicted savings: (# of cycles) </label>
        <input
          type="number"
          value={numberOfCyclesSavedOnCorrectPrediction}
          onChange={(e) =>
            {setNumberOfCyclesSavedOnCorrectPrediction(e.target.value);
                handleCorrectChange(e);
            }
          }
        ></input>
        <label> # of cycles: {numberOfCyclesSavedOnCorrectPrediction} </label>
      </div>

      <div>
        <label>Branch correctly predicted savings: (# of cycles)</label>
        <input
          type="number"
          value={numberOfCyclesCostOnWrongPrediciton}
          onChange={(e) =>
            {setNumberOfCyclesCostOnWrongPrediciton(e.target.value);
                handleWrongChange(e)}
          }
        ></input>
        <label> # of cycles: {numberOfCyclesCostOnWrongPrediciton} </label>
      </div>

      <div>
        <label>Probability of a branch being correctly predicted (%)</label>
        <input
          type="number"
          value={probabilityOfOcurrenceForCorrectPrediction}
          onChange={(e) =>
            {setProbabilityOfOcurrenceForCorrectPrediction(e.target.value);
                handleWrongChange(e);
                handleCorrectChange(e);
            }
          }
        ></input>
        <label>{probabilityOfOcurrenceForCorrectPrediction} % </label>
      </div>


        <div>
            <label>Overall gain = (Hit-Rate x Saving) - (miss-rate x penalty) </label>
        </div>

      <div>
        <label> Answer: </label>
        <label> Number of cycles saved : {numberOfCyclesSaved}</label>
        <label> Number of cycles wasted: {numberOfCyclesWasted}</label>
        <label> overall gain : {overallGain} </label>
      </div>

      <img src="../logo.svg" alt="" ></img>
    </div>
  );
};
export default Question4;
