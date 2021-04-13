import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/redux/store'
import { Container } from '../app/styles/styles'
import { AddTodo } from './AddTodo'
import { TodoItem } from './TodoItem'

export const Todo = () => {
    const todos = useSelector((state: RootState) => state.main.todos)

    let Todos = todos.map((t) => {
        return <TodoItem key={t.id} message={t.message} number={t.id} />
    })

    return (
        <Container>
            {Todos}
            <AddTodo />
        </Container>
    )
}
