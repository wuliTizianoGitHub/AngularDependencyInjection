import { Component, Injector, OnInit } from '@angular/core';

import { Car_DI } from './models/car/car_di';
import { Engine } from './models/car/engine/engine';
import { Tires } from './models/car/tires/tires';
import { Hero } from './models/hero/hero';
import { HeroService } from './services/hero/hero.service';
import { heroServiceProvider } from './services/hero/hero.service.provider';
import { Logger } from './services/logger.service';


@Component({
    selector: 'my-injectors',
    template: `
  <h2>Other Injections</h2>
  <div id="car">{{car.drive()}}</div>
  <div id="hero">{{hero.name}}</div>
  <div id="rodent">{{rodent}}</div>
  `,
    providers: [Car_DI, Engine, Tires, heroServiceProvider, Logger]
})

export class InjectorComponent implements OnInit {
    car_di: Car_DI;
    heroService: HeroService;
    hero: Hero;

    constructor(private injector: Injector) { }

    ngOnInit() {
        this.car_di = this.injector.get(Car_DI);
        this.heroService = this.injector.get(HeroService);
        this.hero = this.heroService.getHeroes()[0];
    }

    get rodent() {
        let rousDontExsit = `R.O.U.S.'s? I don't think they exist!`;
        return this.injector.get(ROUS, rousDontExsit);
    }

}
class ROUS { }
