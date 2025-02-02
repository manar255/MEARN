// class CEO {
//     constructor(n,s) {
//         if (!CEO.x) {
//             this.name = n;
//             this.salary = s;
//             CEO.x = this;
//         }
//         else {
//             return CEO.x;
//         }
//     }
// }
// let obj = new CEO('Manar',1000000);
// let obj2=new CEO('Ahmed',255555);
// console.log(obj,obj2);


/*=================== task 2 ================*/


// class Vehicle {
//     constructor(color, model) {
//         this.color = color;
//         this.model = model;
//     }
// }
// class Car extends Vehicle {
//     constructor(color, model, numDoors) {
//         super(color, model);
//         this.numDoors = numDoors;
//     }
// }
// class Van extends Vehicle {
//     constructor(color, model, seatingCapacity) {
//         super(color, model);
//         this.seatingCapacity = seatingCapacity;
//     }

// }
// class VehicleFactory {
//     constructor(type) {
//         this.type=type;
//     }
//     factory(color, model) {
//         if (this.type === 'car') {
//             return new Car(color, model, 4);
//         }
//         else if (this.type === 'van') {
//             return new Van(color, model, 8);
//         }
//     }
// }
// let car = new VehicleFactory('car');
// let van = new VehicleFactory('van');
// console.log(car.factory('red','Toyota'),van.factory('blue','Honda'));

/*=================== task 3 ================*/


class ToyDuck {
    constructor(color, price) {
        this.color = color;
        this.price = price;
    }
}
class ToyCar {
    constructor(color, price, name) {
        this.color = color;
        this.price = price;
        this.name = name;
    }
}
class ToyFactory {
    constructor(type) {
        this.type = type;
    }
    factory(color, price, name) {
        if (this.type === 'duck') {
            return new ToyDuck(color, price);
        }
        else if (this.type === 'car') {
            return new ToyCar(color, price, name);
        }

    }
}
let duck = new ToyFactory('duck');
let car = new ToyFactory('car');
console.log(duck.factory('yellow', 10), car.factory('red', 20, 'Toyota'));





/*=================== task 4 ================*/



class ConfigureVals {
    constructor(xpoint = 0, ypoint = 0, shape = null) {
      if (ConfigureVals.instance) return ConfigureVals.instance;
      this.xpoint = xpoint;
      this.ypoint = ypoint;
      this.shape = shape;
      ConfigureVals.instance = this;
    }
    getConfiguration() {
        return `x: ${this.xpoint}, y: ${this.ypoint}, shape: ${this.shape}`;
        }


  }

  const config1 =new ConfigureVals(10, 20, "circle");
  const config2 =new ConfigureVals(30, 40, "square");
  console.log(config2.getConfiguration());
  console.log(config2 ); 





/*=================== task 5 ================*/


// class Emp {
//     constructor(obj) {
//         this.name = obj.name;
//         this.age = obj.age;
//         this.dept = obj.dept;
//         this.manager = obj.manager;
//         this.maritalStatus = obj.maritalStatus;
//     }

// }
// class EmpBuilder {
//     constructor(name, age, dept) {
//         this.name = name;
//         this.age = age;
//         this.dept = dept;
//         this.manager = false;
//         this.maritalStatus = 'single'
//     }
//     setManager() {
//         this.manager = true;
//         return this;
//     }
//     setMaritalStatus(status) {
//         this.maritalStatus = status;
//         return this;
//     }
//     build() {
//         return new Emp(this);
//     }
// }
// const emp = new EmpBuilder('John', 30, 'IT').setManager().setMaritalStatus('married').build();
// console.log(emp);


/*=================== task 6 ================*/

// dendance injection

// class Bed {
//     constructor(w, h, c) {
//         this.width = w;
//         this.height = h;
//         this.color = c;
//     }
// }
// class Wardrobe {
//     constructor(w, h, r, c) {
//         this.width = w;
//         this.height = h;
//         this.color = c;
//         this.shelf = r;
//     }

// }
// class Room{
//     constructor(bed, wardrobe){
//         this.bed = bed;
//         this.wardrobe = wardrobe;
//         }
// }
// let b=new Bed(5,5,'blue');
// let w=new Wardrobe(3,3,2,'red');
// let r=new Room(b,w);

/*=================== task 7 ================*/


// class Shape {
//     constructor(name) {
//         this.name = name;
//     }

// }
// class circle extends Shape {
//     constructor(radius) {
//         this.radius = radius;
//     }
//     getArea() {
//         return 3.14 * this.radius * this.radius;
//     }

// }
// class Square extends Shape {
//     constructor(side) {
//         this.side = side;
//     }
//     getArea() {
//         return this.side * this.side;
//     }
// }

/*=================== task 7 ================*/
// class Animal {
//     constructor(name, age, weight) {
//         this.name = name;
//         this.age = age;
//         this.weight = weight;
//     }

// }
// class Dog extends Animal {
//     getType() {
//         return "Dog"
//     }
// }
// class Cat extends Animal {
//     getType() {
//         return "Cat"
//     }
// }

