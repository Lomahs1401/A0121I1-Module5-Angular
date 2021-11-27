import { studentRepo } from './../repository/StudentRepository';
import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../model/Student';

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css']
})


export class StudentInformationComponent implements OnInit {

  @Input('studentInfo')
  student: any='';

  constructor() { }

  ngOnInit(): void {
    console.log(this.student);
  }

  // setMark(event : Event) {
  //   this.student1.mark = event.target.value;
  // }

}
