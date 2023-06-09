import "./progressbar.css"
import {motion, animate} from 'framer-motion';
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";


function Progressbar({value}) {
    const progressTextRef = useRef(null);
    useEffect(() => {
        const progressText = progressTextRef.current?.textContent;
        if(progressText != null) {
            animate(parseInt(progressText),value, {
                onUpdate : (cv) => {
                    progressTextRef.current.textContent = cv.toFixed(0)
                }
            });
        }
    }, [value]);
    return(
        <div className="progressbar-container">
            <div className="progressbar">
                <motion.div 
                className="bar"
                animate={{
                    width: `${value}%`
                }}
                />
            </div>
            <div className="progressbar-text-container">
                <p ref={progressTextRef}>0</p>
                <p>%</p>
            </div>
        </div>
    );
}

Progressbar.propTypes = {
    value: PropTypes.number.isRequired,
};


export default Progressbar;