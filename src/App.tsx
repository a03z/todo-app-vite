import React, { useState } from 'react'
import logo from './logo.svg'
import 'normalize.css'
import './app/styles/styles.css'
import { Todo } from './components/Todo'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
    background: rgba(75, 194, 197, 1);
}
`

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Todo />
        </>
    )
}

export default App
