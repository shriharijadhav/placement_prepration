export const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL

export const saveTodo = {
    API_ROUTE : BACKEND_BASE_URL + '/createTodo'
}


export const getALlTodos = {
    API_ROUTE : BACKEND_BASE_URL + '/fetchAllTodos'
}


