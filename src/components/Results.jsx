import React from 'react';


const Result = (props) => {
    
    console.log("renderización de result",props.value)
    return (
        
        <div className="result">
           
                {props.value}
            
        </div>
    )
}

export default Result