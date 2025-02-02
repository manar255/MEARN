const username = document.getElementById('username');
const password = document.getElementById('password');
const login = document.getElementById('login');

login.addEventListener('click', async (e) => {
    e.preventDefault();
    const user = {
        username: username.value,
        password: password.value
    };
    const response = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    const data = await response.json();
    console.log(data);

    if (response.status === 200) {
        alert('User logged in successfully');
        const token= data.token;
        console.log(token);
        localStorage.setItem('token', token);
        window.location.href = 'index.html';
    }

    if (data.status === 'fail') {
        alert('Invalid credentials');
    }
}
);