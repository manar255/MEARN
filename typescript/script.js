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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
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
function first() {
    console.log("first(): factory evaluated");
    return function (target, propertyKey) {
        console.log("first(): called");
    };
}
function second() {
    console.log("second(): factory evaluated");
    return function (target, propertyKey) {
        console.log("second(): called");
    };
}
var ExampleClass = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _method_decorators;
    return _a = /** @class */ (function () {
            function ExampleClass() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            ExampleClass.prototype.method = function () { };
            return ExampleClass;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _method_decorators = [first(), second()];
            __esDecorate(_a, null, _method_decorators, { kind: "method", name: "method", static: false, private: false, access: { has: function (obj) { return "method" in obj; }, get: function (obj) { return obj.method; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
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
