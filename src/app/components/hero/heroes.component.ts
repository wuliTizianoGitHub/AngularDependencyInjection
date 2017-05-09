import { Component } from "@angular/core";
import { heroServiceProvider } from '../../services/hero/hero.service.provider';
import { Logger } from '../../services/logger.service';
import { Authorize } from '../../authorize';


@Component({
  selector: 'my-heroes',
  template:
  `<h2>Heroes</h2>
   <hero-list></hero-list>
  `,
   providers: [Logger,Authorize,heroServiceProvider]
})

export class HeroesComponent { }    