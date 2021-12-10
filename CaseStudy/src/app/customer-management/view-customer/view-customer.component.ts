import { ICustomer } from './../../models/customer';
import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  listCustomers: ICustomer[] = [];
  customerView: ICustomer
  id: string;

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      console.log(this.id);
      this.id = paramMap.get('id');
      // this.customerView = this.customerService.getCustomerById(this.id).subscribe(
      //   data => this.customerView = data
      // )
    })
  }

}
