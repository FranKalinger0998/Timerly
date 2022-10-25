import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class tableModelService{
    constructor(private httpClient:HttpClient){

    }

    
    getModel():Observable<any>{
        return this.httpClient.get("");
    }


}