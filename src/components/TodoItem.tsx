import React from 'react'
import { IsDoneIcon, Item, ItemNumber } from '../app/styles/styles'
import { CheckIcon, XIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux'
import { changeIsDone } from '../app/redux/store'

interface ItemProps {
    title: string
    isDone: boolean
    number: number
}

export const TodoItem = ({ title, isDone, number }: ItemProps) => {
    const dispatch = useDispatch()

    const onDone = () => {
        dispatch(changeIsDone(true))
    }
    const onUnDone = () => {
        dispatch(changeIsDone(false))
    }

    return (
        <Item>
            <ItemNumber>{number}</ItemNumber>
            <p>{title}</p>
            {isDone ? (
                <IsDoneIcon onClick={onUnDone}>
                    <CheckIcon className="isDoneIcon" />
                </IsDoneIcon>
            ) : (
                <IsDoneIcon onClick={onDone}>
                    <XIcon className="isDoneIcon" />
                </IsDoneIcon>
            )}
        </Item>
    )
}
