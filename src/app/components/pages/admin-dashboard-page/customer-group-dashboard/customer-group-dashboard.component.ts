import { Component, OnInit } from '@angular/core';
import { CustomerGroup } from 'src/app/models/customer-group';
import { CustomerGroupService } from 'src/app/services/customer-group.service';

@Component({
  selector: 'app-customer-group-dashboard',
  templateUrl: './customer-group-dashboard.component.html',
  styleUrls: ['./customer-group-dashboard.component.css']
})
export class CustomerGroupDashboardComponent implements OnInit {

  title= "Müşteri Grubu";
  customerGroups: CustomerGroup[] = [];
  dataLoaded: boolean = false;

  constructor(private customerGroupService: CustomerGroupService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.customerGroupService.getAll().subscribe((response) => {
      this.customerGroups = response.data;
      this.dataLoaded = true;
    })
  }

}
