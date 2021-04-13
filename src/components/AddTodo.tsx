import { CheckCircleIcon } from '@heroicons/react/solid'
import React from 'react'
import { useDispatch } from 'react-redux'
import { AddTodoStyle, Textarea } from '../app/styles/styles'
import { addTodo } from '../app/redux/store'

export const AddTodo = () => {
    const dispatch = useDispatch()

    const addNewTodo = () => {
        dispatch(addTodo('asdasd'))
    }

    return (
        <AddTodoStyle>
            <Textarea name="addTodo" />
            <CheckCircleIcon onClick={addNewTodo} className="icon" />
        </AddTodoStyle>
    )
}
