import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddTodoForm, AddTodoStyle } from '../app/styles/styles'
import { addTodo } from '../app/redux/store'
import { useForm } from 'react-hook-form'

type Inputs = {
    example: string
    exampleRequired: string
}

export const AddTodo = () => {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>()

    let [counter, setCounter] = useState(0)
    const addNewTodo = (message: string) => {
        setCounter(++counter)
        dispatch(addTodo(message, counter))
    }

    const onSubmit = (data: any) => {
        let message = data.example
        addNewTodo(message)
        reset()
    }
    return (
        <AddTodoStyle>
            <AddTodoForm onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="field"
                    placeholder="What you wanna do today?"
                    {...register('example', { required: true })}
                />
                {errors.example && <span>This field is required</span>}
            </AddTodoForm>
        </AddTodoStyle>
    )
}
