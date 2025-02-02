let n: string = "Manar";
let age: number = 25;
let isMarried: boolean = true;

let x: (string | number) = 5;
x = '4';

function sum(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sum([2, 9, 8]));


enum gender {
    MALE,
    FEMALE,
}
let manar = {
    name: 'Manar',
    age: 25,
    gen: gender.FEMALE,
};


interface IShape {
    width: number,
    height: number,
    drow(): void;
}
class Shape implements IShape {
    constructor(public width: number, public height: number) {

    }
    drow(): void {
        console.log('Drawing a shape');
    }
}
let sh = new Shape(5, 6);
sh.drow();

class circle extends Shape {
    constructor(w, h) {
        super(w, h);
    }
    drow(): void {
        console.log('Drawing a circle');
    }
}
let c = new circle(5, 5);
c.drow();

/*        generics         */

let genericArray: Array<string> = ["lkj"];
//  generice function

let greating = <T>(name: T): T => {
    return name;

}

greating<string>('Manar');


/*        decorator         */
function first() {
    console.log("first(): factory evaluated");
    return function (target: any, propertyKey: string) {
      console.log("first(): called");
    };
  }
   
  function second() {
    console.log("second(): factory evaluated");
    return function (target: any, propertyKey: string) {
      console.log("second(): called");
    };
  }
   
  class ExampleClass {
    @first()
    @second()
    method() {}
  }


/*        task 2         */
class point2D {
    constructor(public x: number, public y: number) { }
    claclength() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}
/*        task 3         */

class point3D extends point2D {
    constructor(x: number, y: number, public z: number) {
        super(x, y);
    }
    claclength() {
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
    }
}

/*        task 4         */

interface IPerson<T, Y> {
    name: T,
    age: Y,
}
class Person<T, U> implements IPerson<T, U> {
    constructor(public name, public age) { }
}
let p = new Person<string, number>('John Doe', 30);
console.log(p);








