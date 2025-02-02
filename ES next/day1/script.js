let updateUser = (user) => {
    return { ...user, updated: true, password: "456asd" };
}
console.log(updateUser({ name: "Ali", password: "123" }))

let a = 5, b = 6;
[a, b] = [b, a];
console.log(a, b);

let items = ['American coffee', 'tea', 'French coffee', 'latte coffee', 'green tea', 'moka coffee', 'mojito']

let coffeeItems = items.filter((item) => {
    // return item.includes('coffee');
    return item.endsWith('coffee');
})
console.log(coffeeItems);


let nonCoffee = items.filter(item => !item.endsWith('coffee'))
console.log(nonCoffee);


let nonCoffeeOrTea = items.filter(item => !item.endsWith('coffee') && !item.endsWith('tea'))
console.log(nonCoffeeOrTea);


let markedItems = items.map(item => `${item} ★`)
console.log(markedItems);


markedItems.forEach(item => console.log(item));


let allStrings = items.every(item => typeof item === 'string')
console.log(allStrings);




let students = [
    { name: "Ahmed", grade: 100 },

    { name: "Shimaa", grade: 150 },

    { name: "Soha", grade: 120 },

    { name: "Mohamed", grade: 90 },
]
let passStudent = students.filter((student) => {
    return student.grade >= 100
})

let sNams = students.filter((s) => {
    return s.name.startsWith('S');
})
console.log(sNams);


let fMark = students.findIndex((s, i) => {
    return s.grade === 150
});
console.log(fMark+1);

let isJS =(path)=>{
    return path.endsWith('.js')||path.endsWith('.jsx')
}
console.log(isJS("/users/user.jsx")) 

console.log(isJS("/users/user.js"))

console.log(isJS("/users/user.ts"))