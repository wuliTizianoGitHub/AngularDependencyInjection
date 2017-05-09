import { Component } from '@angular/core';

import { Car_No_DI } from '../../models/car/car_no_di';
import { Car_DI } from '../../models/car/car_di';
import { Engine } from '../../models/car/engine/engine';
import { Tires } from '../../models/car/tires/tires';
import { simpleCar, superCar } from './car.creation';
import { CarFactory } from './car.factory';
import { useInjector } from './car.injector';

@Component({
    selector: 'my-car',
    template: `
    <h2>Cars</h2>
    <div id='car_no_di'>{{noDiCar.drive()}}</div>
    <div id='car_di'>{{car_di.drive()}}</div>
    <div id='simpleCar'>{{simpleCar.drive()}}</div>
    <div id='superCar'>{{superCar.drive()}}</div>
    <div id='factoryCar'>{{factoryCar.drive()}}</div>
    <div id='injectorCar'>{{injectorCar.drive()}}</div>
    `,
    providers: [Car_No_DI, Car_DI, Engine, Tires]
})

export class CarComponent {
    noDiCar = new Car_No_DI();
    simpleCar = simpleCar();
    superCar = superCar();

    factoryCar = (new CarFactory).createCar();

    injectorCar = useInjector();

    constructor(public car_di: Car_DI) { }
}