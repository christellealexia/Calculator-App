import {useReducer} from 'react'
import  './App.css'
import One from './One'
import Two from './Two'

export const ACTIONS
= {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE:'evaluate'
}

function reducer(state,{type,payload}){
switch(type){
  case ACTIONS.ADD_DIGIT:
    if(payload.digit === '0' && state.currentOperand === '0' )return state
    if(payload.digit === '.' && state.currentOperand === '.' )return state
    
    return {
      ...state,
      currentOperand: `${state.currentOperand || ""} ${payload.digit}`,

    }
    case ACTIONS.CHOOSE_OPERATION:
      if(state.currentOperand === null && state.previousOperand === null){
        return state;
      }
      if(state.previousOperand === null){
        return {
          ...state,
          operation:payload.operation,
          previousOperand: state.currentOperand,
          currentOperand:null,
        }
      }
      return {
        ...state,
        previousOperand:evaluate(state),
        operation: payload.operation,
        currentOperand: null
      }

      function evaluate({currentOperand,previousOperand,operation}){
        const prev = parseFloat(previousOperand)
        const current = parseFloat(currentOperand)
        If(isNaN(prev) || isNaN(current)) {return ""}
        let computation = ""
        switch(operation){
          case " + ":
            computation = prev + current;
            break;
            case " - ":
            computation = prev - current;
            break;
            case " * ":
            computation = prev * current;
            break;
            case " ÷":
            computation = prev / current;
            break;
        }
        return computation.toString()
      }
      case ACTIONS.CLEAR:
        return {}
        default:
      return state;
}
}


function App (){
  const[{currentOperand,previousOperand,operation},dispatch]=useReducer(reducer,{})
  
return (
  <div className="calculator-grid">
    <div className="output">
      <div className="previous-operand">{previousOperand} {operation}</div>
      <div className="current-operand">{currentOperand}</div>
    </div>
    <button className="span-two" onClick={()=> dispatch({type:ACTIONS.CLEAR})}>AC</button>
    <button>DEL</button>
    
    <Two operation='÷' dispatch ={dispatch}/>
   
    <One digit='1' dispatch ={dispatch}/>
    <One digit='2' dispatch ={dispatch}/>
    <One digit='3' dispatch ={dispatch}/>
    <Two operation ='*' dispatch ={dispatch}/>
    
    <One digit='4' dispatch ={dispatch}/>
    <One digit='5' dispatch ={dispatch}/>
    <One digit='6' dispatch ={dispatch}/>
    <Two operation ='+' dispatch ={dispatch}/>
    <One digit= '7' dispatch ={dispatch}/>
    <One digit= '8' dispatch ={dispatch}/>
    <One digit= '9' dispatch ={dispatch}/>
    <Two operation = '-' dispatch ={dispatch}/>
    <One digit= '.' dispatch ={dispatch}/>
    <One digit= '0' dispatch ={dispatch}/>

    <button className="span-two">=</button>
  </div>

)
}
export default App