// Deliverable 4: Demonstrate the unmounting and cleanup 
// phase of a component through `useEffect`

    // Return a cleanup function inside the `useEffect` 
    // with a console.log()

    // Open up the devtools to observe when the cleanup 
    // will occur in the stages of a components lifecycles

import { useState, useEffect } from "react";

const Timer = () => {
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        let intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1);           
            
            console.log("Timer Firing");
            // console.log(intervalId);
        }, 1000);

        // Clean Up Behavior

        return () => {

            // Add Syntax to "Clean Up" setInterval
            clearInterval(intervalId);

        }
        
    }, [])

    return (
        <h1>Timer Count: {count}</h1>
    );
}

export default Timer;