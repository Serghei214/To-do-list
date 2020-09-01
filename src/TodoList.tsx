import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    addTask: (title: string) => void
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
}

export function TodoList(props: PropsType) {
    let [title, setTitle] = useState<string>('');

    const addTask = () => {
        props.addTask(title);
        setTitle('');
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask()
        }
    }

    const onAllClickHandler = () => props.changeFilter('all')
    const onCompletedClickHandler = () => props.changeFilter('completed')
    const onActiveClickHandler = () => props.changeFilter('active')


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyUpHandler}
                />
                <button onClick={addTask}>+</button>
            </div>
            <ul>

                {
                    props.tasks.map(t => <li><input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={() => {
                                props.removeTask(t.id)
                            }}>X
                            </button>
                        </li>
                    )
                }
            </ul>
            <div>
                <button onClick={onAllClickHandler}>All
                </button>
                <button onClick={onActiveClickHandler}>Active
                </button>
                <button onClick={onCompletedClickHandler}>Completed
                </button>
            </div>
        </div>
    )
}