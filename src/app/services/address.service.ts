import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../models/address';
import { AddressDetail } from '../models/address-detail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  apiControllerUrl = `${environment.apiUrl}/addresses`;

  constructor(private  httpClient: HttpClient) { }

  add(customer: Address): Observable<ResponseModel>{
    return  this.httpClient.post<ResponseModel>
    (
  `${this.apiControllerUrl}/add`,
  customer
    );
  }

  update(customer: Address): Observable<ResponseModel>
  {
    return  this.httpClient.post<ResponseModel>
    (
      `${this.apiControllerUrl}/update`,
      customer
    );
  }

  delete(customer: Address): Observable<ResponseModel>
  {
    return  this.httpClient.post<ResponseModel>
    (
      `${this.apiControllerUrl}/delete`,
      customer
    );
  }

  getAll(): Observable<ListResponseModel<Address>>{
    return  this.httpClient.get<ListResponseModel<Address>>
    (
      `${this.apiControllerUrl}/getall`
    );
  }

  getCustomerById(id: number): Observable<SingleResponseModel<Address>>{
    return this.httpClient.get<SingleResponseModel<Address>>
    (
      `${this.apiControllerUrl}/getbyid?id=${id}`
    );
  }
  
  getAddressCustomerById(id: number): Observable<ListResponseModel<Address>>{
    return this.httpClient.get<ListResponseModel<Address>>
    (
      `${this.apiControllerUrl}/getcustomerbyid?customerId=${id}`
    );
  }

  getAddressDetails(): Observable<ListResponseModel<AddressDetail>> {
    return this.httpClient.get<ListResponseModel<AddressDetail>>(
      `${this.apiControllerUrl}/getaddressdetails`
    );
  }
}
