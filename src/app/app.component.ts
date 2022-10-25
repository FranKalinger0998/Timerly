import { Component, ViewChild } from '@angular/core';
import {Tablemodel} from "./models/tableModel";
import {MatDialog} from '@angular/material/dialog';
import { ProjectNameDialogComponent } from './project-name-dialog/project-name-dialog.component';
import { tableModelService } from "./Services/tableModelService";
import { TableDataSource } from './table/table-datasource';
import { DataService } from "./Services/DataService";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Timerly';
  list: Tablemodel[]=[];
  current={} as Tablemodel;
  toggleStartButton:boolean=true;
  toggleStopButton:boolean=false;
  
  constructor(private matDialog:MatDialog,private tableModelSer:tableModelService,private Data:DataService){

  }
  ngOnInIt(){
    this.Data.currentData.subscribe(data=>this.list=data)
    
    this.tableModelSer.getModel().subscribe(data=>{this.list=data;});
    this.Data.changeData(this.list);
    //this.list=[]//Populate the List here from API
  }
  startTimer(){
    this.Data.changeData(this.list);
    this.current.startTime = new Date();
    this.current.ProjectName="...";
    
    this.list.unshift(this.current);
    
    this.toggleStartButton=false;
    this.toggleStopButton=true;
  }
  stopTimer(){
    var later= new Date();
    this.current.duration=new Date(Math.abs(later.getTime() - this.current.startTime.getTime()))
    
    let dialogref=this.matDialog.open(ProjectNameDialogComponent);
    dialogref.afterClosed().subscribe(result=>{this.current.ProjectName=result});
    
    this.list[0]=this.current;

    //add t

    
    this.toggleStartButton=true;
    this.toggleStopButton=false;
  }
  




  







}

























