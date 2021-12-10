import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  createEmployee: FormGroup;

  constructor(private fb: FormBuilder, private serviceService: EmployeeService,
    private snackBar: MatSnackBar, private route: Router) { }

  ngOnInit(): void {
    this.createEmployee = this.fb.group({
      employeeId: ['', [Validators.required, Validators.pattern(/NV-\d{4}$/)]],
      employeeName: ['', Validators.required],
      employeeBirthday: ['', Validators.required],
      employeeIdCard: ['', Validators.required],
      employeeSalary: ['', Validators.required],
      employeePhoneNumber: ['', Validators.required],
      employeeEmail: ['', Validators.required],
      employeeAddress: ['', Validators.required],
      positionId: ['', Validators.required],
      eductionId: ['', Validators.required],
      divisionId: ['', Validators.required],
      username: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.createEmployee.invalid) {
      this.serviceService.createEmployee(this.createEmployee.value).subscribe(() => {
        this.snackBar.open("Add employee successfully", 'OK', { duration: 3000 })
        this.route.navigateByUrl("/list-employee");
      })
    }
  }
}
