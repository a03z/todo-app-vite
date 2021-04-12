import React from 'react'
import styled from 'styled-components'
import { TodoItem } from './TodoItem'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    width: 500px;
    margin: auto;
`

export const Todo = () => {
    return (
        <Container>
            <TodoItem title="hey" isDone={false} number={1} />
        </Container>
    )
}
