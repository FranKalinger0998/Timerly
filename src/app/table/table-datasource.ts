import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { } from '../app.component';

import { importProvidersFrom } from '@angular/core';

import { AppComponent } from "../app.component";
import { DataService } from "../Services/DataService";
import { Tablemodel } from "../models/tableModel";





export class TableDataSource extends DataSource<Tablemodel> {
  data: Tablemodel[]=[];
  paginator: MatPaginator | undefined;
  Datax:DataService
  
  

  constructor(Datax:DataService) {
    
    super();
    this.Datax=Datax;
    
    
  }
  ngOnInIt(){
    this.Datax.currentData.subscribe(data=>this.data=data);
    
    
    
  }
  

  
  connect(): Observable<Tablemodel[]> {
    if (this.paginator ) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page)
        .pipe(map(() => {
          return this.getPagedData([...this.data ]);
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }


  disconnect(): void {}

 
  private getPagedData(data: Tablemodel[]): Tablemodel[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

 
  
}


