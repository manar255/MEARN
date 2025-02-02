const fs = require('fs')

const [, , action] = process.argv;
// console.log(process.argv);

let getAllTodo = () => {
    const data = (fs.existsSync('todo.json')) ? fs.readFileSync('todo.json', 'utf8') : '[]';
    const todo = JSON.parse(data);
    return todo;
}

let addTodo = (todo) => {
    const data = (fs.existsSync('todo.json')) ? fs.readFileSync('todo.json', 'utf8') : '[]';
    const todoList = JSON.parse(data);
    todoList.push({ id: todoList.length + 1, title: todo });
    fs.writeFileSync('todo.json', JSON.stringify(todoList));
}
let editTodo = (id, todo) => {
    const data = getAllTodo();
    const newData = data.map((t) => {
        if (t.id == id) {
            t.title = todo;
        }
        return t;
    })
    fs.writeFileSync('todo.json', JSON.stringify(newData));
}

let deleteTodo = (id) => {
    const data = getAllTodo();
    const newData = data.filter((t) => t.id != id);
    fs.writeFileSync('todo.json', JSON.stringify(newData));
}

switch (action) {
    case 'list':
        let todos = getAllTodo();
        let mapedTodos = todos.map((t) => { return { ID: t.id, Title: t.title ,Stats:true} })
        console.log(mapedTodos);
        break;
    case 'add':
        const [, , , data] = process.argv;
        addTodo(data);
        break;
    case 'edit':
        const [, , , edit_id, title] = process.argv;
        editTodo(edit_id, title);
        break;

    case 'delete':
        const [, , , id] = process.argv;
        deleteTodo(id);
        break;

}
