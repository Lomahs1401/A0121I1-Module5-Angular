import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/Student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[];
  readonly API_URL = "http://localhost:3000/students";
  student: Student;

  constructor(private httpClient: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.API_URL);
  }

  addStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.API_URL, student);
  }

  getById(id: number) {
    for (let student of this.students){
      if(student.id === id) {
        return this.student.id;
      }
    }
  }
}
