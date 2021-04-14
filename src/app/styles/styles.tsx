import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        background: url('https://sun1-84.userapi.com/impg/kPWXuenIXYqcqEviXVjxXIdoP9wSs9ptBv8RcA/1JJ11gNANqA.jpg?size=1280x720&quality=96&sign=bbfebc8f0db72a0d3734786db7333168&type=album') no-repeat;
        background-size: cover;
        height: 100vh;
    }
`

export const Header = styled.div`
    background: #24282b;
    border: 3px solid #ffffff;
    border-radius: 8px;
    width: 40%;
    margin: 30px auto;
    font-family: 'Poppins', sans-serif;
    @media (max-width: 1400px) {
        width: 600px;
    }
    @media (max-width: 680px) {
        width: 90%;
    }
`

export const HeaderText = styled.p`
    font-size: 48px;
    margin: 0;
    -webkit-text-stroke: 2px #ffffff;
    text-align: center;
    color: transparent;
    letter-spacing: 5px;
`

export const Item = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 50px 1fr;
    background: rgba(69, 126, 166, 0.6);
    width: 100%;
    margin-top: 5px;
    color: white;
    font-family: 'Source Sans Pro', sans-serif;
`

export const IsDoneIcon = styled.span`
    height: 25px;
    width: 25px;
    margin: 0 auto;
    color: ${(props: any) => props.color};
    border: 2px solid black;
    border-radius: 7px;
`
export const Container = styled.div`
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    width: 40%;
    margin: 30px auto;
    background: #24282b;
    border: 3px solid #ffffff;
    box-sizing: border-box;
    border-radius: 8px;
    @media (max-width: 1400px) {
        width: 600px;
    }
    @media (max-width: 680px) {
        width: 90%;
    }
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
    justify-content: space-around;
    .field {
        outline: none;
        padding: 0;
        background: #24282b;
        border: 0;
        width: 90%;
        height: 25px;
        color: white;
        resize: none;
        margin: 20px auto;
    }
    .field::placeholder {
        font-family: 'Poppins', sans-serif;
        font-style: italic;
        font-weight: normal;
        font-size: 12px;

        color: #8d8d8d;
    }
`
