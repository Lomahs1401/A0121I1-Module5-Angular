import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  countryList = [
    { id: 1, name: 'Viet Nam' },
    { id: 2, name: 'USA' },
    { id: 3, name: 'Japan' },
  ]

  // countryList = [
  //   'Viet Nam',
  //   'USA',
  //   'Japan'
  // ]

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      passwordGroup: this.formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      }),
      country: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]]
    });

    this.registerForm.patchValue(
      {email: 'info@example.com'}
    );
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }
}
