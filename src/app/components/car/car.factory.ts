import { Car_DI } from '../../models/car/car_di';
import { Engine } from '../../models/car/engine/engine';
import { Tires } from '../../models/car/tires/tires';

export class CarFactory {
    createCar() {
        let car = new Car_DI(this.createEngine(), this.createTires());
        car.description = 'Factory';
        return car;
    }

    createEngine() {
        return new Engine();
    }

    createTires() {
        return new Tires();
    }
}

