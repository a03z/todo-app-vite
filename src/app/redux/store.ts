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
    status: boolean
}

const reducer = (state = initialState, action: ActionI) => {
    switch (action.type) {
        case CHANGE_IS_DONE:
            return {
                ...state,
                isDone: action.status,
            }
        default:
            return state
    }
}

export const changeIsDone = (status: boolean) => ({
    type: CHANGE_IS_DONE,
    status,
})

let reducers = combineReducers({ main: reducer })

let store = createStore(reducers)

window.__store__ = store
export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
