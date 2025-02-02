const username = document.getElementById('username');
const password = document.getElementById('password');
const fName= document.getElementById('fName');
const lName= document.getElementById('lName');
const dob = document.getElementById('dob');

document.getElementById('register').addEventListener('click', async (e) => {
    e.preventDefault();
    const user = {
        username: username.value,
        password: password.value,
        firstName: fName.value,
        lastName: lName.value,
        dob: dob.value
    };
    const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    const data = await response.json();
    console.log(data);

    if (response.status === 201) {
        alert('User registered successfully');
        window.location.href = 'login.html';
    }
}
);
    

