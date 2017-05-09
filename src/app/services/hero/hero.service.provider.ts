import { Logger } from "../logger.service";

import { UserService } from "../user.service";

import { HeroService } from "./hero.service";


let heroServiceFactory = (logger: Logger, userService: UserService) => {
    return new HeroService(logger, userService);
}

export let heroServiceProvider =[{ provide: HeroService, userFactory: heroServiceFactory, deps: [Logger, UserService] }];