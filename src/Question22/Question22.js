import { useEffect, useState } from "react";

const Question22 = () => {

    const [ rawBandwidth, setRawBandwidth ] = useState(10000000);
    const [ maximunSegmentLength, setMaximunSegmentLength ] = useState(100);
    const [ headerSize, setHeaderSize ] = useState(14);
    const [ payloadSize, setPayloadSize ] = useState(1200);
    const [ crcSize, setCrcSize ] = useState(4);
    const [ minimunPayload, setMinimunPayload ] = useState(64);
    const [ maximunPayload, setMaximunPayload ] = useState(1500);

    const [ totalPacketSize, setTotalPacketSize ] = useState();
    const [ payloadEfficiency, setPayloadEfficiency ] = useState();
    const [ dataTransferRate, setDataTransferRate ] = useState();
    const [ packetLatencySize, setPacketLantencySize] = useState();
    const [ packetLatencyTime, setPacketLatencyTime ] = useState();
    const [ totalPacketSizeBits, setTotalPacketSizeBits ] = useState();
    const [ bestCaseBits, setBestCaseBits ] = useState();
    const [ worstCaseBits, setWorstCaseBits ] = useState();
    const [ bestCase, setBestCase ] = useState();
    const [ worstCase, setWorstCase ] = useState();

    useEffect(()=>{
        setTotalPacketSize(headerSize+payloadSize+crcSize);
    }, [headerSize, payloadSize, crcSize]);

    useEffect(()=>{
        setPayloadEfficiency( payloadSize/totalPacketSize );
    }, [ payloadSize, totalPacketSize ]);

    useEffect(()=>{
        setDataTransferRate( rawBandwidth * payloadEfficiency );
    }, [ rawBandwidth, payloadEfficiency]);

    useEffect(()=>{
        setTotalPacketSizeBits( totalPacketSize * 8 );
    }, [totalPacketSize]);

    useEffect(()=>{
        setPacketLatencyTime( totalPacketSizeBits * (1/rawBandwidth) );
    }, [ totalPacketSizeBits, rawBandwidth ]);

    useEffect(()=>{
        setBestCaseBits( (headerSize + minimunPayload + crcSize)*8 );
        setWorstCaseBits( (headerSize + maximunPayload + crcSize)*8 );
    },[headerSize,minimunPayload,crcSize, maximunPayload]);

    useEffect(()=>{
        setBestCase(totalPacketSizeBits/bestCaseBits);
        setWorstCase(totalPacketSizeBits/worstCaseBits);
    }, [totalPacketSizeBits, bestCaseBits, worstCaseBits]);

    return (
    <div>
        <div>
            <label>---</label>
        </div>
        <div>
            <label> Question 22 </label>
        </div>
        <div>
            <label>            
Study this network, and then evaluate it in terms of its data transfer efficiency if the payload size of the network is 1200 bytes, and determine the packet latency and data transfer rate in millions of bytes per second.
How does this latency compare with the best and worst case packet latencies?
            </label>
            <ul>
          <li>Raw bandwidth:	10 million bits per second</li>
          <li>Maximum segment length:	100 metres </li>
          <li>Packet header:	14 bytes </li>
          <li>Error correction:	4 Byte CRC</li>
          <li>Minimum payload:	64 bytes </li>
          <li>Maximum payload:	1500 bytes</li>
            </ul>
        </div>
        <div>
            <label> Raw Bandwidth </label>
            <input type="number" value={rawBandwidth} 
            onChange={(event)=>{setRawBandwidth(event.target.value)}}></input>
            <label> {rawBandwidth} bits </label>
        </div>
        <div>
            <label> Maximun Segmenth Length </label>
            <input type="number" value={maximunSegmentLength} 
            onChange={(event)=>{setMaximunSegmentLength(event.target.value)}}></input>
            <label> {maximunSegmentLength} Bytes </label>
        </div>
        <div>
            <label> Pachet Header Size </label>
            <input type="number" value={headerSize} 
            onChange={(event)=>{setHeaderSize(event.target.value)}}></input>
            <label> {headerSize} Bytes </label>
        </div>
        <div>
            <label> Error correction CRC </label>
            <input type="number" value={crcSize} 
            onChange={(event)=>{setCrcSize(event.target.value)}}></input>
            <label> {crcSize} Bytes </label>
        </div>
        <div>
            <label> Minimun Payload </label>
            <input type="number" value={ minimunPayload} 
            onChange={(event)=>{setMinimunPayload(event.target.value)}}></input>
            <label> {minimunPayload} Bytes </label>
        </div>
        <div>
            <label> Raw Bandwidth </label>
            <input type="number" value={maximunPayload} 
            onChange={(event)=>{setMaximunPayload(event.target.value)}}></input>
            <label> {maximunPayload} Bytes </label>
        </div>
        <div>
            <label> Payload size </label>
            <input type="number" value={payloadSize} 
            onChange={(event)=>{setPayloadSize(event.target.value)}}></input>
            <label> {payloadSize} Bytes </label>
        </div>
        <div>
            <label>
                The total size of the packet in the network is (header + payload + crc) = 
                 {headerSize} + {payloadSize} + {crcSize} = {totalPacketSize} Bytes
            </label>
        </div>
        <div>
            <label>
              The efficiciency is calculated with the payload size (we can think as the data that is really useful)
              and the total packet size, which includes control and error correction bytes.
              ( payloadSize / totalPacketSize ) = ( {payloadSize} / {totalPacketSize} ) = {(payloadEfficiency*100).toFixed(4)} %
            </label>
        </div>
        <div>
            <label>
            Data transfer rate will be {(payloadEfficiency*100).toFixed(4)} % of maximum data transfer rate, therefore 
            Data transfer = ( Raw Bandwidth x Payload efficiency) = ( {rawBandwidth} x {payloadEfficiency} )
            Data transfer = {dataTransferRate} bit per second
            The data transfer rate is {(dataTransferRate/1000000).toFixed(4)} million bits per second.
            </label>
        </div>
        <div>
            <label>
            In order to obtain the packet lantency (time), we calculate the time spent to transfer each bit.
            Packet latency, to transmit {totalPacketSize} bytes = {8} x {totalPacketSize} = {totalPacketSizeBits} bits. 
            One bit period is 1/{rawBandwidth}  therefore:
            {totalPacketSizeBits} x (1/ {rawBandwidth} ) = {packetLatencyTime} 
            The packet latency time is {packetLatencyTime* 1000000 } micro seconds.
            </label>
        </div>
        <div>
            <label>
            Latency comparison for best and worst case scenarios

            Best case bits = { bestCaseBits }, worst case bits = { worstCaseBits }, test case had {totalPacketSizeBits} bits. 
            So best case is {totalPacketSizeBits} / {bestCaseBits} = {bestCase} times faster
            And worst case is {totalPacketSizeBits} / {worstCaseBits} = {worstCase} times as fast,
            or the test case is {worstCaseBits/totalPacketSizeBits} times faster than the worst case.
            </label>
        </div>
    </div>);
}
export default Question22;