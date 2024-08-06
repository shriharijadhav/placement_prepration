import { EDIT_TODO, MAKE_REFETCH_FLAG_FALSE, MAKE_REFETCH_FLAG_TRUE, RESET_TODO_FORM, SAVE_ALL_TODOS, UPDATE_TODO_FORM } from "./actionType"
import { apiConnector } from './../services/apiConnector';
import { deleteTodo, getALlTodos, saveTodo, updateTodo } from "../services/apis";


export const updateTodoForm = (value,fieldName) =>{
    return{
        type:UPDATE_TODO_FORM,
        payload:value,
        fieldName:fieldName
    }
}

export const makeRefetchFlagTrue = () =>{
    return{
        type:MAKE_REFETCH_FLAG_TRUE
    }
}

export const makeRefetchFlagFalse = () =>{

    return{
        type:MAKE_REFETCH_FLAG_FALSE
    }
}

export const resetTodoForm = ()=>{
    return {
        type:RESET_TODO_FORM
    }
}

export const saveTodoInDatabase = (formData) =>{

    let priority=''

    if(formData.priority==='1'){
        priority='High'
    }else if(formData.priority==='2'){
        priority='Medium'

    }else if(formData.priority==='3'){
        priority='Low'

    }
    const data = {
        ...formData,
        priority:priority
    }

    return async(dispatch)=>{
        try {
            const response = await apiConnector('post',saveTodo.API_ROUTE,data,null,null)
           if(response.data.todoCreationSuccess){
                dispatch(makeRefetchFlagTrue())
                dispatch(resetTodoForm())
           }
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
            // console.log(response.data)
           if(response.data){
            dispatch(saveAllTodos(response.data.allTodos))
            dispatch(makeRefetchFlagFalse())

           }
        } catch (error) {
            console.log(error)
        } 
    }
}


export const deleteTodoById = (id) =>{
    const data ={
        todoId:id
    }
    return async(dispatch)=>{
        try {
            const response = await apiConnector('delete',deleteTodo.API_ROUTE,data,null,null)
            if(response.data.todoDeletionSuccess){
                dispatch(makeRefetchFlagTrue())
            }
        } catch (error) {
            
        }
    }
}


export const  editTodo = (id) =>{
    return{
        type:EDIT_TODO,payload:id
    }
}


export const updateTodoInDatabase = (todoObject) =>{
    return async(dispatch)=>{
        try {
            console.log(' 1')
            const response = await apiConnector('patch',updateTodo.API_ROUTE,todoObject,null,null)
            if(response.data.todoUpdated){
                dispatch(resetTodoForm())
                dispatch(makeRefetchFlagTrue())
            }
        } catch (error) {
            console.log('object')
        }
    }
}