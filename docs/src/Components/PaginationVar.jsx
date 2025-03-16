import React, {useState} from "react";
import "../Style/PaginationVar.css";
import { IoMdArrowDropleft, IoMdArrowDropright  } from "react-icons/io";

export default function PaginationVar({ page, setPage, max}) {
  
  const [input, setInput] = useState(1);
  const nextPage = ()=>{
    if (input < max) {
      setInput(input+1);
      setPage(page+1); 
    }
  }
  const prevPage = ()=>{
    if (input > 1) {      
      setInput(input-1);
      setPage(page-1);
    }
  }
  
  return (
    <div className="pagination">
      <button onClick={()=>prevPage()}><IoMdArrowDropleft /></button>
      <input type="number" name="page" autoComplete="off" max={max} min={1} value={input}/>
      <p className="pagination__p">De: {max}</p>
      <button onClick={()=>nextPage()}><IoMdArrowDropright /></button>
    </div>
  );
};