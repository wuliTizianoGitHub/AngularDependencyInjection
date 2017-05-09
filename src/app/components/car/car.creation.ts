import { Car_DI } from '../../models/car/car_di';
import { Engine } from '../../models/car/engine/engine';
import { Tires } from '../../models/car/tires/tires';

export function simpleCar() {
    let car = new Car_DI(new Engine(), new Tires());
    car.description = 'Simple';
    return car;
}


class Engine2 {
    constructor(public cylinders: number) { }
}

export function superCar() {
    let bigcylinders = 12;
    let car = new Car_DI(new Engine2(bigcylinders), new Tires());
    car.description = 'Super';
    return car;
}

