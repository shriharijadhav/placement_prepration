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