import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Branch } from '../models/branch';
import { BranchDetail } from '../models/branch-detail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  apiControllerUrl = `${environment.apiUrl}/branches`;

  constructor(private  httpClient: HttpClient) { }

  add(branch: Branch): Observable<ResponseModel>{
    return  this.httpClient.post<ResponseModel>
    (
  `${this.apiControllerUrl}/add`,
  branch
    );
  }

  update(branch: Branch): Observable<ResponseModel>
  {
    return  this.httpClient.post<ResponseModel>
    (
      `${this.apiControllerUrl}/update`,
      branch
    );
  }

  delete(branch: Branch): Observable<ResponseModel>
  {
    return  this.httpClient.post<ResponseModel>
    (
      `${this.apiControllerUrl}/delete`,
      branch
    );
  }

  getAll(): Observable<ListResponseModel<Branch>>{
    return  this.httpClient.get<ListResponseModel<Branch>>
    (
      `${this.apiControllerUrl}/getall`
    );
  }

  getBranchById(id: number): Observable<SingleResponseModel<Branch>>{
    return this.httpClient.get<SingleResponseModel<Branch>>
    (
      `${this.apiControllerUrl}/getbyid?id=${id}`
    );
  }

  getBranchDetails(): Observable<ListResponseModel<BranchDetail>> {
    return this.httpClient.get<ListResponseModel<BranchDetail>>(
      `${this.apiControllerUrl}/getbranchdetails`
    );
  }
}
