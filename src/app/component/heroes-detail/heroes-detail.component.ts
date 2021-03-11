import { StudentService } from './../../student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {
  public heroes = [];
  constructor(private _studentService: StudentService) { }

  ngOnInit(): void {
    this.heroes = this._studentService.getHeroes()
  }

}
