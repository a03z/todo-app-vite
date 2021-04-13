import React, { useState } from 'react'
import { IsDoneIcon, Item, ItemNumber } from '../app/styles/styles'
import { CheckIcon, XIcon } from '@heroicons/react/solid'

interface ItemProps {
    message: string
    number: number
}

export const TodoItem = ({ message, number }: ItemProps) => {
    const [isDone, setDone] = useState(false)

    const onDone = () => {
        setDone(true)
    }
    const onUnDone = () => {
        setDone(false)
    }

    return (
        <Item>
            <ItemNumber>{number}</ItemNumber>
            <p>{message}</p>
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
