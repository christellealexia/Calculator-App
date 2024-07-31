import  './App.css'
import {useReducer} from 'react'
import Digitbutton from "./Digitbutton"

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
}
}
function App (){
  const[{currentOperand,previousOperand,operation},dispatch]=useReducer(reducer,{})
return (
  <div className="calculator-grid">
    <div className="output">
      <div className="previous-operand">234567 *</div>
      <div className="current-operand"></div>
    </div>
    <button className="span-two">AC</button>
    <button>DEL</button>
    <button>÷</button>
   
    <Digitbutton digit={1} dispatch ={dispatch}/>
    <Digitbutton digit={2} dispatch ={dispatch}/>
    <Digitbutton digit={3} dispatch ={dispatch}/>
    
    <button>×</button>
    <Digitbutton digit={4} dispatch ={dispatch}/>
    <Digitbutton digit={5} dispatch ={dispatch}/>
    <Digitbutton digit={6} dispatch ={dispatch}/>
   
    <button>+</button>
    <Digitbutton digit={7} dispatch ={dispatch}/>
    <Digitbutton digit={8} dispatch ={dispatch}/>
    <Digitbutton digit={9} dispatch ={dispatch}/>
   
    
    <button>−</button>
    <button>.</button>
    <button>0</button>
    <button className="span-two">=</button>
    
    

  </div>

)
}
export default App