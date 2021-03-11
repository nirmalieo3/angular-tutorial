import { HeroesDetailComponent } from './../heroes-detail/heroes-detail.component';
import { StudentService } from './../../student.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
   public heroes = [];
  constructor(private _studentService: StudentService) { }

  ngOnInit(): void {
    this.heroes = this._studentService.getHeroes();
  }

}
