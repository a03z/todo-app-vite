import { CheckCircleIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    AddTodoButton,
    AddTodoForm,
    AddTodoStyle,
    Textarea,
} from '../app/styles/styles'
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
    } = useForm<Inputs>()

    let [counter, setCounter] = useState(0)
    const addNewTodo = (message: string) => {
        setCounter(++counter)
        dispatch(addTodo(message, counter))
        console.log('sent')
    }

    const onSubmit = (data: any) => {
        let message = data.example
        addNewTodo(message)
    }
    return (
        <AddTodoStyle>
            <AddTodoForm onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="field"
                    {...register('example', { required: true })}
                />
                <AddTodoButton type="submit">
                    <CheckCircleIcon className="icon" />
                </AddTodoButton>
                {errors.example && <span>This field is required</span>}
            </AddTodoForm>
        </AddTodoStyle>
    )
}
