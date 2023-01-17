import React from "react";

export const TodoItem = ({ todos, onDelete }) => {
  return (
    <div>
      {/* {console.log(todos.title)} */}
      <h3 className="text-center my-3">{todos.title}</h3>
      <p>{todos.desc}</p>
       <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todos)}}>Delete</button>
    </div>
  );
};
