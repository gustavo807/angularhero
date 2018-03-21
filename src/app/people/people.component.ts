import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [
    PeopleService
  ]
})
export class PeopleComponent implements OnInit {
  people$;
  constructor(
    private peopleService : PeopleService
  ) { }

  ngOnInit() {
  }

  fetchPeople(){
    this.people$ = this.peopleService.fetchPeople();
  }

}
