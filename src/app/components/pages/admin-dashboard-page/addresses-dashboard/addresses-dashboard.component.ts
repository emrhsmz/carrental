import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/models/address';
import { AddressDetail } from 'src/app/models/address-detail';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-addresses-dashboard',
  templateUrl: './addresses-dashboard.component.html',
  styleUrls: ['./addresses-dashboard.component.css']
})
export class AddressesDashboardComponent implements OnInit {

  title= "Müşteri Adres";
  addresses: Address[] = [];
  customerAddresses: Address[] = [];
  addressDetails: AddressDetail[] = [];
  dataLoaded = false;

  constructor(
    private addressService:AddressService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getAddressIdFromParam();
    //this.getAll();
    this.getAdressDetail();
  }

  getAddressIdFromParam() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.getByAddressById(params.id);
      }
    });
  }

  getByAddressById(id: number) {
    this.addressService.getAddressCustomerById(id).subscribe((response) => {
      this.customerAddresses = response.data;
    });
  }

  getAll(){
    this.addressService.getAll().subscribe((response) => {
      this.addresses = response.data;
      this.dataLoaded = true;
    })
  }

  getAdressDetail(){
    this.addressService.getAddressDetails().subscribe((response) => {
      this.addressDetails = response.data;
    });
  }
}
