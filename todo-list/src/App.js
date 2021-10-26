import React, { useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
//Components
import Header from "./Header.js"
import data from "./data.json"
import ToDoList from "./ToDoList.js"
import ToDoForm from "./ToDoForm.js"



function App() {

  const [ toDoList, setToDoList ] = useState(data);
  const [dat, setData] = useState(null);
  
  useEffect(() =>{
    fetch("http://localhost:3001/api")
      .then((res) => res.json())
      .then((dat) => setData(dat.message))
    console.log("hello")
  }, [])

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

const handleFilter = () => {
  let filtered = toDoList.filter(task => {
    return !task.complete;
  });
  setToDoList(filtered);
}

const addTask = ( userInput ) => {
  let copy = [...toDoList];
  copy = [...copy, { id: toDoList.length + 1, task: userInput, complete:false }];
  setToDoList(copy);
}

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
      <p>{!dat ? "Loading..." : dat}</p>
    </div>
  );
}

export default App;
