import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

//Components
import Header from "./Header.js"
import data from "./data.json"




function App() {

  const [ toDoList, setToDoList ] = useState(data);


  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList}/>
    </div>
  );
}

export default App;
