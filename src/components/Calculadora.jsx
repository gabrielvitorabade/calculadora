import React, { useState } from 'react'
import './calculadora.css'
import Display from './Display'
import Button from './Button'


const initialState = {

    displayValue: '0',
    clearDisplay: false,
    operation:null,
    values:[0,0],
    current: 0
}

export default
() => {
  
  var [state,setState] = useState(initialState)

  const clearMemory = () => {
    setState(initialState)
  }
  const setOperation = (operation) => {
    if(state.current === 0){
      setState(prevState=>({
        ...prevState,
        operation,
        current:1,
        clearDisplay:true,
      }))
    }else{
      const equals = operation === '='
      const currentOperation = state.operation

      const values = [...state.values]

      try{
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
      }catch(e){
        values[0]= state.values[0]
      }
      values[1]= 0

      setState(prevState=>({
        ...prevState,
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      }))
    }
  }
  const setDigit = (n) => {
    if (n === '.' && state.displayValue.includes('.')){
      return
    }    
    const clearDisplay = state.displayValue === '0' || state.clearDisplay
    let currentValue = clearDisplay ?   '' : state.displayValue

    if(n === '.' && currentValue === ''){
      currentValue= '0'
    }

    const displayValue = currentValue + n

    setState(prevState =>({
        ...prevState,
        displayValue,
        clearDisplay:false
      }))

      
      
      const i = state.current
      const newValue = n === '.' ? parseFloat(displayValue) || 0 : parseFloat(displayValue)
      const values = [...state.values]
      values[i]= newValue
      setState(prevState =>({
        ...prevState,
        values
      }))
    
  }

  return (
    <div className='calculadora'>
        <Display value={state.displayValue}/>
        <Button className='button.triplo' value='AC' func={clearMemory} type='triplo'/>
        <Button className='button.operador' value='/' func={()=>setOperation('/')} type='operator' />
        <Button value='7' func={()=>setDigit('7')} />
        <Button value='8' func={()=>setDigit('8')}/>
        <Button value='9' func={()=>setDigit('9')}/>
        <Button className='button.operador' value='*' func={()=>setOperation('*')} type='operator' />
        <Button value='4' func={()=>setDigit('4')}/>
        <Button value='5' func={()=>setDigit('5')}/>
        <Button value='6' func={()=>setDigit('6')}/>
        <Button className='button.operador' value='-' func={()=>setOperation('-')} type='operator' />
        <Button value='1' func={()=>setDigit('1')}/>
        <Button value='2' func={()=>setDigit('2')}/>
        <Button value='3' func={()=>setDigit('3')}/>
        <Button className='button.operador' value='+' func={()=>setOperation('+')} type='operator' />
        <Button className='button.duplo' value='0' func={()=>setDigit('0')} type='duplo'/>
        <Button value='.' func={()=>setDigit('.')}/>
        <Button className='button.operador' value='=' func={()=>setOperation('=')} type='operator' />
          {/* {console.log(state.displayValue)} */}
    </div>
  )
}
