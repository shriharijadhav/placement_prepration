import { SAVE_ALL_TODOS, UPDATE_TODO_FORM } from "./actionType"
import { apiConnector } from './../services/apiConnector';
import { getALlTodos, saveTodo } from "../services/apis";


export const updateTodoForm = (value,fieldName) =>{
    return{
        type:UPDATE_TODO_FORM,
        payload:value,
        fieldName:fieldName
    }
}

export const saveTodoInDatabase = (formData) =>{
    console.log(formData)
    return async(dispatch)=>{
        try {
            const response = await apiConnector('post',saveTodo.API_ROUTE,formData,null,null)
            console.log(response.data)
        } catch (error) {
            
        }
    }
}



export const saveAllTodos = (data) =>{
    return{
        type:SAVE_ALL_TODOS,
        payload:data
    }
}

export const fetchAllTodos = () =>{
    return async(dispatch)=>{
 
        try {
            const response = await apiConnector('get',getALlTodos.API_ROUTE,null,null,null)
            console.log(response.data)
            dispatch(saveAllTodos(response.data.allTodos))
        } catch (error) {
            console.log(error)
        } 
    }
}

