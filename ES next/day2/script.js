let getUsers = () => {
    fetch('https://dummyjson.com/users').then((res) => {
        return res.json()
    }).then((res) => {
        let users = res.users;
        // console.log(users)
        let usersList = document.getElementById('myTab');
        let content = document.getElementById('myTabContent');
        users.forEach(async (user, index) => {
            let userElement = document.createElement('li');
            userElement.innerHTML = `
            <li class="nav-item" role="presentation">
          <button onClick='getTodos(${user.id})' class="nav-link " id="home-tab" data-bs-toggle="tab" data-bs-target="#${'id' + user.id}"  type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">${user.firstName}</button>
        </li>`
            usersList.appendChild(userElement);


        });

    }).catch(err => {
        console.log(err)
    });
}
getUsers()
let getTodos=async(userId)=>{
    console.log('plol')
    myTabContent.innerHTML=''
    let respose = await fetch(`https://dummyjson.com/users/${userId}/todos`);
            let userTodo = await respose.json();
            // console.log(userTodo.todos)
            userTodo = userTodo.todos;
            let tabPane = document.createElement('div');
            // tabPane.setAttribute('class', 'tab-pane fade ')
            // tabPane.setAttribute('id', `${'id' + user.id}`)
            tabPane.setAttribute('role', 'tabpanel')
            // tabPane.setAttribute('aria-labelledby','home-tab')
            // tabPane.setAttribute('rotabindexle','0')

            userTodo.forEach((t) => {
                let todoElement = document.createElement('div')
                let bg=t.completed?'bg-secondary-subtle':'bg-secondary';
                let line = !t.completed?'text-decoration-line-through':'text-decoration-none';
                todoElement.classList.add('p-2',bg,line,'m-2','rounded')
                todoElement.innerHTML = `
                ${t.todo}
            `
                tabPane.appendChild(todoElement);
            })
            // console.log(tabPane)
            myTabContent.appendChild(tabPane);
}