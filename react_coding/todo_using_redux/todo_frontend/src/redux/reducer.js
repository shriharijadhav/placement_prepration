import { SAVE_ALL_TODOS, UPDATE_TODO_FORM } from "./actionType";

const initialState = {
    todoForm:{
        todoName:'',
        assigneeName:'',
        priority:'1',
    },
    allTodos:null,
    reFetchAllTodosFlag:true,
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
    
        default:
            return state
            break;
    }
}