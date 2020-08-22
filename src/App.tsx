import React from 'react';
import './App.css';
import {TodoList} from './TodoList';

function App() {

    const tasks1 = [
        { id: 1, title: "HTML&CSS", isDone: false },
        { id: 2, title: "JS", isDone: false },
        { id: 3, title: "React", isDone: true }
    ];

    const tasks2 = [
        { id: 1, title: "Chess", isDone: true },
        { id: 2, title: "Football", isDone: true },
        { id: 3, title: "Tennis", isDone: false }
    ];

    return (
        <div className="App">
            <TodoList title={"What to learn"} tasks={tasks1}/>
            <TodoList title={"Hobbies"} tasks={tasks2}/>
        </div>
    );
}

export default App;
