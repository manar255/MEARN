const app = require("../..")
const { clearDatabase } = require("../../db.connection")
const supertest = require("supertest")

let req=supertest(app)
describe("lab testing:", () => {
    let newUser,userInDB
    beforeEach(()=>{

         newUser={ name:"Ali",email:"asd@asd.com",password:"asdasd" }

    })
    afterAll(async()=>{
       await clearDatabase()
    })

    describe("users routes:", () => {
        // Note: user name must be sent in req query not req params
        it("req to get(/user/search) ,expect to get the correct user with his name", async () => {
            
            let res= await req.get("/user/search").query({name:'Ali'});
            console.log(res.body)
         })
        it("req to get(/user/search) with invalid name ,expect res status and res message to be as expected", async () => { })

    })


    describe("todos routes:", () => {
        it("req to patch( /todo/) with id only ,expect res status and res message to be as expected", async () => { })
        it("req to patch( /todo/) with id and title ,expect res status and res to be as expected", async () => { })

        it("req to get( /todo/user) ,expect to get all user's todos", async () => { })
        it("req to get( /todo/user) ,expect to not get any todos for user hasn't any todo", async () => { })

    })

    // afterAll(async () => {
    //     await clearDatabase()
    // })


})

// const request = require('supertest');
// const app = require('../../index'); // Adjust the path to your app

// describe("lab testing:", () => {

//     describe("users routes:", () => {
      
//         it("req to get(/user/search) ,expect to get the correct user with his name", async () => {
//             const res = await request(app).get('/user/search').query({ name: 'John' });
//             expect(res.status).toBe(200);
//             expect(res.body.name).toBe('John');
//         });

//         it("req to get(/user/search) with invalid name ,expect res status and res message to be as expected", async () => {
//             const res = await request(app).get('/user/search').query({ name: 'InvalidName' });
//             expect(res.status).toBe(404);
//             expect(res.body.message).toBe('User not found');
//         });

//         it("req to get(/user/search) without name ,expect res status and res message to be as expected", async () => {
//             const res = await request(app).get('/user/search');
//             expect(res.status).toBe(400);
//             expect(res.body.message).toBe('Name query parameter is required');
//         });
//     });

//     describe("todos routes:", () => {
//         it("req to patch( /todo/) with id only ,expect res status and res message to be as expected", async () => {
//             const res = await request(app).patch('/todo/').send({ id: 1 });
//             expect(res.status).toBe(400);
//             expect(res.body.message).toBe('Title is required');
//         });

//         it("req to patch( /todo/) with id and title ,expect res status and res to be as expected", async () => {
//             const res = await request(app).patch('/todo/').send({ id: 1, title: 'New Title' });
//             expect(res.status).toBe(200);
//             expect(res.body.message).toBe('Todo updated successfully');
//         });

//         it("req to get( /todo/user) ,expect to get all user's todos", async () => {
//             const res = await request(app).get('/todo/user').query({ userId: 1 });
//             expect(res.status).toBe(200);
//             expect(res.body.todos).toBeInstanceOf(Array);
//         });

//         it("req to get( /todo/user) ,expect to not get any todos for user hasn't any todo", async () => {
//             const res = await request(app).get('/todo/user').query({ userId: 2 });
//             expect(res.status).toBe(200);
//             expect(res.body.todos.length).toBe(0);
//         });

//         it("req to delete( /todo/) with valid id ,expect res status and res message to be as expected", async () => {
//             const res = await request(app).delete('/todo/').send({ id: 1 });
//             expect(res.status).toBe(200);
//             expect(res.body.message).toBe('Todo deleted successfully');
//         });

//         it("req to delete( /todo/) with invalid id ,expect res status and res message to be as expected", async () => {
//             const res = await request(app).delete('/todo/').send({ id: 999 });
//             expect(res.status).toBe(404);
//             expect(res.body.message).toBe('Todo not found');
//         });
//     });

//     // afterAll(async () => {
//     //     await clearDatabase()
//     // })
// });