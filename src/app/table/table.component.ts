import { AfterViewInit, Component, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableDataSource  } from './table-datasource';
import { Tablemodel } from "../models/tableModel";
import { DataService } from "../Services/DataService";
import { Data } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //@ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Tablemodel>;
  dataSource: TableDataSource;
  

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [ 'project','start','end','duration'];

  
  
  constructor(data:DataService) {

    this.dataSource = new TableDataSource(data);
  }

  ngAfterViewInit(): void {
    
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
