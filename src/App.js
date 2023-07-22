
import './App.css';

import React, { useState } from 'react'

import TodoInput from './components/TodoInput';

import TodoList from './components/TodoList';



function App() {

  let [listTodo, setListTodo]= useState([]);

  let addList = (inputText)=>{

    if(inputText!=='')
    setListTodo([...listTodo,inputText]);
  }

  let deleteListItem = (key)=>{
    let newListToDo = [...listTodo];
    newListToDo.splice(key,1)
    setListTodo([...newListToDo])
  }


  return (
    <div className='main-container'>

     <div className='center-container'>

      <TodoInput addList={addList} />

      <h1 className='app-heading'>ToDo</h1>

    <hr/>

    {listTodo.map((listItem,i)=>{
      return (

        <TodoList key={i} index = {i}  item={listItem} deleteItem ={deleteListItem}/>

      )
      
    })}

     

      


     </div>

     </div>
  )
}

export default App


