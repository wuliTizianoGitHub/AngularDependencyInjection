import { Injectable } from '@angular/core';

import { Engine }  from './engine/engine' ;
import { Tires }  from './tires/tires' ;

@Injectable()
export class Car_DI{
    public description = 'DI';

    constructor(public engine:Engine,public tires:Tires){
        
    }

    drive() {
    return `${this.description} car with ` +
      `${this.engine.cylinders} cylinders and ${this.tires.make} tires.`;
  }
}