import React from 'react'
import Todo from "./ToDo"


const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <Todo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>)
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>)
}

export default ToDoList;


