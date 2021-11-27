import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  // countryList = [
  //   {id: 1, name: 'Viet Nam'},
  //   {id: 2, name: 'USA'},
  //   {id: 3, name: 'Japan'},
  // ]

  countryList = [
    'Viet Nam',
    'USA',
    'Japan'
  ]

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      country: ['', [Validators.required]],
      age: [0, [Validators.required]],
      gender: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern("^\+84\d{9,10}$")]],
    })
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  get email() {
    return this.registerForm.get('email');
  }
}
