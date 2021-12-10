import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  updateEmployee: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService,
    private snackBar: MatSnackBar, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.updateEmployee = this.fb.group({
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
    });
    this.employeeService.getById(this.activatedRoute.snapshot.params['id']).subscribe(data=>{
      console.log(data);
      this.updateEmployee.setValue(data);
    })
  }

  onSubmit() {
    if (this.updateEmployee.valid) {
      this.employeeService.createEmployee(this.updateEmployee.value).subscribe(() => {
        this.snackBar.open("Update employee successfully", 'OK', { duration: 3000 })
        this.router.navigateByUrl("/list-employee");
      })
    }
  }
}
