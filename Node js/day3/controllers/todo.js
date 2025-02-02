const todos = []


let createTodo = (req, res, next) => {
    try {
        const { title, tags, userId } = req.body;
        const todo = {
            id: todos.length + 1,
            title,
            status: 'new',
            tags,
            userId,
            create_at: new Date(),
            update_at: new Date()
        };
        todos.push(todo);
        // console.log(todos);
        res.status(201).json({ todos,message: 'Todo created successfully' });

    } catch (err) {
        next(err)
    }
}
let getUserTodos = (req, res, next) => {
    try {
        const userId = req.params.id;
        const limit= req.query.limit||10;
        const skip= req.query.skip||0;
        const userTodos = todos.filter(todo => todo.userId == userId);
        // console.log('get',userTodos);
        res.status(200).json(userTodos.slice(skip, skip + limit));
        
    }
    catch (err) {
        next(err)
    }
}

let updateTodo = (req, res, next) => {
    try {
        const id = req.params.id;
        const { title, tags ,status} = req.body;
        
        const todoIdx = todos.findIndex(todo => todo.id == id);
        if (todoIdx!== -1) {
            const todo = todos[todoIdx];
            todo.title = title||todo.title;
            todo.tags = tags||todo.tags;
            todo.status = status||todo.status;
            todo.update_at = new Date();
            todos[todoIdx] = todo;
        }
        else{
            res.status(404).json({ message: 'Todo not found' });
        }
        res.status(200).json({todos:todos, message: 'Todo updated successfully' });

    } catch (err) {
        next(err)
    }
}

let deleteTodo = (req, res, next) => {
    try {
        const id = req.params.id;
        const index = todos.findIndex(todo => todo.id == id);
        if (index != -1) {
            todos.splice(index, 1);
        }
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