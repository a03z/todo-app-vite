import styled from 'styled-components'

export const Item = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: 50px 1fr 50px;
    border: 1px solid rgba(120, 254, 224, 1);
    background: white;
    width: 100%;
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
