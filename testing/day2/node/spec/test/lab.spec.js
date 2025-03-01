const app = require("../..");
const { clearDatabase } = require("../../db.connection");
const supertest = require("supertest");

let req = supertest(app);
describe("lab testing:", () => {
  let newUser, userInDB;
  beforeEach(async () => {
    newUser = { name: "Ali", email: "asd@asd.com", password: "asdasd" };
    let res = await req.post("/user/signup").send(newUser);
  });
  afterAll(async () => {
    await clearDatabase();
  });

  describe("users routes:", () => {
    // Note: user name must be sent in req query not req params
    it("req to get(/user/search) ,expect to get the correct user with his name", async () => {
      let res = await req.get("/user/search").query({ name: "Ali" });
      expect(res.body.data.name).toBe("Ali");
    });

    it("req to get(/user/search) with invalid name ,expect res status and res message to be as expected", async () => {
      let res = await req.get("/user/search").query({ name: "Manar" });
      expect(res.status).toBe(200);
    });
  });

  describe("todos routes:", () => {
    let task;
    let user2,token2;
    beforeEach(async () => {
        newUser={ name:"Ali",email:"asd@asd.com",password:"asdasd" }
        await req.post("/user/signup").send(newUser)
         let user=await req.post("/user/login").send(newUser)
         token=user.body.data;


         await req.post("/user/signup").send({ name:"Manar",email:"asd@asd.com",password:"asdasd" })
          user2=await req.post("/user/login").send({ name:"Manar",email:"asd@asd.com",password:"asdasd" })
         token2=user2.body.data;

          task= await req.post("/todo").send({title:"reading book"}).set({authorization:token});
          task=task.body.data
      });
    it("req to patch( /todo/) with id only ,expect res status and res message to be as expected", async () => {
        let res =await req.patch(`/todo/${task._id}`);
        expect(res.status).toBe(401);
        expect(res.body.message).toBe('you have not access , please login first')
        
    });
    it("req to patch( /todo/) with id and title ,expect res status and res to be as expected", async () => {

        let res =await req.patch(`/todo/${task._id}`).send({title:'new task'}).set({authorization:token});
       expect(res.status).toBe(200);
       expect(res.body.data.title).toBe('new task');
       
    });

    it("req to get( /todo/user) ,expect to get all user's todos", async () => {
        let res =await req.get('/todo/user').set({ authorization: token });
        // console.log('user 1=>',res.body);
        
        expect(res.status).toBe(200);
        expect(res.body.data.length).toBeGreaterThan(0)
        
    });
    // it("req to get( /todo/user) ,expect to not get any todos for user hasn't any todo", async () => {
       
    //     let res =await req.get('/todo/user').set({ authorization: token2 });
    //     // console.log('user 2=>',res.body);        
    //     expect(res.status).toBe(200);
    //     expect(res.body).toBe("Couldn't find any todos ")
    // });
  });

  afterAll(async () => {
      await clearDatabase()
  })
});
