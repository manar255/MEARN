
interface Iuser{
    getname();
    getemail();
}
interface Iadmin extends Iuser{
    
    getrole();
}
class User implements Iuser{
    getname(){
        console.log('manar');
    }
    getemail(){
        console.log('manar@gmail.com');
    }
}
class Admin implements Iadmin{
    getname(){
        console.log('manar');
    }
    getemail(){
        console.log('admin@gmail.com');
    }
    getrole(){
        console.log('admin');
    }
}
let user = new User();
let admin = new Admin();
user.getname();
user.getemail();
admin.getname();



