export const initialData = {
    boards: [
        {
            id: 'board-1',
            columnOrder: ['column-1', 'column-2', 'column-3'],
            columns: [
                {
                    id: 'column-1',
                    boardId: 'board-1',
                    title: 'To do column',
                    cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6'],
                    cards: [
                        {
                            id: 'card-1',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 1',
                            cover: 'https://i1.wp.com/stevenmortimer.com/blog/5-steps-to-change-github-default-branch-from-master-to-main/steps-1-to-3-create-main-and-point-HEAD.png?zoom=2&w=578&ssl=1'
                        },
                        {
                            id: 'card-2',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 2',
                            cover: null
                        },
                        {
                            id: 'card-3',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 3',
                            cover: null
                        },
                        {
                            id: 'card-4',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 4',
                            cover: null
                        },
                        {
                            id: 'card-5',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 5',
                            cover: null
                        },
                        {
                            id: 'card-6',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 6',
                            cover: null
                        }
                    ]
                },
                {
                    id: 'column-2',
                    boardId: 'board-1',
                    title: 'Inprogress column',
                    cardOrder: ['card-7', 'card-8', 'card-9'],
                    cards: [
                        {
                            id: 'card-7',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 7',
                            cover: null
                        },
                        {
                            id: 'card-8',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 8',
                            cover: null
                        },
                        {
                            id: 'card-9',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 9',
                            cover: null
                        }
                    ]
                },
                {
                    id: 'column-3',
                    boardId: 'board-1',
                    title: 'Done column',
                    cardOrder: ['card-10', 'card-11', 'card-12'],
                    cards: [
                        {
                            id: 'card-10',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 10',
                            cover: null
                        },
                        {
                            id: 'card-11',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 11',
                            cover: null
                        },
                        {
                            id: 'card-12',
                            boardId: 'board-1',
                            columnId: 'column-1',
                            title: 'Title of card 12',
                            cover: null
                        }
                    ]
                }
            ]
        }
    ]
}