import { Injectable } from "@angular/core";
import { HttpclientModuleComponent } from "../httpclient-module/httpclient-module.component";




@Injectable({
    providedIn:'root'
})


export class HttpService{

    constructor(private http:HttpclientModuleComponent){

    }


}