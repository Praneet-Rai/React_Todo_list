import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  
    let myStyle = {
minHeight : "67vh",
margin: "46px auto",
    }
    
    return (
    <div className="container my-3" style = {myStyle}>
      <h3 className=" my-3">Todos List</h3>
   {props.todos.length===0? "No Todos to display here" :
   props.todos.map((todo)=>{
    return( <>
    <TodoItem todo = {todo} key={todo.jkl} onDelete={props.onDelete}/> <hr/>
    </>)
   })}
    </div>
  ) }