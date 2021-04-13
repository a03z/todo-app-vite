import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import { Container } from '../app/styles/styles'
import { AddTodo } from './AddTodo'
import { TodoItem } from './TodoItem'

interface TodoI {
    message: string
    id: number
}

export const Todo = () => {
    const todos = useSelector((state: RootStateOrAny) => state.main.todos)

    let Todos = todos.map((todo: TodoI) => {
        return <TodoItem key={todo.id} message={todo.message} />
    })

    return (
        <Container>
            <AddTodo />
            {Todos}
        </Container>
    )
}
