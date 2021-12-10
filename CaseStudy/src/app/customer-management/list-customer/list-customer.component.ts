import { ICustomer } from './../../models/customer';
import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  listCustomers: ICustomer[] = [];
  customer = {};
  id: string;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(
      data => this.listCustomers = data,
      error => this.listCustomers = [],
      () => console.log("Successfully connect to Backend")
    );
  }
}
