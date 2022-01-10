import React,{useState} from "react";


function Inp_get({inp,setinp,todoObj,settodoObj,setStatus}){
    const inpSet=(e)=>{
        setinp(e.target.value);
    }
    const chInp=(e)=>{
        if(e.key==="Enter"){
            todoObjSetter();
        }
    }
    const todoObjSetter=()=>{
        if(inp.trim()===""){
            setinp("");
            return;
        }
        let arr=[...todoObj];
        let temp={
            "key":Math.random()*1000,
            "isDone":false,
            "value":inp
        }
        arr.push(temp);
        settodoObj(arr);
        setinp("");
    }

    const statusSetter=(e)=>{
        setStatus(e.target.value);
    }

    return(
        <div className="inp-cont">
            <div className="inp-wrapper">
            <input type="text" placeholder="Enter a text" value={inp} onChange={inpSet} onKeyPress={chInp}></input>
            <button onClick={todoObjSetter}>Submit</button>
            </div>
            <select onChange={statusSetter}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Incompleted">Not Completed</option>
            </select>
        </div>
    )
}

export default Inp_get;