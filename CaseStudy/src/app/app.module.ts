import { CustomerRoutingModule } from './customer-management/customer-routing.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { ServiceManagementComponent } from './service-management/service-management.component';
import { ContractManagementComponent } from './contract-management/contract-management.component';
import { CreateCustomerComponent } from './customer-management/create-customer/create-customer.component';
import { ListCustomerComponent } from './customer-management/list-customer/list-customer.component';
import { UpdateCustomerComponent } from './customer-management/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './customer-management/delete-customer/delete-customer.component';
import { ViewCustomerComponent } from './customer-management/view-customer/view-customer.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateEmployeeComponent } from './employee-management/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './employee-management/update-employee/update-employee.component';
import { ListEmployeeComponent } from './employee-management/list-employee/list-employee.component';
import { DeleteEmployeeComponent } from './employee-management/delete-employee/delete-employee.component';
import { ViewEmployeeComponent } from './employee-management/view-employee/view-employee.component';
import { CreateServiceComponent } from './service-management/create-service/create-service.component';
import { UpdateServiceComponent } from './service-management/update-service/update-service.component';
import { DeleteServiceComponent } from './service-management/delete-service/delete-service.component';
import { ListServiceComponent } from './service-management/list-service/list-service.component';
import { ViewServiceComponent } from './service-management/view-service/view-service.component';
import { CreateContractComponent } from './contract-management/create-contract/create-contract.component';
import { UpdateContractComponent } from './contract-management/update-contract/update-contract.component';
import { DeleteContractComponent } from './contract-management/delete-contract/delete-contract.component';
import { ListContractComponent } from './contract-management/list-contract/list-contract.component';
import { ViewContractComponent } from './contract-management/view-contract/view-contract.component';
import { ContractDetailManagementComponent } from './contract-detail-management/contract-detail-management.component';
import { CreateContractDetailComponent } from './contract-detail-management/create-contract-detail/create-contract-detail.component';
import { UpdateContractDetailComponent } from './contract-detail-management/update-contract-detail/update-contract-detail.component';
import { DeleteContractDetailComponent } from './contract-detail-management/delete-contract-detail/delete-contract-detail.component';
import { ListContractDetailComponent } from './contract-detail-management/list-contract-detail/list-contract-detail.component';
import { ViewContractDetailComponent } from './contract-detail-management/view-contract-detail/view-contract-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerManagementComponent,
    EmployeeManagementComponent,
    ServiceManagementComponent,
    ContractManagementComponent,
    CreateCustomerComponent,
    ListCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    ViewCustomerComponent,
    HeaderComponent,
    FooterComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    ListEmployeeComponent,
    DeleteEmployeeComponent,
    ViewEmployeeComponent,
    CreateServiceComponent,
    UpdateServiceComponent,
    DeleteServiceComponent,
    ListServiceComponent,
    ViewServiceComponent,
    CreateContractComponent,
    UpdateContractComponent,
    DeleteContractComponent,
    ListContractComponent,
    ViewContractComponent,
    ContractDetailManagementComponent,
    CreateContractDetailComponent,
    UpdateContractDetailComponent,
    DeleteContractDetailComponent,
    ListContractDetailComponent,
    ViewContractDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomerRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
