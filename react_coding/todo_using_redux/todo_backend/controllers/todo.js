const todoModel = require('../models/todoModel');

exports.createTodo = async(req,res)=>{
    const {todoName, assigneeName, priority} = req.body

    const createdTodo = await todoModel.create({todoName:todoName, assigneeName:assigneeName, priority:priority})

    if(!createdTodo){
        return res.status(500).json({
            message:"Failed to create todo",
            todoCreationSuccess:false,

        })
    }

    return res.status(200).json({
        message:"New todo has been created successfully",
        todoCreationSuccess:true,
        createdTodo
    })
}

exports.fetchAllTodo = async(req, res)=>{
    const allTodos = await todoModel.find();
    return res.status(200).json({
        allTodos
    })
}


exports.deleteTodo = async(req, res)=>{
    const {todoId} = req.body;
    // console.log(req.body)
    
    const response = await todoModel.findByIdAndDelete(todoId);
    if(response){
        return res.status(200).json({
            message:"Todo deleted successfully",
            todoDeletionSuccess:true,
        })
    }

    return res.status(200).json({
        message:"Failed to delete todo",
        todoDeletionSuccess:false,
    })


}

exports.updateTodo = async(req, res)=>{
    try {
        const updatedTodo = req.body;
        const id = updatedTodo._id;
        
        const dataToUpdate = {todoName:updatedTodo.todoName,assigneeName:updatedTodo.assigneeName,priority:updatedTodo.priority}
        const response = await todoModel.findByIdAndUpdate(id,dataToUpdate,{new:true});
        
        if(response){
            return res.status(200).json({
                message:"Todo updated successfully",
                todoUpdated:true,
            })
        }

        return res.status(200).json({
            message:"Failed to update todo",
            todoUpdated:false,
        })


    } catch (error) {
        
    }
}