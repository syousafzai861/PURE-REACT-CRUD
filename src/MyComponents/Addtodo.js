import React, { useState } from 'react'

export const Addtodo = (props) => {
const [title, settitle] = useState("");
const [desc, setdesc] = useState("");
const  submit = (e) =>{
   e.preventDefault()
   if(!title || !desc){
    alert("Enter complete credentials")
   }
   props.addTodo(title,desc);
  settitle("");
  setdesc("");
}
  return (
    <div className='container my-3'>
        <h3>ADD YOUR TODOS</h3>
        <form onSubmit={submit}>
    <div className="form-group">
      <label htmlFor="title">Title</label>
      <input type="title" className="form-control" value={title} id="title" onChange={(e)=>{settitle(e.target.value)}}  aria-describedby="emailHelp" placeholder="Enter Title"/>
     
    </div>
    <div className="form-group">
      <label htmlFor="desc">Description</label>
      <input type="desc" className="form-control" value={desc} onChange={(e)=>{setdesc(e.target.value)}} id="desc" placeholder="Enter description"/>
    </div>
    
           <button type="submit" className="btn btn-sm btn-success my-3">Add Todo</button>
  </form>
  </div>
  )
}
