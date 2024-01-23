import React from 'react'
import './Button.css'

 const Button = ({onValidation}) => {
  return (
    <div>
       <button className='button' onClick={onValidation}>approv</button>
    </div>
     
  )
}


export default Button;




