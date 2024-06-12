import { useEffect, useReducer } from "react"
import { todoReducer } from '../08-useReducer/todoReducer';


const initialState = []

const init = () => { 
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {
  
  const [todos, dispatch] = useReducer(todoReducer, initialState, init)
  useEffect(() => { localStorage.setItem('todos', JSON.stringify(todos))}, [todos])

  const handleNewTodo = (todo) => {
    dispatch({
        type: "add",
        payload: todo
    })

  }

  const handleDeleteTodo = (id) => {
      dispatch({
          type: "delete",
          payload: id
      })
  }

  const handleOnToggleTodo = (id) => {
      dispatch({
          type: "update",
          payload: id
      })
  }

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleOnToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length
  }
}
