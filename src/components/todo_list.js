import React from "react";
import Todo from "./todo";

function Todo_list({todoObj,settodoObj,filterTodo}){
    return(
        <div className="todo-list">
            {filterTodo.map(todo=>
                <Todo key={todo.key} todo={todo} settodoObj={settodoObj} todoObj={todoObj}/>    
            )}
        </div>
    )
}

export default Todo_list;