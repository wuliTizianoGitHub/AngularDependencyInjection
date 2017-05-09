import { Component } from "@angular/core";

import { Hero } from "../../models/hero/hero";
// import { heroServiceProvider } from '../../services/hero/hero.service.provider';
import { HeroService } from "../../services/hero/hero.service";

@Component({
    selector: "hero-list",
    // template: `<div *ngFor="let hero of heroes">
    //            {{hero.id}} - {{hero.name}}
    //           </div>`,
    template: `
  <div *ngFor="let hero of heroes">
    {{hero.id}} - {{hero.name}}
    ({{hero.isSecret ? 'secret' : 'public'}})
    </div>
   `,
  providers:[HeroService]
})

export class HeroListComponent {

    heroes: Hero[];
       
    constructor(heroService: HeroService) {
        this.heroes = heroService.getHeroes();
    }
}