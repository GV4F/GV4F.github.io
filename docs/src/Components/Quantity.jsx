import React, {useState} from 'react';
import "../Style/Modal.css";

export default function Quantity() {

  const [sum, setSum] = useState(1);
  const addSpan = ()=> setSum(sum+1);
  
  const resSpan = ()=>{
    if (sum > 1) {
      setSum(sum-1);
    }
  }

  return (
    <>
      <div className="modal__info-cantidad">
        <button id="sum" onClick={()=>addSpan()}>+</button>
        <span id="cantidad">{sum}</span>
        <button id="res" onClick={()=>resSpan()}>-</button>
      </div>
    </>
  );
};