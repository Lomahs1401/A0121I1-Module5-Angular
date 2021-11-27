import { studentRepo } from './../repository/StudentRepository';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  studentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.min(0)]],
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      mark: ['', [Validators.required]],
      avatar: ['Chua co link', Validators.required]
    });
  }

  getStudentForm() {
    studentRepo.push(this.studentForm.value);
  }
}
