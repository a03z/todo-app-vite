import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
    background: rgba(75, 194, 197, 1);
}
`

export const Item = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: 50px 1fr 50px;
    border: 1px solid rgba(120, 254, 224, 1);
    background: white;
    width: 100%;
    margin-top: 5px;
`

export const ItemNumber = styled.span`
    text-align: center;
    width: 25px;
    height: 25px;
`
export const IsDoneIcon = styled.span`
    height: 25px;
    width: 25px;
`
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    width: 500px;
    margin: auto;
`

export const Textarea = styled.textarea`
    border: 1px solid rgba(120, 254, 224, 1);
    outline: none;
    padding: 0;
    background: white;
    width: 90%;
    resize: none;
`

export const AddTodoStyle = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    .icon {
        cursor: pointer;
        width: 25px;
        height: 25px;
    }
`

export const AddTodoButton = styled.button`
    outline: none;
    border: 0;
    background: none;
`

export const AddTodoForm = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    justify-content: space-around;
    .field {
        border: 1px solid rgba(120, 254, 224, 1);
        outline: none;
        padding: 0;
        background: white;
        width: 90%;
        height: 25px;
        resize: none;
    }
`
