import { useEffect, useState } from "react";

const Question11 = () => {
    
    const [ clockRate, setClockRate ] = useState(30);
    const [ dataWidth, setDataWidth ] = useState(64);
    const [ busTransactionOverhead, setBusTransactionOverhead ] = useState(4);
    const [ numberOfReadsForNonBurstMode, setNumberOfReadsForNonBurstMode ] = useState(1);
    const [ numberOfReadsForBurstMode, setNumberOfReadsForBurstMode ] = useState(32);

    const [ rawBusBandwidth, setRawBusBandwidth ] = useState(0);
    const [ transferEfficiencyNonBurstMode, setTransferEfficiencyNonBurstMode ] = useState(0);   
    const [ transferEfficiencyBurstMode, setTransferEfficiencyBurstMode ] = useState(0); 
    const [ normalBusBandwidth, setNormalBusBandwidth ] = useState(0); 
    const [ burstBusBandwidth, setBurstBusBandwidth ] = useState(0); 
    const [ efficiencyComparison, setEfficiencyComparison ] = useState(0);

    useEffect(()=>{
        setRawBusBandwidth( clockRate * 1000000 * ( dataWidth/8 ) );
    }, [ clockRate, dataWidth ]);

    useEffect(() => {
        setTransferEfficiencyNonBurstMode( numberOfReadsForNonBurstMode/ (busTransactionOverhead + numberOfReadsForNonBurstMode) );
    }, [busTransactionOverhead, numberOfReadsForNonBurstMode]);

    useEffect(() => {
        setTransferEfficiencyBurstMode( numberOfReadsForBurstMode / (busTransactionOverhead + numberOfReadsForBurstMode) );
    }, [ busTransactionOverhead, numberOfReadsForBurstMode ]);

    useEffect(() => {
        setNormalBusBandwidth(transferEfficiencyNonBurstMode.toFixed(4) * rawBusBandwidth);
    });

    useEffect(() => {
        setBurstBusBandwidth(transferEfficiencyBurstMode.toFixed(4) * rawBusBandwidth);
    });

    return(
        <div>
            <div>
                <label> --- </label>
            </div>
            <div>
                <label> Question 11 </label>
            </div>
            <div>
                <label>
                A bus system has a clock rate of 30 MHz, and a data width of 64 bits. It has a bus transaction overhead of 4 cycles, and is capable of operating in burst mode. 
                Using your knowledge of bus architectures, evaluate the raw data bandwidth of the bus in millions of bytes per second, and the transfer efficiency in percent for a single read transaction.
                Then analyse the effect upon data rate if, instead, a burst mode of 32 consecutive reads is used. 
                When answering this question, ensure you clearly label your responses to indicate which part or element of the answer you are referring to in each case.
                </label>
            </div>
            <div>
                <label> Clock Rate </label>
                <input type="number" value={ clockRate } 
                onChange={(e)=>setClockRate(e.target.value)}></input> 
                <label> { clockRate } MHz </label>
            </div>
            <div>
                <label> Data Width </label>
                <input type="number" value={ dataWidth }
                onChange={(e)=>setDataWidth(e.target.value)}></input> 
                <label> { dataWidth } bits </label>
            </div>
            <div>
                <label>Bus Transaction overhead</label>
                <input type="number" value={ busTransactionOverhead }
                onChange={(e)=> setBusTransactionOverhead(e.target.value)} ></input>
                <label> { busTransactionOverhead } cycles </label>
            </div>
            <div>
                <label>Number of Reads for Non-Burst mode</label>
                <input type="number" value={ numberOfReadsForNonBurstMode }
                onChange={(e)=> setNumberOfReadsForNonBurstMode(e.target.value)} ></input>
                <label> { numberOfReadsForNonBurstMode } cycles </label>
            </div>
            <div>
                <label>Number of Reads for Burst mode</label>
                <input type="number" value={ numberOfReadsForBurstMode }
                onChange={(e)=> setNumberOfReadsForBurstMode(e.target.value)} ></input>
                <label> { numberOfReadsForBurstMode } cycles </label>
            </div>
            <div>
                <label> Answer: Raw Bus bandwidth </label>
                <label> { rawBusBandwidth } Bytes per second ({rawBusBandwidth/1000000} MBps) </label>
            </div>
            <div>
                <label> Answer: Transfer Efficiency (Normal or Non-Burst mode) </label>
                <label> { transferEfficiencyNonBurstMode * 100 } % </label>
            </div>
            <div>
                <label> Answer: Transfer Efficiency (Burst mode) </label>
                <label> { transferEfficiencyBurstMode.toFixed(4) * 100 } % </label>
            </div>
            <div>
                <label> Answer: Data transfer comparison (1 read vs 32 reads)</label>
                <label> Normal mode -- { normalBusBandwidth } 
                ( { normalBusBandwidth/1000000 } MBps or Million Bytes per second ) </label>
                <label> Burst mode -- { burstBusBandwidth  }
                ( { burstBusBandwidth/1000000 } MBps or Million Bytes per second ) </label>
            </div>
            <div>
                <label> Answer: Efficiency comparison, burst mode is 
                    { (transferEfficiencyBurstMode / transferEfficiencyNonBurstMode).toFixed(4) }   faster than the non burst mode</label>
            </div>

        </div>
    );
}
export default Question11;