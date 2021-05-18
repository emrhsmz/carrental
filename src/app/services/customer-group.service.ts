import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerGroup } from '../models/customer-group';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerGroupService {

  apiControllerUrl = `${environment.apiUrl}/customerGroups`;

  constructor(private  httpClient: HttpClient) { }

  add(customerGroup: CustomerGroup): Observable<ResponseModel>{
    return  this.httpClient.post<ResponseModel>
    (
  `${this.apiControllerUrl}/add`,
  customerGroup
    );
  }

  update(customerGroup: CustomerGroup): Observable<ResponseModel>
  {
    return  this.httpClient.post<ResponseModel>
    (
      `${this.apiControllerUrl}/update`,
      customerGroup
    );
  }

  delete(customerGroup: CustomerGroup): Observable<ResponseModel>
  {
    return  this.httpClient.post<ResponseModel>
    (
      `${this.apiControllerUrl}/delete`,
      customerGroup
    );
  }

  getAll(): Observable<ListResponseModel<CustomerGroup>>{
    return  this.httpClient.get<ListResponseModel<CustomerGroup>>
    (
      `${this.apiControllerUrl}/getall`
    );
  }

  getCustomerById(id: number): Observable<SingleResponseModel<CustomerGroup>>{
    return this.httpClient.get<SingleResponseModel<CustomerGroup>>
    (
      `${this.apiControllerUrl}/getbyid?id=${id}`
    );
  }

  getCustomerDetails(): Observable<ListResponseModel<CustomerGroup>> {
    return this.httpClient.get<ListResponseModel<CustomerGroup>>(
      `${this.apiControllerUrl}/getcustomergroupdetails`
    );
  }
}
