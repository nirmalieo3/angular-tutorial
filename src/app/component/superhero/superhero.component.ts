import { HeroTable } from './../../module/hero';
import { HeroService } from './../../hero.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-superhero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.css']
})
export class SuperheroComponent implements OnInit {

  ELEMENT_DATA: HeroTable[] = []
  displayedColumns: string[] = ['superhero', 'publisher', 'actor', 'cameout', 'characters', 'images'];
  dataSource = new MatTableDataSource<HeroTable>(this.ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
  
  constructor( private dataService:HeroService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataService.getProducts().subscribe((products)=>{
      this.dataSource.data = products;
    })
 }

}
