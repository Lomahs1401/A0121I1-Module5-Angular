import { CustomerService } from './../customer.service';
import { ICustomer } from './../../models/customer';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  customer: ICustomer;

  constructor(private dialogRef: MatDialogRef<DeleteCustomerComponent>,
    private customerService: CustomerService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.customer = this.data;
  }

  onDelete() {
    this.customerService.deleteCustomerById(this.customer.id).subscribe()
  }

}
