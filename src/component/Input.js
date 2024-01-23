import React from 'react'
import "./Input.css"

 const Input = ({placeholder, value,whenChange,typee}) => {
  return (
    <div>
        <input className='Input' type={typee} placeholder={placeholder} value={value} onChange={whenChange} />
    </div>
  )
}


export default Input