import React, { useState } from 'react';
 function Week1Component() {
   const [frequencyHz, setFrequencyHz] = useState(100000000);
   const [timeSeconds, setTimeSeconds] = useState(0);
   const [ numberOfCyclesPerInstruction, setNumberOfCyclesPerInstruction ] = useState(0);
   const [timeOfOperation, setTimeOfOperation] = useState(0);
 
   const onChangeHandler = e => {
       setFrequencyHz(e.target.value);
       setTimeSeconds (1/e.target.value * 1000000000);
   }

   const onCycleMicrosequenceChange = e => {
      setNumberOfCyclesPerInstruction(e.target.value);
      setTimeOfOperation(e.target.value * timeSeconds);
   }

   return (
     <div>
       <div>
         <p>You clicked {frequencyHz} times</p>
         <input
           type="number"
           onChange={onChangeHandler}
           value={frequencyHz}
         ></input>
         <label>
           {" "}
           Result: t=1/f t=1/{frequencyHz} t={1 / frequencyHz}
         </label>
         <label> {timeSeconds } nano seconds</label>
       </div>
       <div>
       <label> Add the number of cycles of the microsequence:</label>
       <input
           type="number"
           onChange={onCycleMicrosequenceChange}
           value={ numberOfCyclesPerInstruction }
         ></input>
         <label>For a microsequence of { numberOfCyclesPerInstruction } 
         cycles per Instruction, a total time of { timeOfOperation } nano seconds is required 
         </label>
       </div>
     </div>
   );
 }

 export default Week1Component;