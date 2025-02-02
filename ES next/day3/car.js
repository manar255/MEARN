import v from './vehicle.js'

export default class Car extends v {
    constructor(m,w,h,c) {
        super(m,w,h);
        this.fuelCapacity = c;
    }
    display(){
        console.log("Car");
    }
}