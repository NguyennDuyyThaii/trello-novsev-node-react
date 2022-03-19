import React from 'react';
import './Column.scss'
import Task from '../Task/Task'
function Column() {
    return (
        <div className="column">
            <header>
                Brainstorm
            </header>
            <ul className="task-list">
                <Task />
                <li className="task-item">Nguyen duy thai .....</li>
                <li className="task-item">Nguyen duy thai .....</li>
                <li className="task-item">Nguyen duy thai .....</li>
                <li className="task-item">Nguyen duy thai .....</li>
            </ul>
            <footer>
                Add another card
            </footer>
        </div>
    )
}
export default Column;