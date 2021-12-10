import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list-customer'},
  {path: 'list-customer', component: ListCustomerComponent},
  {path: 'create-customer', component: CreateCustomerComponent},
  {path: 'view-customer/:id', component: ViewCustomerComponent},
  {path: 'update-customer/:id', component: UpdateCustomerComponent},
  {path: 'delete-customer/:id', component: DeleteCustomerComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
