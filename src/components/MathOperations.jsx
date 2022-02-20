import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const MathOperations = ({onClickOperations, onClickEqual}) => (
    <section className="math-operations">
    <Button text="" clickHandler={onclickOperation}></Button>
    <Button text="" clickHandler={onclickOperation}></Button>
    <Button text="" clickHandler={onclickOperation}></Button>
    <Button text="" clickHandler={onclickOperation}></Button>
    <Button text="" clickHandler={onclickEqual}></Button>
    </section>
)


MathOperation.propTypes = {
    onClickOperation: PropTypes.func.isRequired
    onClickEqual: PropTypes.func.isRequired
}

export default MathOperations