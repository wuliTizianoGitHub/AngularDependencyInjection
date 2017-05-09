import { ReflectiveInjector } from '@angular/core';

import { Car_DI } from '../../models/car/car_di';
import { Engine } from '../../models/car/engine/engine';
import { Tires } from '../../models/car/tires/tires';

import { Logger } from '../../services/logger.service';

export function useInjector(){
    let injector : ReflectiveInjector;

    injector = ReflectiveInjector.resolveAndCreate([Car_DI,Engine,Tires]);

    let car  = injector.get(Car_DI);

    car.description = 'Injector';

    injector = ReflectiveInjector.resolveAndCreate([Logger]);
    let logger  = injector.get(Logger);
    logger.log('Injector car.drive() said:'+car.drive());
    return car;
}