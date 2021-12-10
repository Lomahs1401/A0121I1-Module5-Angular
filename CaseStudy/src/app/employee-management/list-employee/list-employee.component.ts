import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IEmployee } from 'src/app/models/employee';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})

export class ListEmployeeComponent implements OnInit {

  listEmployees: IEmployee[];
  constructor(private employeeService: EmployeeService, private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe(
      data => this.listEmployees = data,
    )
  };

  p: number = 1;

  openDialog(id: string) {
    this.employeeService.getById(id).subscribe(data => {
      const dialogRef = this.dialog.open(DeleteEmployeeComponent, {
        width: '500px',
        height: '500px',
        data: data
      })
      dialogRef.afterClosed().subscribe(() => {
        this.snackBar.open("Delete employee successfully", 'OK');
        this.ngOnInit();
      })
    })

  }

  searchEmployee(value: string) {
    this.employeeService.searchEmployee(value).subscribe(
      data => this.listEmployees = data,
    )
  }
}
