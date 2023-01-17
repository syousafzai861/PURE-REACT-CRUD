import React from "react";
import { TodoItem } from "../MyComponents/TodoItem";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3>Todo List</h3>
     
      {props.todos.length ===0 ? "no todos to display" :
      props.todos.map((todo)=>{
         return( <TodoItem todos={todo} key= {todo.sno} onDelete = {props.onDelete} />)
      })
    }
    </div>
  );
};
