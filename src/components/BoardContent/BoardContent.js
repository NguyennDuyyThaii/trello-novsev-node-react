import React, { useState, useEffect } from 'react';
import './BoardContent.scss';
import Column from '../Column/Column';
import { initialData } from 'actions/initialData';
import { isEmpty } from 'lodash';
import { mapOrder } from 'utilities/sorts'
function BoardContent() {
  const [board, setBoard] = useState({})
  const [columns, setColumns] = useState({})

  useEffect(() => {
    const boardFromDb = initialData.boards.find(board => board.id === 'board-1')
    if (boardFromDb) {
      setBoard(boardFromDb)

      // sort column
      
      setColumns(mapOrder(boardFromDb.columns, boardFromDb.columnOrder, 'id'))
    }
  }, []) // [] chi chay 1 lan

  if (isEmpty(board)) {
    return <div className="not-found" style={{ 'padding': '10px', 'color': 'white' }}>Board not found</div>
  }
  return (
    <nav className="board-content">
      {columns.map((column, index) => <Column key={index} column={column} />)}
    </nav>
  )
}

export default BoardContent;