import { useEffect, useState } from "react";

const Question7 = () => {

    const [ percentageOfCodeCanBeOptimized, setPercentageOfCodeCanBeOptimized ] = useState(0);
    const [ maxSpeedupAmdahlLaw, setMaxSpeedupAmdahlLaw ] = useState(0);
    const [ factorOfSpeedupForOptimizableCode, setFactorOfSpeedupForOptimizableCode ] = useState(0);
    const [ actualSpeedUp, setActualSpeedUp] =useState(0);

    useEffect(()=>{
        setMaxSpeedupAmdahlLaw((1/ (1- (percentageOfCodeCanBeOptimized/100) )).toFixed(2));
    },[percentageOfCodeCanBeOptimized]);

    useEffect(()=>{
        setActualSpeedUp((1/ (1- (percentageOfCodeCanBeOptimized/100) + (percentageOfCodeCanBeOptimized/100)/factorOfSpeedupForOptimizableCode ) ).toFixed(2));
    },[percentageOfCodeCanBeOptimized,factorOfSpeedupForOptimizableCode]);

    return(
        <div>
            <div> Question 7 </div>
            <div>                
                <label>
                A computer system executes a program in which 30% of the code may be optimised using parallelism. Selecting appropriate methods, analyse this system in terms of the following criteria
                ●	The maximum possible speedup due to optimisation giving your answer to the nearest two decimal places.
                ●	The actual speedup obtained if the optimizable code can be speeded up by a factor of two, analyse, giving the result to the nearest two decimal places. 
                When answering this question ensure you clearly label your responses to indicate which part or element of the answer you are referring to in each case.
                </label>
            </div>
            <div>
                <label>
                    Percentage of code that may be optimized using parallelism :
                </label>
                <input onChange={(e)=>{ setPercentageOfCodeCanBeOptimized(e.target.value) }}></input>
                <label >
                    { percentageOfCodeCanBeOptimized } %
                </label>
                <label> Formula: Amdahl’s Law, max speedup = 1 / (1-P) ,
                    where P is the percentage of optimisable code 
                </label>
                <label> Maximum possible speedup (due to optimisation) {maxSpeedupAmdahlLaw} </label>
                <label>Factor of Speedup for Optimizable Code: {factorOfSpeedupForOptimizableCode} [adimensional] </label>
                <input onChange={(e) => { setFactorOfSpeedupForOptimizableCode(e.target.value) }}>
                </input>
                <div>
                    <label>{actualSpeedUp}</label>
                </div>
            </div>
        </div>    
    );
}
export default Question7;
