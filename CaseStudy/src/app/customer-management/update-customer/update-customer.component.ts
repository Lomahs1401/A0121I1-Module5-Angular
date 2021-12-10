import { TypeCustomer } from './../create-customer/create-customer.component';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CustomerService } from '../customer.service';


@Component({
  selector: 'app-update',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  updateCustomer: FormGroup;
  typeCustomers: TypeCustomer[];
  constructor(private formBuilder: FormBuilder, private router: Router, private customerService: CustomerService,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
      this.updateCustomer = this.formBuilder.group({
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
    this.customerService.getAllCustomerTypes().subscribe(data => {
      this.typeCustomers = data;
      this.customerService.getCustomerById(this.activatedRoute.snapshot.params['id']).subscribe(data => {
        console.log(data);
        this.updateCustomer.setValue(data);
      })
    })

  }

  onSubmit() {
    if (this.updateCustomer.valid) {
      this.customerService.updateCustomerById(this.updateCustomer.value, this.activatedRoute.snapshot.params['id']).subscribe(
        () => {
          this.router.navigateByUrl("/");
        }
      )
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
