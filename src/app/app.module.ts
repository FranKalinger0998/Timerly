import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from "@angular/material/dialog";
import { ProjectNameDialogComponent } from './project-name-dialog/project-name-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { tableModelService } from "./Services/tableModelService";
import { HttpClientModule } from '@angular/common/http';
import { DataService } from "./Services/DataService";

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ProjectNameDialogComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
  ],
  providers: [tableModelService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
