import { createStore } from 'redux'
import { combineReducers } from 'redux'

declare global {
    interface Window {
        __store__: any
    }
}

const ADD_TODO: string = 'ADD_TODO'

type TodoI = [{ message?: string; id: number }]

let initialState: { todos: TodoI } = {
    todos: [{ message: 'Add more TODOS!!!', id: 0 }],
}

interface ActionI {
    type: string
    todoMessage: string
}

const reducer = (state = initialState, action: ActionI) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        message: action.todoMessage,
                        id: ++state.todos[0].id,
                    },
                ],
            }
        default:
            return state
    }
}

export const addTodo = (todoMessage: string) => ({
    type: ADD_TODO,
    todoMessage,
})

let reducers = combineReducers({ main: reducer })

let store = createStore(reducers)

window.__store__ = store
export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
