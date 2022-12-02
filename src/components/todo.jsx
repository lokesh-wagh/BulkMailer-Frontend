import react, { useState } from 'react'
import './todo.css';
import { Add_Todo, Remove_Todo } from '../actions/index';
import { useSelector , useDispatch } from 'react-redux';

const Todo=()=>{
    const dispatch = useDispatch();
const [todo , setTodo] = useState('');
const list = useSelector((state)=>state.todoReducer.list);
console.log(list);
return(<>
<div className='container'>
<h1>ToDo List</h1>
<div className='input'>
    <input type='text' placeholder='Write your Todos here' id='inputtodo' 
    value={todo} 
    onChange={(e) => setTodo(e.target.value)}
    ></input>
    <button id='plus' 
    onClick={()=>dispatch(Add_Todo(todo) , setTodo(''))}
    >+</button>
</div>
{
    list.map((e)=>{
        return(

        <div id='show' key={e.id}>
        <p>{e.data}  <button id='minus'  onClick={()=>dispatch(Remove_Todo(e.id))}> - </button></p>
      
    </div>
        )
    })
   
}
</div>
</>)
}
export default Todo;