import { Component, OnInit } from '@angular/core';
import { studentRepo } from '../repository/StudentRepository';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getStudentForm(student: any) {
    // studentRepo.unshift() -> them dau
    studentRepo.push(student.value); // them cuoi
  }
}
