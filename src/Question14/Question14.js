import { useEffect, useState } from "react";

const Question14 = () => {

    const [ averageFileSize, setAverageFileSize ] = useState(8800);
    const [ diskSectorSize, setDiskSectorSize ] = useState(512);
    const [ diskSeekTime, setDiskSeekTime ] = useState(4);
    const [ diskRotationalSpeed, setDiskRotationalSpeed ] = useState(7200);
    const [ diskSectorsPerTrack, setDiskSectorsPerTrack ] = useState(256);

    // Storage Requirements
    const [ numberOfSectorsRequired, setNumberOfSectorsRequired ] = useState(0);
    const [ numberOfSectorsRequiredRounded, setNumberOfSectorsRequiredRounded ] = useState(0);
    const [ averageFileStorageSize, setAverageFileStorageSize ] = useState(0);
    const [ storageWastePerFile, setStorageWastePerFile ] = useState(0);

    useEffect(()=>{
        setNumberOfSectorsRequired( averageFileSize/diskSectorSize);
    },[ averageFileSize, diskSectorSize]);

    useEffect(()=>{
        setNumberOfSectorsRequiredRounded( Math.ceil(numberOfSectorsRequired));
    },[ numberOfSectorsRequired]);

    useEffect(()=>{
        setAverageFileStorageSize( numberOfSectorsRequiredRounded * diskSectorSize );
    },[ numberOfSectorsRequiredRounded, diskSectorSize ]);

    useEffect(() => {
        setStorageWastePerFile((averageFileStorageSize - averageFileSize)*100/averageFileStorageSize);
    },[ averageFileSize, averageFileStorageSize ]);

    return (
        <div>
            <div>
                <label>
                    ---
                </label>
            </div>
            <div>
                <label>
                    Question 14
                </label>
            </div>
            <div>
                <label>
                A file storage system is observed to have the following characteristics:
                </label>
                <ul>
                    <li> Average file size	8800 bytes </li>
                    <li> Disk sector size 	512 bytes </li>
                    <li> Disk seek time	4 ms </li>
                    <li> Disk rotational speed	7200 rpm </li>
                    <li> Disk sectors per track	256 </li>
                </ul>
                <label>                    
                    Analyse this system using appropriate methods and calculations, and in doing so, demonstrate the following:
                    ●	The storage requirement of average file data when stored on this disk, and percentage of wasted storage space in this case.
                    ●	The worst-case read times for this file if fully contiguous and then if fully fragmented, and the speedup achieved if the file is fully defragmented. 
                    When answering this question ensure you clearly label your responses to indicate which part or element of the answer you are referring to in each case.
                </label>
            </div>
            <div>
                <label>Average File size</label>
                <input type="number" value={ averageFileSize } 
                onChange={(e)=>setAverageFileSize(e.target.value)}></input>
                <label>{averageFileSize} Bytes</label>
            </div>
            <div>
                <label>Disk Sector size</label>
                <input type="number" value={ diskSectorSize } 
                onChange={(e)=>setDiskSectorSize(e.target.value)}></input>
                <label>{diskSectorSize} Bytes</label>
            </div>
            <div>
                <label>Disk Seek Time</label>
                <input type="number" value={ diskSeekTime } 
                onChange={(e)=>setDiskSeekTime(e.target.value)}></input>
                <label>{ diskSeekTime } ms</label>
            </div>
            <div>
                <label>Disk Rotational Speed</label>
                <input type="number" value={ diskRotationalSpeed } 
                onChange={(e)=>setDiskRotationalSpeed(e.target.value)}></input>
                <label>{ diskRotationalSpeed } rpm </label>
            </div>
            <div>
                <label>Disk Sectors per track</label>
                <input type="number" value={ diskSectorsPerTrack } 
                onChange={(e)=>setDiskSectorsPerTrack(e.target.value)}></input>
                <label>{ diskSectorsPerTrack } ? </label>
            </div>
            <div>
                <label> Data Storage </label>
                <label> Answer: Number of sectors required = { numberOfSectorsRequired }  </label>
                <label> Answer: Number of sectors required (ROUNDED) = { numberOfSectorsRequiredRounded }  </label>
                <label> Answer: Average File Storage Size on disk = { averageFileStorageSize }  </label>
                <label> Answer: Storage waste per file = { storageWastePerFile } %  </label>
            </div>
            <div>
                <label> Data Rates </label>
                <label> Answer: Number of sectors required = { numberOfSectorsRequired }  </label>
            </div>
        </div>
    );
}
export default Question14;