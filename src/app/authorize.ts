import {Injectable} from '@angular/core';

@Injectable()
export class Authorize {
    isAuthorized: boolean;
    constructor(){
      
    }
    setIsAuthorized(isAuthorized : boolean){
       this.isAuthorized =  isAuthorized;
    }
    getIsAuthorized() {
        return this.isAuthorized;
    }
}