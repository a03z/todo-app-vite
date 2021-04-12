import React, { useState } from 'react'
import logo from './logo.svg'
import 'normalize.css'
import './app/styles/styles.css'
import { Todo } from './components/Todo'
import { createGlobalStyle } from 'styled-components'
import { RootStateOrAny, useSelector } from 'react-redux'

const GlobalStyle = createGlobalStyle`
body {
    background: rgba(75, 194, 197, 1);
}
`

const App = () => {
    const isDone = useSelector((state: RootStateOrAny) => state.main.isDone)
    return (
        <>
            <GlobalStyle />
            <Todo isDone={isDone} />
        </>
    )
}

export default App
