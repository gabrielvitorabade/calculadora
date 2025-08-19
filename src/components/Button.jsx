import React from 'react'
import './button.css'
export default function Button({value, func, type}) {
  return (
    <button className={`
      button
      ${type ? type : ''}
    `} onClick={func} >{value}</button>
        
  )
}
