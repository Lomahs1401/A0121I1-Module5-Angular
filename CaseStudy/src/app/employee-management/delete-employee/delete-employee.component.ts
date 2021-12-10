import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IEmployee } from 'src/app/models/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})

export class DeleteEmployeeComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeService: EmployeeService) { }
  employee: IEmployee;
  ngOnInit(): void {
    this.employee = this.data;
  }

  onDelete(id: string) {
    this.employeeService.deleteById(id).subscribe(() => {
      this.dialogRef.close();
    })
  }
}
