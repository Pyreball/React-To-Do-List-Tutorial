import React, { useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
//Components
import Header from "./Header.js"
import data from "./data.json"
import ToDoList from "./ToDoList.js"
import ToDoForm from "./ToDoForm.js"
import axios from 'axios'


function App() {

  const [ toDoList, setToDoList ] = useState([]);
  const [tasks, setTasks] = useState([]);
  
  const getData = async() => {
    const res = await axios.get('http://localhost:5000/api/task')
    setToDoList(res.data)
  }

  useEffect(() => {
    const temp = localStorage.getItem("toDoList")
    const loadedList = JSON.parse(temp);

    if(loadedList){
      setToDoList(loadedList)
    }
  },[])
/**
 * Working with a server notes
 * 
 * everytime toDoList is update I will need to update all changed elements in the DB
 * every item that is deleted needs to be removed from DB.
 * Potentially this can be done with map? unsure
 * _id does exists in the loaded toDoList possibly could filter existing todoList comparing to DB entiries then delete each left over entry
 */
  /**useEffect(() => {
    const json = JSON.stringify(toDoList)
    localStorage.setItem("toDoList", json)
  }, [toDoList])
*/
useEffect(() => {
  getData()
  
},[])
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
      
    </div>
  );
}

export default App;
