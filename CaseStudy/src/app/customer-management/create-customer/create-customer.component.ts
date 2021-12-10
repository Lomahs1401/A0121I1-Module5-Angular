import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CustomerService } from '../customer.service';

export interface TypeCustomer {
  value: string;
  name: string;
}

@Component({
  selector: 'app-creat-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  createCustomer: FormGroup;

  typeCustomers: TypeCustomer[] = [
    { value: 'Diamond', name: 'Diamond' },
    { value: 'Platinum', name: 'Platinum' },
    { value: 'Gold', name: 'Gold' },
    { value: 'Silver', name: 'Silver' },
    { value: 'Member', name: 'Member' },
  ];

  constructor(private fb: FormBuilder, private router: Router, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.createCustomer = this.fb.group({
      id: ['', [Validators.required, Validators.pattern(/KH-\d{4}$/)]],
      customerType: ['', Validators.required],
      customerName: ['', Validators.required],
      customerBirthday: ['', Validators.required, this.check18],
      customerGender: ['', Validators.required],
      customerIdCard: ['', [Validators.required, Validators.pattern(/^\d{9}?$|^\d{12}$/)]],
      customerPhone: ['', [Validators.required, Validators.pattern(/^(091\d{7})?$|^(090\d{7})$/)]],
      customerEmail: ['', Validators.required],
      customerAddress: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log(this.createCustomer.value);
    if (this.createCustomer.valid) {
      this.customerService.addCustomer(this.createCustomer.value).subscribe();
      this.router.navigateByUrl("/");
    }
  }

  check18(check: AbstractControl) {
    let birthday = new Date(check.value);
    let age = Date.now() - birthday.getTime();
    let ageYear = new Date(age);
    age = ageYear.getUTCFullYear() - 1970;
    if (age < 18) {
      return {'invalidAge' : true}
    }
    return null;
  }
}
