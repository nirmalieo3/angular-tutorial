import { Component, OnInit, Input, ViewChild, DoCheck} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit, DoCheck {
 
  @Input() data: any;
  
  displayedColumns: string[] = ['name', 'surname', 'email', 'password', 'city', 'address', 'phoneNumber', 'proficiency'];
  public dataSource: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
 
  constructor() {
    this.dataSource = new MatTableDataSource(this.data);
   }
  
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    console.log('child data', this.data)
    
  }

  /*ngOnChanges(change: SimpleChanges) {
    if(change.data){
      console.log('changes', change.data);
      this.data = change.data.currentValue;
      this.dataSource = new MatTableDataSource(this.data);
    }
    
  }*/

  ngDoCheck(){
    this.dataSource = new MatTableDataSource(this.data);
  }

}
