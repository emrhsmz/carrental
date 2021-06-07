import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerDetail } from 'src/app/models/customer-detail';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers-dashboard',
  templateUrl: './customers-dashboard.component.html',
  styleUrls: ['./customers-dashboard.component.css']
})
export class CustomersDashboardComponent implements OnInit {

  title= "Müşteri";
  customer: Customer[] = [];
  customerDetails: CustomerDetail[] = [];
  dataLoaded: boolean = false;

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getCustomerDetail();
  }

  getAll(){
    this.customerService.getAll().subscribe((response) => {
      this.customer = response.data;
      this.dataLoaded = true;
    })
  }

  getCustomerDetail(){
    this.customerService.getCustomerDetails().subscribe((response) => {
      this.customerDetails = response.data;
    });
  }
  

}
