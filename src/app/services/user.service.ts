import { Injectable } from '@angular/core';
import { Authorize } from '../authorize';

export class User {
    constructor(public name: string, public isAuthorized: Authorize) { }
}


var a = new Authorize();
a.setIsAuthorized(false);
let alice = new User('Alice', a);
let bob = new User('Bob', a);

@Injectable()
export class UserService {
    user = bob;

    getNewUser() {
        if (this.user.isAuthorized.isAuthorized == false) {
            this.user = bob;
        } else {
            this.user = alice;
        }

    }
}