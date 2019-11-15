import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  teamArray: Array<any> = [];
  constructor() { }

  ngOnInit() {
    this.teamArray = [{
      Team1: "Team Name",
      edit: false
    },
    {
      Team2: "Team Name",
      edit: false
    }]
  }

  removeTeam(index: number) {
    this.teamArray.splice(index, 1);
  }

  addTeam() {
    this.teamArray.unshift({
      Team: null,
      edit: true
    });
  }
}










