import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddAdminComponent,
    CustomerComponent,
    AdminDetailsComponent,
    UpdateAdminComponent,
    HomeLoginComponent,
    AddCustomerComponent,
    CustomerDetailsComponent,
    UpdateCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
