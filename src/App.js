import logo from './logo.svg';
import './App.css';
import Inp_get from './components/Input-get';
import Todo_list from './components/todo_list';
import {useState,useEffect} from 'react';


function App() {
  const [inp,setinp]=useState('');
  const [todoObj,settodoObj]=useState([]);
  const [filterTodo,setfilterTodo]=useState([]);
  const [status,setStatus]=useState('All');
  const filerSetter=()=>{
    switch (status) {
      case "Completed":
        setfilterTodo(todoObj.filter(t=>t.isDone===true));
        break;
      case "Incompleted":
        setfilterTodo(todoObj.filter(t=>t.isDone===false));
        break;
      default:
        setfilterTodo(todoObj);
        break;
    }
  }
  const LocalUpdater=()=>{
    localStorage.setItem("todoObj",JSON.stringify(todoObj));
  }
  const localGetter=()=>{
    let obj=JSON.parse(localStorage.getItem("todoObj"));
    console.log(obj);
    if(obj) settodoObj(obj);
  }
  const scroller=()=>{
    const ele=document.querySelector(".todo-list").lastChild;
    if(!ele) return;
    ele.scrollIntoView({behavior:"smooth"});
  }
  useEffect(localGetter,[]);
  useEffect(scroller,[filterTodo]);
  useEffect(LocalUpdater,[todoObj]);
  useEffect(filerSetter,[todoObj,status]);
  return (
    <div>
      <header>
        <h1 className='title'>Todo List</h1>
      </header>
      <div className='todo-cont'>
        <Inp_get inp={inp} setinp={setinp} todoObj={todoObj} settodoObj={settodoObj} setStatus={setStatus}/>
        <Todo_list todoObj={todoObj} settodoObj={settodoObj} filterTodo={filterTodo}/>
      </div>
    </div>
  );
}

export default App;
