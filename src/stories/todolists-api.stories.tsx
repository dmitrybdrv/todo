import React, {useEffect, useState} from 'react'
import {todolistApi, TodolistType} from "../api/todolistApi";

export default {
    title: 'API'
}



export const GetTodolists = () => {

    const [state, setState] = useState<null | Array<TodolistType>>(null)


    useEffect(() => {

        todolistApi.getTodoLists()
            .then((data) => {
                setState(data)
            })
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

    }, [])


    return <div>{JSON.stringify(state)} <strong>Total: {state !== null ? state.length : ''}</strong></div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {

        todolistApi.createTodoList('HAAAAAA')
            .then(res => {
                console.log(res)
            })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)


    useEffect(() => {

        const listID = '8e182918-d61e-4bcc-86dc-1894b2c9b030'

        todolistApi.deleteTodoList(listID)
            .then(res => {
                setState(res.data)
            })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {

        const todolistID = '37ab18e6-5a24-4d8f-bf6e-732aaa4d8c10'
        const newTitle = 'ONE'

        todolistApi.updateTodoList(todolistID, newTitle)
            .then(res => {
                setState(res.data)
            })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}
