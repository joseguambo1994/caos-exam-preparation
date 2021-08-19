import { useState } from "react";
const Question10 = () => {

    const [ clockRate, setClockRate ] = useState(0);
    const [ rasCycles, setRasCycles ] = useState(0);
    const [ casCycles, setCasCycles ] = useState(0);
    const [ firstReadTime, setFirstReadTime ] = useState(0);
    const [ secondThirdForthReadTime, setSecondThirdForthReadTime ] = useState(0);
    const [ minCycleTime, setMinCycleTime ] = useState(0);
    const [ burstMode, setBurstMode ] = useState(0);

    return(
        <div>
            <div>
                <label>
                    Question 10
                </label>
            </div>
            <div>
                <label>CLOCK RATE</label>
                <input type="number" onChange={(e)=>setClockRate(e.target.value)}></input>
                <label>  { clockRate }</label>
            </div>
        </div>
    );
}
export default Question10;