
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import {Tablemodel} from "../models/tableModel";

@Injectable()
export class DataService{
    private dataSource=new BehaviorSubject<Tablemodel[]>([]);
    currentData=this.dataSource.asObservable();
    constructor(){}
    changeData(data:Tablemodel[]){
        this.dataSource.next(data);
    }
}