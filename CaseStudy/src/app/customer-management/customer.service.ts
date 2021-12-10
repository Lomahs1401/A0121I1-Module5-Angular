import { TypeCustomer } from './create-customer/create-customer.component';
import { ICustomer } from './../models/customer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  listCustomers: ICustomer[] = [];
  readonly URL_CUSTOMER = "http://localhost:3000/listCustomers";
  readonly URL_CUSTOMER_TYPES = "http://localhost:3000/customerTypes";
  index: number;

  constructor(private httpClient: HttpClient) { }

  getAllCustomers(): Observable<ICustomer[]> {
    return this.httpClient.get<ICustomer[]>(this.URL_CUSTOMER);
  }

  getAllCustomerTypes(): Observable<TypeCustomer[]> {
    return this.httpClient.get<TypeCustomer[]>(this.URL_CUSTOMER_TYPES);
  }

  addCustomer(customer: ICustomer): Observable<ICustomer> {
    return this.httpClient.post<ICustomer>(this.URL_CUSTOMER, customer);
  }

  getCustomerById(id: string): Observable<ICustomer> {
    return this.httpClient.get<ICustomer>(this.URL_CUSTOMER + '/' + id);
  }

  updateCustomerById(id: string, customer: ICustomer) {
    return this.httpClient.put(this.URL_CUSTOMER + '/' + id, customer)
  }

  deleteCustomerById(id: string) {
    return this.httpClient.delete(this.URL_CUSTOMER + '/' + id);
  }
}
