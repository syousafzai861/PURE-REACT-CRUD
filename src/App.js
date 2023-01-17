import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { Addtodo } from "./MyComponents/Addtodo";
import React, { useState, useEffect } from "react";

function App() {
  let initTodo;
  if (localStorage.getItem("todos")===null) {
    initTodo = [];
  } else {
   initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("i am deleting", todo);
    settodo(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    console.log("i am deleting", todo);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("i am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    settodo([...todos, myTodo]);
    console.log(myTodo);
  };



  const [todos, settodo] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Header title="Simple Crud App" searchBar={true} />
      <Addtodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
