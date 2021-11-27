import { Student } from './../model/Student';
import { Component, OnInit } from '@angular/core';
import { studentRepo } from '../repository/StudentRepository';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students = studentRepo;
  student: any;
  id: number;

  constructor() { }

  ngOnInit(): void {
  }

  getStudentById(studentId: string): Student {
    this.id = Number(studentId);
    this.student = this.students.find(element => element.id == this.id);
    return this.student;
  }

  deleteStudentById(studentId: string) {
    this.id = Number(studentId);
    this.students.splice(this.id - 1, 1);
  }
}
