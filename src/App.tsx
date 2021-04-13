import React from 'react'
import 'normalize.css'
import { Todo } from './components/Todo'
import autosize from 'autosize'
import { GlobalStyle, Header, HeaderText } from './app/styles/styles'

autosize(document.querySelectorAll('textarea'))

const App = () => {
    return (
        <>
            <Header>
                <HeaderText>TO DO LIST</HeaderText>{' '}
            </Header>
            <GlobalStyle />
            <Todo />
        </>
    )
}

export default App
