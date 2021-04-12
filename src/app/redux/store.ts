import { createStore } from 'redux'
import { combineReducers } from 'redux'

declare global {
    interface Window {
        __store__: any
    }
}

const CHANGE_IS_DONE: string = 'CHANGE_IS_DONE'

let initialState = {
    isDone: false,
}

interface ActionI {
    type: string
}

const reducer = (state = initialState, action: ActionI) => {
    switch (action.type) {
        case CHANGE_IS_DONE:
            return {
                ...state,
                isDone: true,
            }
        default:
            return state
    }
}

export const changeIsDone = () => ({
    type: CHANGE_IS_DONE,
})

let reducers = combineReducers({ main: reducer })

let store = createStore(reducers)

window.__store__ = store
export default store
