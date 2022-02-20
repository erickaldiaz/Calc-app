import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Functions = ({onContentClear, onDelete}) => {
    <section className="functions">
        <Button text="" clickHandler={onContentClear}></Button>
        <Button text="" clickHandler={onDelete}></Button>
    </section>

}

Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}



export default Functions