
class Store {
    constructor() {
        this.people = [];
    }

    addPeople(person) {
        this.people.push(person);
    }

    removePeople(person) {
        this.people = this.people.filter((p) => p !== person);
    }

    notify() {
        this.people.forEach((person) => person.update());
    }
}
class Person {
    constructor(name) {
        this.name = name;
    }

    update() {
        console.log(`${this.name} is notified`);
    }
}

const store = new Store();
const person1 = new Person("Person 1");
const person2 = new Person("Person 2");
store.addPeople(person1);
store.addPeople(person2);
store.notify();





class GamePlan {
    constructor() {
        this.strategy = null;
    }

    changeStrategy(strategy) {
        this.strategy = strategy;
    }

    execute() {
        this.strategy.execute();
    }
}
//     We have three strategies
class Attack {
    execute() {
        console.log("Attack");
    }
}
class Defence {
    execute() {
        console.log("Defence");
    }

}
class Medium {
    execute() {
        console.log("Medium");
    }
}

const gamePlan = new GamePlan();
gamePlan.changeStrategy(new Attack());
gamePlan.execute();
gamePlan.changeStrategy(new Defence());
gamePlan.execute();
gamePlan.changeStrategy(new Medium());
gamePlan.execute();



class Pizza {
    constructor(name) {
        this.name = name;
    }
    addTopping(topping) {
        console.log(`${this.name} has been topped with ${topping}`);
    }
}
class PeppyPaneer extends Pizza {
    constructor() {
        super("Peppy Paneer");
    }
}
class Farmhouse extends Pizza {
    constructor() {
        super("Farmhouse");
    }
}
class Margherita extends Pizza {
    constructor() {
        super("Margherita");
    }
}
class ChickenFiesta extends Pizza {
    constructor() {
        super("Chicken Fiesta");
    }
}
const peppyPaneer = new PeppyPaneer();
peppyPaneer.addTopping("Fresh Tomato");
const farmhouse = new Farmhouse();
farmhouse.addTopping("Fresh Tomato");
const margherita = new Margherita();
margherita.addTopping("Fresh Tomato");
const chickenFiesta = new ChickenFiesta();
chickenFiesta.addTopping("Fresh Tomato");


class Freelancer {
    constructor(name) {
        this.name = name;
    }
    work() {
        console.log(`${this.name} is working`);
    }
}
class Project {
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log(`Project ${this.name} has been started`);
    }
    end() {
        console.log(`Project ${this.name} has been ended`);
    }
}
class Payment {
    constructor(amount) {
        this.amount = amount;
    }
    pay() {
        console.log(`Payment of ${this.amount} has been done`);
    }
}
class FreelanceSystem {
    constructor() {
        this.freelancer = new Freelancer("Freelancer 1");
        this.project = new Project("Project 1");
        this.payment = new Payment(1000);
    }
    startProject() {
        this.project.start();
        this.freelancer.work();
        this.payment.pay();
        this.project.end();
    }
}
const freelanceSystem = new FreelanceSystem();
freelanceSystem.startProject();




class English {
    constructor() {
        this.greet = "Hello";
    }
    EnglishTranslation() {
        console.log('I am English');
    }
}
class Spanish {
    constructor() {
        this.saludo = "Hola";
    }
    SpanishTranslation() {
        console.log('I am Spanish');
    }
}
class Adapter {
    constructor(language) {
        this.language = language;
    }
    translate() {
        if (this.language instanceof English) {
            this.language.EnglishTranslation();
            }
        else if (this.language instanceof Spanish) {
            this.language.SpanishTranslation();
        }

    }
}
const english = new English();
const spanish = new Spanish();
const adapter = new Adapter(english);
adapter.translate();
const adapter2 = new Adapter(spanish);
adapter2.translate();


// 6-Make Demo apply Liskov substitution principle.

class Bird {
    fly() {
        console.log("Bird is flying");
    }
}
class Duck extends Bird {
    quack() {
        console.log("Duck is quacking");
    }
}
class Penguin extends Bird {
    swim() {
        console.log("Penguin is swimming");
    }
}
const bird = new Bird();
bird.fly();
const duck = new Duck();
duck.fly();
duck.quack();
const penguin = new Penguin();
penguin.swim();
penguin.fly();

