import React from 'react'
import { Container } from '../app/styles/styles'
import { TodoItem } from './TodoItem'

interface PropsI {
    isDone: boolean
}

export const Todo = (props: PropsI) => {
    return (
        <Container>
            <TodoItem title="hey" isDone={props.isDone} number={1} />
            <TodoItem title="hey" isDone={props.isDone} number={1} />
        </Container>
    )
}
