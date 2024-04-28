import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

export const useTodo = () =>{
    const init = () =>{
        return JSON.parse(sessionStorage.getItem('todos')) ?? []
    }
    const [todos, dispatchTodo] = useReducer(todoReducer, [], init);
    useEffect(() => {
        console.log(todos)
        sessionStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    const totalTodos = todos.length;

    const pendingTodos = todos.filter((todo)=>!todo.done).length

    const handleNewTodo = (todo) =>{
        console.log({todo});
        const action = {
            type: 'add todo',
            payload: todo
        }
        dispatchTodo(action)
    }

    const handleRemoveTodo = (todo) =>{
        console.log({todo});
        const action = {
            type: 'remove todo',
            payload: todo
        }
        dispatchTodo(action)
    }
    const handleToogleTodo = (todo) =>{
        console.log({todo});
        const action = {
            type: 'toogle todo',
            payload: todo
        }
        dispatchTodo(action)
    }

    return{
        todos,
        handleNewTodo,
        handleRemoveTodo,
        handleToogleTodo,
        totalTodos,
        pendingTodos
    }

}