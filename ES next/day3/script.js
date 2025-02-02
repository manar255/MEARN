let p = new Proxy({}, {
    set: (t, p, v) => {

        if (p == 'name' && v.length > 10) {
            throw 'name must be less than 10'
        }
        if (p === 'phone' && !/^01[0-2,5]\d{8}$/.test(v)) {
            throw 'phone must be 11 digits and start with 01'
        }
        if (p === 'age' && typeof value !== 'number' && (v < 18 || v > 50)) {
            throw 'age must be a number between 18 and 50'
        }
        t[p] = v;
    }

})
// p.name='llllllllllllllllllllllllll1111111111111111111111111'
// console.log(p.name);

/*=================== task 2 ================*/



let NID = new Set();
NID.add('1')
NID.add('2')
NID.add('1')

console.log(...NID);

for (let id of NID) {
    console.log(id);
}

import v from './vehicle.js'
import car from './car.js'
import bike from './bicycle.js'

new v('test', 5, 5).display();
new car('test', 5, 5, 9).display();
new bike('test', 5, 5).display();

let obj = {
    name: 'test',
    age: 20, 
    gender: 'male',
    [Symbol.iterator]: function() {
        var entries = Object.entries(this);
        let index = 0;
        return {
            next: function () {
                
                return index < entries.length
                    ? {
                        value: entries[index++],
                        done: false,
                    }
                    : { value: undefined, done: true };
            },
        };
    },
}

for (let [k,v] of obj) {
    console.log(k,v);
}
