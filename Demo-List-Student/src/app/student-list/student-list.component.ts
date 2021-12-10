import { StudentService } from './../service/student.service';
import { Student } from './../model/Student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[];
  student: any;
  id: number;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(
      (data) => this.students = data,
      (error => console.log("Ket noi loi")),
      (() => console.log("Hoan thanh ket noi den backend"))
    );
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
