let taskInput = document.getElementById('taskInput')
let inputbtn = document.getElementById('inputbtn')
let tasksList = document.getElementById('tasksList')

// let tasks = [];




let addTask = async () => {

    let url = 'http://localhost:3000/todos'
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            title: taskInput.value,
            tags: ['work', 'home'],
           
        })

    })
    let data = await response.json()


    // let task = {
    //     id: JSON.stringify(new Date()),
    //     title: taskInput.value,
    //     completed: false
    // }
    // tasks.push(task);
    taskInput.value = ""
    showTasks();

}

let deleteTask = async (id) => {
    // console.log(task.id,id);
    await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })


    // tasks = tasks.filter(task => task.id != id)
    showTasks();
}
let togeleCompleteTask = async (id) => {
    // tasks = tasks.map(task => {
    //     {
    //         if (task.id == id) {
    //             task.completed = !task.completed
    //         }

    //     }
    //     return task
    // })
    await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            status: 'done'
        })
    })
    showTasks();
}
let editTask = async(task) => {
    // tasks = tasks.map((t) => {

    //     if (JSON.stringify(task.id) == t.id) {
    //         // console.log('lllllloooooooooooolllll');

    //         return task;
    //     }
    //     return t;
    // })
    console.log(task);
    await fetch(`http://localhost:3000/todos/${task.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`

        },
        body: JSON.stringify({
            title: task.title
        })
    })

    showTasks();
}
let ShowEditBox = (id, title, completed) => {
    // console.log(id,title);

    let editBox = document.createElement('div')
    editBox.classList.add('bg-light', 'shadow', 'd-flex', 'justify-content-center', 'align-items-center', 'p-5', 'gap-2', 'shadow', 'm-5', 'position-absolute', 'top-50', 'start-50', 'translate-middle')
    editBox.innerHTML = `
    <input type="text" id="editInput" placeholder="Enter your task" value='${title}'>
    <button class="btn btn-primary" id="editbtn" >Edit task</button>
    `
    document.body.appendChild(editBox)

    let editInput = document.getElementById('editInput')
    let editbtn = document.getElementById('editbtn')


    editbtn.addEventListener('click', () => {
        let newTask = { id, title: editInput.value }
        editTask(newTask);
        editBox.remove();
    })

}

let showTasks = async () => {
    tasksList.innerHTML = ""
    const res = await fetch('http://localhost:3000/todos/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }
    );
    const tasks = await res.json();
    if (tasks.length == 0) {
        tasksList.innerHTML = "<h1 class='text-center'>No tasks</h1>"
    }
    else{
        console.log(tasks);
        tasks.forEach((task) => {
            let taskElement = document.createElement('div')
            taskElement.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'm-3')
            task={...task,id:task._id}
    console.log(task);
            taskElement.innerHTML = `
            <p class="fs-5 ${task.status == 'done' ? 'text-decoration-line-through' : ''}" >${task.title}</p>
            <div>
                <button class="btn btn-success" onclick='togeleCompleteTask(${JSON.stringify(task.id)})'><img src="./images/progress-complete.png" alt=""></button>
                <button class="btn btn-secondary" onclick='ShowEditBox("${task.id}","${task.title}",${task.completed})'><img src="./images/edit.png" alt=""></button>
                <button class="btn btn-danger" onclick='deleteTask(${JSON.stringify(task.id)})'><img src="./images/trash.png" alt=""></button>
            </div>
            `
    
            tasksList.appendChild(taskElement);
        })
    }
    
}




inputbtn.addEventListener('click', () => {
    addTask();
})

showTasks();