import React, { useState } from 'react'
import './calculadora.css'
import Display from './Display'
import Button from './Button'




const initialState = {

    displayValue: '0',
    clearDisplay: false,
    opertion:null,
    values:[0,0],
    current: 0
}

export default
() => {
  
  var [state,seState] = useState(initialState)

  const clearMemory = () => {
    seState(initialState)
  }
  const setOperator = (operator) => {
    console.log(operator)
  }
  const setDigit = (n) => {
    console.log(n)
  }

  return (
    <div className='calculadora'>
        <Display value={state.displayValue}/>
        <Button className='button.triplo' value='AC' func={clearMemory} type='triplo'/>
        <Button className='button.operador' value='/' func={()=>setOperator('/')} type='operator' />
        <Button value='7' func={()=>setDigit('7')} />
        <Button value='8' func={()=>setDigit('8')}/>
        <Button value='9' func={()=>setDigit('9')}/>
        <Button className='button.operador' value='*' func={()=>setOperator('*')} type='operator' />
        <Button value='4' func={()=>setDigit('4')}/>
        <Button value='5' func={()=>setDigit('5')}/>
        <Button value='6' func={()=>setDigit('6')}/>
        <Button className='button.operador' value='-' func={()=>setOperator('-')} type='operator' />
        <Button value='1' func={()=>setDigit('1')}/>
        <Button value='2' func={()=>setDigit('2')}/>
        <Button value='3' func={()=>setDigit('3')}/>
        <Button className='button.operador' value='+' func={()=>setOperator('+')} type='operator' />
        <Button className='button.duplo' value='0' func={()=>setDigit('0')} type='duplo'/>
        <Button value='.' func={()=>setDigit('.')}/>
        <Button className='button.operador' value='=' func={()=>setOperator('=')} type='operator' />
          {console.log(state.displayValue)}
    </div>
  )
}
