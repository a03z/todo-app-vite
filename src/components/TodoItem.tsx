import React from 'react'
import { Item } from '../app/styles/styles'
import { CheckIcon, XIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux'
import { changeIsDone } from '../app/redux/store'
import styled from 'styled-components'

export interface ItemProps {
    title: string
    isDone: boolean
    number: number
}

const ItemNumber = styled.span`
    text-align: center;
    width: 25px;
    height: 25px;
`
const IsDoneIcon = styled.span`
    height: 25px;
    width: 25px;
`

export const TodoItem = ({ title, isDone, number }: ItemProps) => {
    const dispatch = useDispatch()

    return (
        <Item>
            <ItemNumber>{number}</ItemNumber>
            <p>{title}</p>
            {isDone ? (
                <IsDoneIcon>
                    <XIcon
                        onClick={() => dispatch(changeIsDone())}
                        className="isDoneIcon"
                    />
                </IsDoneIcon>
            ) : (
                <IsDoneIcon>
                    <CheckIcon
                        onClick={() => dispatch(changeIsDone())}
                        className="isDoneIcon"
                    />
                </IsDoneIcon>
            )}
        </Item>
    )
}
