import { Injectable } from '@angular/core';
import { Student } from '../model/Student';
import { studentRepo } from '../repository/StudentRepository';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = studentRepo;
  student: Student;

  constructor() { }

  getAllStudents() {
    return this.students;
  }

  addStudent(student: Student) {
    this.students.push(student);
  }

  getById(id: number) {
    for (let student of this.students){
      if(student.id === id) {
        return this.student.id;
      }
    }
  }
}
