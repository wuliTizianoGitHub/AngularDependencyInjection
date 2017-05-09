import { Injectable } from "@angular/core";

import { HEROES } from "../../models/hero/mock-heroes";

import { Logger } from "../logger.service";

import { UserService } from "../user.service";

// @Injectable()
// export class HeroService {
//     getHeroes() { return HEROES; }
// }

@Injectable()
export class HeroService {
    constructor(private logger : Logger , private userservice : UserService) { }

    getHeroes(){
        let auth = this.userservice.user.isAuthorized?'authorized' : 'unauthorized';
        this.logger.log(`Getting heroes for ${auth} user.         ${this.userservice.user.isAuthorized.isAuthorized}`);
        return HEROES.filter(hero=>this.userservice.user.isAuthorized.isAuthorized||!hero.isSecret);
    }
}