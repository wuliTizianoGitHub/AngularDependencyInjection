import { Injectable } from '@angular/core';

//日志服务
@Injectable()
export class Logger{
    private logs : string []  = [];

    log(message:string){
        this.logs.push(message);
        console.log(message);
    }
}