import React from 'react'
import PropTypes from 'prop-types';

const Button = ({color,text}) => {
    const OnCLick = () =>{
        console.log("click");
    }
    
  return (
    <>

    <button style={{backgroundColor: color}}
     className='btn'
     onClick={OnCLick}
     >{text}</button>

    </>
  )
}

Button.defaultProps ={
    color : "steelblue",
}

Button.prototype = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button