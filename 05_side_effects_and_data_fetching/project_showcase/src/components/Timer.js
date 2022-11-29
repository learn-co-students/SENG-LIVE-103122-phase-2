// Deliverable 4: Demonstrate the unmounting and cleanup 
// phase of a component through `useEffect`

    // Return a cleanup function inside the `useEffect` 
    // with a console.log()

    // Open up the devtools to observe when the cleanup 
    // will occur in the stages of a components lifecycles

import { useState, useEffect } from "react";

const Timer = () => {
    
    const [count, setCount] = useState(0);

    const logTimer = () => {
        console.log("Page Clicked!");
    }

    useEffect(() => {
        
        // Side Effect Behavior

            let intervalId = setInterval(() => {
                // setCount(count + 1);
                
                setCount(prevCount => prevCount + 1);           
                
                console.log("SIDE EFFECT");
                // console.log(intervalId);
            }, 1000);

            document.addEventListener("click", logTimer);

        const clearEverything = () => {
            // Add Syntax to "Clean Up" setInterval
            clearInterval(intervalId);

            // Add Syntax to "Clean Up" (Remove) Event Listener
            document.removeEventListener("click", logTimer);
        }

        // Clean Up Behavior
        return () => {
            console.log("CLEAN UP");
            clearEverything();
        }
        
    }, []);

    return (
        <h1>Timer Count: {count}</h1>
    );
}

export default Timer;