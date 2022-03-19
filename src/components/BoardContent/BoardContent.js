import React from 'react';
import './BoardContent.scss';
import Column from '../Column/Column'

function BoardContent() {
    return (
      <nav className="board-content">
        <Column />
      </nav>
    )
}

export default BoardContent;