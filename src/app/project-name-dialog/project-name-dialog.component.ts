import { Component, inject, OnInit } from '@angular/core';
import {  MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-project-name-dialog',
  templateUrl: './project-name-dialog.component.html',
  styleUrls: ['./project-name-dialog.component.css']
})
export class ProjectNameDialogComponent implements OnInit {
  public projectName:string ="";

  constructor(private matDialogRef:MatDialogRef<ProjectNameDialogComponent>) {
    
  }

  ngOnInit(): void {
    
  }
  ngOnDestroy(){
    this.matDialogRef.close(this.projectName);
  }
  OnOk(value:string){
    this.projectName=value;
    this.matDialogRef.close(this.projectName);
  }

}
