var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var n = "Manar";
var age = 25;
var isMarried = true;
var x = 5;
x = '4';
function sum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sum([2, 9, 8]));
var gender;
(function (gender) {
    gender[gender["MALE"] = 0] = "MALE";
    gender[gender["FEMALE"] = 1] = "FEMALE";
})(gender || (gender = {}));
var manar = {
    name: 'Manar',
    age: 25,
    gen: gender.FEMALE,
};
var Shape = /** @class */ (function () {
    function Shape(width, height) {
        this.width = width;
        this.height = height;
    }
    Shape.prototype.drow = function () {
        console.log('Drawing a shape');
    };
    return Shape;
}());
var sh = new Shape(5, 6);
sh.drow();
var circle = /** @class */ (function (_super) {
    __extends(circle, _super);
    function circle(w, h) {
        return _super.call(this, w, h) || this;
    }
    circle.prototype.drow = function () {
        console.log('Drawing a circle');
    };
    return circle;
}(Shape));
var c = new circle(5, 5);
c.drow();
/*        generics         */
var genericArray = ["lkj"];
//  generice function
var greating = function (name) {
    return name;
};
greating('Manar');
/*        decorator         */
// function first() {
//     console.log("first(): factory evaluated");
//     return function (target: any, propertyKey: string) {
//       console.log("first(): called");
//     };
//   }
//   function second() {
//     console.log("second(): factory evaluated");
//     return function (target: any, propertyKey: string) {
//       console.log("second(): called");
//     };
//   }
//   class ExampleClass {
//     @first()
//     @second()
//     method() {}
//   }
/*        task 2         */
var point2D = /** @class */ (function () {
    function point2D(x, y) {
        this.x = x;
        this.y = y;
    }
    point2D.prototype.claclength = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
    return point2D;
}());
/*        task 3         */
var point3D = /** @class */ (function (_super) {
    __extends(point3D, _super);
    function point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    point3D.prototype.claclength = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    };
    return point3D;
}(point2D));
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var p = new Person('John Doe', 30);
console.log(p);
