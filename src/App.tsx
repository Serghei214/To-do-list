import React, {useState} from 'react';
import './App.css';
import {TaskType, TodoList} from './TodoList';

export type FilterValuesType = 'all' | 'completed' | 'active';

export function Counter() {
    let arr = useState(5);
    let data = arr[0];
    let setData = arr[1];

    // every time we click on 5 it increments + 1
    return <div onClick={() => {
        setData(data + 1)
    }}>{data}</div>
}

function App() {

    /*    let initTasks = [
            { id: 1, title: "HTML&CSS", isDone: false },
            { id: 2, title: "JS", isDone: false },
            { id: 3, title: "React", isDone: true },
            { id: 4, title: "Redux", isDone: false }
        ];*/

    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML&CSS', isDone: false},
        {id: 2, title: 'JS', isDone: false},
        {id: 3, title: 'React', isDone: true},
        {id: 4, title: 'Redux', isDone: false}
    ]);
    let [filter, setFilter] = useState<FilterValuesType>('all');

    /*let tasks = arr[0];
    let setTasks = arr[1];*/

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    let tasksForTodoList = tasks;
    if (filter === 'completed') {
        tasksForTodoList = tasks.filter(t => t.isDone === true);
    }
    if (filter === 'active') {
        tasksForTodoList = tasks.filter(t => t.isDone === false);
    }


    return (
        <div className="App">
            <TodoList title={'What to learn'}
                      tasks={tasksForTodoList}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;