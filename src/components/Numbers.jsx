import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

//DRY: dont repeat yourself

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const renderButtons = onClickNumber => {
    //var number = 0
    //iterar desde el botón 1 al 0(while, for, foreach)
    // <Button text={number.toString()} clickHandler={onClickNumber}></Button>
 const renderButton = number => (
<Button key={number} text={number.toString()} clickHandler={onClickNumber}></Button>
)
return numbers.map(renderButton)  


}

const Numbers = ({onClickNumber})=> (
    <section className="numbers">
        {
            renderButtons(onClickNumber)
        }
    </section>
)


Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired,

}

export default Numbers;