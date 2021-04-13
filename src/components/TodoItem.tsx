import React, { useState } from 'react'
import { IsDoneIcon, Item } from '../app/styles/styles'
import { CheckIcon, XIcon } from '@heroicons/react/solid'

interface ItemProps {
    message: string
    key: number
}

export const TodoItem = ({ message }: ItemProps) => {
    const [isDone, setDone] = useState(false)

    const onDone = () => {
        setDone(true)
    }
    const onUnDone = () => {
        setDone(false)
    }

    return (
        <Item>
            {isDone ? (
                <IsDoneIcon onClick={onUnDone}>
                    <XIcon color="red" className="isDoneIcon" />
                </IsDoneIcon>
            ) : (
                <IsDoneIcon onClick={onDone}>
                    <CheckIcon color="lime" className="isDoneIcon" />
                </IsDoneIcon>
            )}
            <p>{message}</p>
        </Item>
    )
}
