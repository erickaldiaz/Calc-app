import React from 'react';
import PropTypes from 'prop-types'


const Result = ({ value }) => (
    
    // console.log("renderización de Result", value)
    
        <div className="result">
                {value}
        </div>
    
)

//valida que el valor q se le pasa sea un string e isrequired hace q si o si
//se le pase un valor a result.
Result.propTypes = {
    value: PropTypes.string.isRequired
}

export default Result