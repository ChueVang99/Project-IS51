import { Component, OnInit } from '@angular/core';

interface IStudent {
  Team1 : string;
  Team2: string;
  Team3: string;
  Team4: string;
  editMode: boolean;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  studentArray: Array<IStudent> = [];
  disableAddButton = false;

  constructor() { }

   ngOnInit() {
    this.studentArray = [
      {
        Team1: "chue",
        Team2: 'Tom',
        Team3: 'Brady',
        Team4: 'Swimming',
        editMode: false
      },
      {
        Team1: "chue",
        Team2: 'Tom',
        Team3: 'Brady',
        Team4: 'Swimming',
        editMode: false
      },
      {
        Team1: "chue",
        Team2: 'Tom',
        Team3: 'Brady',
        Team4: 'Swimming',
        editMode: false
      },
      {
        Team1: "chue",
        Team2: 'Tom',
        Team3: 'Brady',
        Team4: 'Swimming',
        editMode: false
      }
    ];
  }
  addStudent() {
    this.studentArray.unshift({
      Team1: null,
      Team2: null,
      Team3: null,
      Team4: null,
      editMode: true
    });
    this.disableAddButton = true;
  }
  removeStudent(index: number) {
    this.studentArray.splice(index, 1);
  }
  saveStudent() {
    this.studentArray[0].editMode = false;
    this.disableAddButton = false;
    this.sort('asc');
  }

  sort(direction: string) {

    this.studentArray.sort((a: IStudent, b: IStudent) => {
      if (a.Team1 < b.Team2) {
        if (direction === 'asc') {
          return -1;
        } else {
          return 1;
        }
      } else {
        if (direction === 'asc') {
          return 1;
        } else {
          return -1;
        }
      }
      // return a.id > b.id ? -1 : 1;
    });
  }
}



