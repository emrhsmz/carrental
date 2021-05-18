import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';
import { CustomerDetail } from '../models/customer-detail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiControllerUrl = `${environment.apiUrl}/customers`;

  constructor(private  httpClient: HttpClient) { }

  add(customer: Customer): Observable<ResponseModel>{
    return  this.httpClient.post<ResponseModel>
    (
  `${this.apiControllerUrl}/add`,
  customer
    );
  }

  update(customer: Customer): Observable<ResponseModel>
  {
    return  this.httpClient.post<ResponseModel>
    (
      `${this.apiControllerUrl}/update`,
      customer
    );
  }

  delete(customer: Customer): Observable<ResponseModel>
  {
    return  this.httpClient.post<ResponseModel>
    (
      `${this.apiControllerUrl}/delete`,
      customer
    );
  }

  getAll(): Observable<ListResponseModel<Customer>>{
    return  this.httpClient.get<ListResponseModel<Customer>>
    (
      `${this.apiControllerUrl}/getall`
    );
  }

  getCustomerById(id: number): Observable<SingleResponseModel<Customer>>{
    return this.httpClient.get<SingleResponseModel<Customer>>
    (
      `${this.apiControllerUrl}/getbyid?id=${id}`
    );
  }

  getCustomerDetails(): Observable<ListResponseModel<CustomerDetail>> {
    return this.httpClient.get<ListResponseModel<CustomerDetail>>(
      `${this.apiControllerUrl}/getcustomerdetails`
    );
  }
}
