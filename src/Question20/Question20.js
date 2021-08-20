import { useEffect, useState } from "react";

const Question20 = () => {

    const [ formatText, setFormatText ] = useState("");
    const [ formatTextArray, setFormatTextArray ] = useState(["lel","2"]);
    const [ countLines, setCountLines ] = useState(0); 
    const [ dataFormatSize, setDataFormatSize ] = useState(["lel"]);
    const [ numberOfDataFields, setNumberOfDataFields ] = useState(0);
    const [ numberOfBytesPerDataField, setNumberOfBytesPerDataField ] = useState(0);
    const [ dataFieldFixedSize, setDataFieldFixedSize ] = useState(0);
    const [ totalRecordSize, setTotalRecordSize ] = useState(0);
    const [ dataStorageEfficiency, setDataStorageEfficiency ] = useState(0);

    useEffect(()=>{
        setFormatTextArray(formatText.split(/\r*\n/));
    }, [  formatText]);

    useEffect(()=>{ 
        let tempCountLines = [];
        formatTextArray.forEach(element => tempCountLines.push(element.length));
        setCountLines(tempCountLines);
    }, [ formatTextArray]);

    useEffect(()=>{
        let tempAnswer = [];
        let i = 0;
        formatTextArray.forEach( element => tempAnswer.push(element + " " + countLines[i++] + " +1"));
        setDataFormatSize(tempAnswer);
        
    }, [formatTextArray, countLines]);

    useEffect(()=>{
        setDataFieldFixedSize( (numberOfDataFields * numberOfBytesPerDataField) + (numberOfDataFields * 1));
    },[numberOfBytesPerDataField, numberOfDataFields]);

    useEffect(()=>{
        setTotalRecordSize(parseInt( formatText.length ) + parseInt(dataFieldFixedSize));
    },[formatText, dataFieldFixedSize]);

    useEffect(()=>{
        setDataStorageEfficiency( (numberOfDataFields * numberOfBytesPerDataField) / totalRecordSize );
    }, [ numberOfDataFields,numberOfBytesPerDataField,totalRecordSize ]);

    return (
        <div>
            <div>
                <label>
                    ---
                </label>
            </div>
            <div>
                <label>
                    Question 20
                </label>
            </div>
            <div>
                <label>
                A file is to be used to store records of houses for sale at an estate agency. 
The record format, loosely based on the XML file model, is such that all data fields are a fixed length of 32 eight-bit characters, and every line of the file format also has an end-of-line or end-of-file character.  The format is as given below, where ‘...datan…’ denotes a sequence of characters relating to the relevant data field:
Evaluate this file format, determining the length of this single record in bytes, and determine its efficiency of file storage versus data content.
If the data format is replaced with a simple binary file format, where all data records are contiguously stored in the file (i.e. no end-of-line characters), analyse and demonstrate the reduction in relative file size which is achievable. You should assume that characters are stored in binary as 8-bit ASCII characters.  
                </label>
            </div>
            <div>
                <label>Format Text:</label>
                <textarea value={formatText} 
                onChange={(e) => {setFormatText(e.target.value)}}></textarea>
                {/* <label>{formatText}, number of characters: { formatText.length }</label>
                <label> SPLIT ------ { formatText.split(/\r*\n/).length }</label>
                <label> Array {formatTextArray} </label>
                <label> Array of counted lines {countLines} </label>
                <label> Answer { dataFormatSize } </label> */}
                <ul>
                {dataFormatSize.map(element => <li>{element} </li>)} 
                </ul>
                <label> Answer: Total = { formatText.length } Bytes</label>
            </div>
            <div>
                <label>Number of data fields or rows</label>
                <input value={numberOfDataFields}
                onChange={(e)=>{setNumberOfDataFields(e.target.value)}}></input>
                <label>{ numberOfDataFields}</label>
            </div>
            <div>
                <label>Data field fixed size: </label>
                <input value={numberOfBytesPerDataField}
                onChange={(e)=>{setNumberOfBytesPerDataField(e.target.value)}}></input>
                <label>{ numberOfBytesPerDataField }</label>
            </div>
            <div>
                <label>
                Answer: The total record size is therefore {dataFieldFixedSize} + {formatText.length}= {totalRecordSize} bytes.
                </label>
            </div>
            <div>
                <label>
                Data storage efficiency in this case: it requires {totalRecordSize} 
                total bytes to store {dataFieldFixedSize} data bytes, so efficiency is {(numberOfDataFields * numberOfBytesPerDataField)}/{totalRecordSize} = {dataStorageEfficiency.toFixed(4)} 
                 = {(dataStorageEfficiency*100).toFixed(4)} %                 </label>
            </div>
            <div>
                <label>
                We can now compare XML at {totalRecordSize} bytes, versus binary at {numberOfBytesPerDataField*numberOfDataFields} bytes, giving  
                {totalRecordSize}/{numberOfBytesPerDataField*numberOfDataFields} = {totalRecordSize/(numberOfBytesPerDataField*numberOfDataFields)} -
                 times smaller when using binary format.   </label>
            </div>
        </div>
    );
}
export default Question20;