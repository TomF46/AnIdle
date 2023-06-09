import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Progressbar from "../progressbar/progressbar";


function TaskProgressBar({taskInProgress, taskRunningTime, onTaskFinished}) {
    const [percentageComplete, setPercentageComplete] = useState(0);

    useEffect(() => {
        if(taskInProgress){
            runTimer();
        }
    }, [taskInProgress]);

    function runTimer(){
        let increment = taskRunningTime / 100;
        let incrementCount = 0;
        const interval = setInterval(() => {
            incrementCount++;
            setPercentageComplete(incrementCount);
            if(incrementCount == 100){
                clearInterval(interval)
                setPercentageComplete(0);
                onTaskFinished();
            }
        }, increment);
    }

    return (
        <>
           <Progressbar value={percentageComplete} />
        </>
    );
}

TaskProgressBar.propTypes = {
    taskRunningTime: PropTypes.number,
    taskInProgress: PropTypes.bool.isRequired,
    onTaskFinished: PropTypes.func.isRequired
};

export default TaskProgressBar;