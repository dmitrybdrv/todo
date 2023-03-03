import axios from 'axios'



export type TodolistType = {
    "id": string,
    "title": string,
    "addedDate": string,
    "order": number,
}

export type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {"API-KEY":"cf852e0a-0436-4406-b054-761be3e6ff4e"}
})

export const todolistApi = {

    getTodoLists() {

        const promise = instance
            .get<Array<TodolistType>>(`/todo-lists`)
            .then(res => {
                return res.data
            })

        return promise
    },

    createTodoList(newListTitle: string) {

        const promise = instance
            .post<ResponseType<{item: TodolistType}>>(`/todo-lists`, {title: newListTitle})
            .then(res => {
                return res
            })

        return promise
    },

    deleteTodoList(tolistId: string) {

        return instance
            .delete<ResponseType<TodolistType>>(`/todo-lists/${tolistId}`)
            .then(res => {
                return res
            })

    },

    updateTodoList(tolistId: string, newValue: string) {

        return instance
            .put<ResponseType<Array<TodolistType>>>(`/todo-lists/${tolistId}`, {title: newValue})
            .then(res => {
                return res
            })
    }

}