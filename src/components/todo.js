import delIcon from "../assets/delete.png";
import checkIcon from "../assets/check.png";

function Todo({todo,settodoObj,todoObj}){
    const del=(e)=>{
        todoObj=todoObj.filter(t=>t.key!==todo.key);
        settodoObj(todoObj);
        console.log(todoObj);
    }
    const comp=(e)=>{
        settodoObj(todoObj.map((item)=>{
            if(item.key===todo.key){
                return{
                    ...item,
                    "isDone":!item.isDone
                }
            }
            return item;
        }))
    }
    return(
        <div className="todo">
            <h2 className={(todo.isDone)?"completed":""}>{todo.value}</h2>
            <div className="button-wrapper">
            <button onClick={del} className="icon-btn"><img src={delIcon}></img></button>
            <button onClick={comp} className="icon-btn"><img src={checkIcon}></img></button>
            </div>
        </div>
    )
}

export default Todo;