import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contract } from '../models/contract';
import { ContractDetail } from '../models/contract-detail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  apiControllerUrl = `${environment.apiUrl}/contracts`;

  constructor(private httpClient: HttpClient) {}

  add(contract: Contract): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/add`,
      contract
    );
  }

  getAll(): Observable<ListResponseModel<Contract>> {
    return this.httpClient.get<ListResponseModel<Contract>>(
      `${this.apiControllerUrl}/getall`
    );
  }

  getContractById(id: number): Observable<SingleResponseModel<Contract>> {
    return this.httpClient.get<SingleResponseModel<Contract>>(
      `${this.apiControllerUrl}/getbyid?id=${id}`
    );
  }

  update(contract: Contract): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/update`,
      contract
    );
  }

  delete(contract: Contract): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/delete`,
      contract
    );
  }

  getContractDetails(): Observable<ListResponseModel<ContractDetail>> {
    return this.httpClient.get<ListResponseModel<ContractDetail>>(
      `${this.apiControllerUrl}/getcontractdetails`
    );
  }
}
