import { EDIT_TODO, MAKE_REFETCH_FLAG_FALSE, MAKE_REFETCH_FLAG_TRUE, RESET_TODO_FORM, SAVE_ALL_TODOS, UPDATE_TODO_FORM } from "./actionType";

const initialState = {
    todoForm:{
        todoName:'',
        assigneeName:'',
        priority:'4',
    },
    allTodos:null,
    reFetchAllTodosFlag:true,
    editFlowTriggered:false,
}

export const reducer = (state=initialState,action) => {
    switch (action.type) {
    
        case UPDATE_TODO_FORM:
            return{
                ...state,todoForm:{...state.todoForm,[action.fieldName]:action.payload}
            }
        break;

        case SAVE_ALL_TODOS:
            return{
                ...state,allTodos:action.payload
            }
        break;

        case MAKE_REFETCH_FLAG_FALSE:
            return{
                ...state,reFetchAllTodosFlag:false
            }
        break;

        case MAKE_REFETCH_FLAG_TRUE:
            return{
                ...state,reFetchAllTodosFlag:true
   
            }
        break;

        case RESET_TODO_FORM:
            return {
                ...state,
                editFlowTriggered:false,
                todoForm:{
                    todoName:'',
                    assigneeName:'',
                    priority:'4',
                }
            }
        break;

        case EDIT_TODO:
            // get require todo from all todo array
            const tempArray = state.allTodos.filter((todo)=>todo._id===action.payload)
            const requireTodo = tempArray[0]

            // set this required todo to formData
            let priority=''

            if(requireTodo.priority==='High'){
                priority='1'
            }else if(requireTodo.priority==='Medium'){
                priority='2'

            }else if(requireTodo.priority==='Low'){
                priority='3'

            }
            const data = {
                ...requireTodo,
                priority:priority
            }
            const todoObj = {

            }
            return {
                ...state,todoForm:data,editFlowTriggered:true
            }


        break;
    
        default:
            return state
            break;
    }
}