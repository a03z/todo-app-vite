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
    message: string
    id: number
}

let reducer = (state = initialState, action: ActionI) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [
                    ...state.todos,
                    {
                        message: action.message,
                        id: action.id,
                    },
                ],
            }
        default:
            return state
    }
}

export const addTodo = (message: string, id: number) => ({
    type: ADD_TODO,
    message,
    id,
})

let reducers = combineReducers({ main: reducer })

let store = createStore(reducers)

window.__store__ = store
export default store
