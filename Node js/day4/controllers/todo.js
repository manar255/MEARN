const Todo=require('../models/todo');


let createTodo = async(req, res, next) => {
    try {
        const userId=req.userId;
        const { title, tags } = req.body;

        const todo=await Todo.create({
            title,
            tags,
            user:userId
        });
        
        res.status(201).json({ todo,message: 'Todo created successfully' });

    } catch (err) {
        next(err)
    }
}
let getUserTodos =async (req, res, next) => {
    try {
        const userId = req.userId;
        const limit= req.query.limit||10;
        const skip= req.query.skip||0;
       
        const todos = await Todo.find({user:userId});
        // console.log(todos);
        res.status(200).json(todos);
        
    }
    catch (err) {
        next(err)
    }
}

let updateTodo =async (req, res, next) => {
    try {
        const id = req.params.id;
        const { title, tags ,status} = req.body;
        
        
        const todo=await Todo.findByIdAndUpdate(id,{
            title,
            tags,
            status
        });


        res.status(200).json({todo, message: 'Todo updated successfully' });

    } catch (err) {
        next(err)
    }
}

let deleteTodo =async (req, res, next) => {
    try {
        const id = req.params.id;

        const todo=await Todo.findOneAndDelete(id);
        
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (err) {
        next(err)
    }
}

module.exports = {
    createTodo,
    getUserTodos,
    updateTodo,
    deleteTodo
}