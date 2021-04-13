import React from 'react'
import 'normalize.css'
import { Todo } from './components/Todo'
import autosize from 'autosize'
import { GlobalStyle } from './app/styles/styles'

autosize(document.querySelectorAll('textarea'))

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Todo />
        </>
    )
}

export default App
