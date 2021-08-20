import { useEffect, useState } from "react";
const Question10 = () => {

    const [ clockRate, setClockRate ] = useState(0);
    const [ rasCycles, setRasCycles ] = useState(0);
    const [ casCycles, setCasCycles ] = useState(0);
    const [ firstReadTime, setFirstReadTime ] = useState(0);
    const [ secondReadTime, setSecondReadTime ] = useState(0);
    const [ thirdReadTime, setThirdReadTime ] = useState(0);
    const [ forthReadTime, setForthReadTime ] = useState(0);
    //const [ subsequentReadTime, setSubsequentReadTime ] = useState(null);
    const [ minCycleTime, setMinCycleTime ] = useState(0);
    const [ burstMode, setBurstMode ] = useState(0);
    const [ isBurstModeEnabled, setIsBurstModeEnabled ] = useState(true);

    const [ totalCycles, setTotalCycles ] = useState(0);
    const [ readsPerSecondWithoutBurst, setReadsPerSecondWithoutBurst ] = useState(0);

    useEffect(() => {
        if( (secondReadTime !== 0 || secondReadTime !== null) && 
        (thirdReadTime !== 0 || thirdReadTime !== null) && 
        (secondReadTime !== 0 || secondReadTime !== null) ){
            setTotalCycles( rasCycles + casCycles + firstReadTime 
                + secondReadTime + thirdReadTime + forthReadTime);
        }else {
            setTotalCycles( rasCycles + casCycles + firstReadTime);
        }
    }, [ rasCycles, casCycles, firstReadTime, secondReadTime, thirdReadTime, forthReadTime ]);

    useEffect(() => {
        if( totalCycles < minCycleTime ){
            setTotalCycles(minCycleTime);
        }else{
            setTotalCycles(totalCycles);
        }
    },[ minCycleTime,totalCycles ]);

    useEffect(() => {
        if(!isBurstModeEnabled){
            setReadsPerSecondWithoutBurst( clockRate / totalCycles );
        }else{
            setReadsPerSecondWithoutBurst( clockRate / (totalCycles/4) );
        }
    },[ totalCycles, clockRate, isBurstModeEnabled, readsPerSecondWithoutBurst ]);

    return(
        <div>
            <div>
                <label>
                    Question 10
                </label>
            </div>
            <div>
                <label>
                Given two memory systems, as presented below, give an analysis of their key characteristics with respect to data read behaviour. Compare and comment upon their relative performances, and identify which system offers the best performance if initial access time is the primary concern. Show any assumptions and calculations used.
                </label>
            </div>
            <div>
                <label>CLOCK RATE</label>
                <input type="number" onChange={(e)=>setClockRate(parseInt(e.target.value))}></input>
                <label>  { clockRate + 'MHz' }</label>
            </div>
            <div>
                <label>RAS Cycles (Row Address Strobe)</label>
                <input type="number" onChange={(e)=>setRasCycles(parseInt(e.target.value))}></input>
                <label>  { rasCycles }</label>
            </div>
            <div>
                <label>CAS Cycles (Column Address Strobe)</label>
                <input type="number" onChange={(e)=>setCasCycles(parseInt(e.target.value))}></input>
                <label>  { casCycles }</label>
            </div>
            <div>
                <label>1st Read Time</label>
                <input type="number" onChange={(e)=>setFirstReadTime(parseInt(e.target.value))}></input>
                <label>  { firstReadTime }</label>
            </div>
            <div>
                <label>2nd, 3rd, 4th Read Time</label>
                <input type="number" 
                onChange={(e)=>{
                    setSecondReadTime(parseInt(e.target.value));
                    setThirdReadTime(parseInt(e.target.value));
                    setForthReadTime(parseInt(e.target.value));
                }
                }></input>
                <label>  { secondReadTime } { thirdReadTime } { forthReadTime }</label>
            </div>
            <div>
                <label>Min Cycle Time</label>
                <input type="number" onChange={(e)=>setMinCycleTime(parseInt(e.target.value))}></input>
                <label>  { minCycleTime }</label>
            </div>
            <div>
                <label>Burst Mode</label>
                <input type="number" onChange={(e)=>setBurstMode(parseInt(e.target.value))}></input>
                <label>  { burstMode }</label>
            </div>
            <div>
            <input
            name="isBurstModeEnabled"
            type="checkbox"
            
            checked={isBurstModeEnabled}
            onChange={()=> {setIsBurstModeEnabled(!isBurstModeEnabled);
            }}/>
            <label> burstMode is: { isBurstModeEnabled + ' '}
            {isBurstModeEnabled.toString() }
            </label>
            </div>
            <div>
                <label>calculations: totalCycles</label>
                <label>  { totalCycles }</label>
            </div>
            <div>
                <label>calculations: Reads per Second</label>
                <label>  { readsPerSecondWithoutBurst + 'million reads per second'}</label>
            </div>
        </div>
    );
}
export default Question10;