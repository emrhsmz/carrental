import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Model } from '../models/model';
import { ModelDetail } from '../models/model-detail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  apiControllerUrl = `${environment.apiUrl}/models`;

  constructor(private  httpClient: HttpClient) { }

  add(area: Model): Observable<ResponseModel>{
    return  this.httpClient.post<ResponseModel>
    (
  `${this.apiControllerUrl}/add`,
      area
    );
  }

  update(model: Model): Observable<ResponseModel>
  {
    return  this.httpClient.post<ResponseModel>
    (
      `${this.apiControllerUrl}/update`,
      model
    );
  }

  delete(model: Model): Observable<ResponseModel>
  {
    return  this.httpClient.post<ResponseModel>
    (
      `${this.apiControllerUrl}/delete`,
      model
    );
  }

  getAll(): Observable<ListResponseModel<Model>>{
    return  this.httpClient.get<ListResponseModel<Model>>
    (
      `${this.apiControllerUrl}/getall`
    );
  }

  getModelById(id: number): Observable<SingleResponseModel<Model>>{
    return this.httpClient.get<SingleResponseModel<Model>>
    (
      `${this.apiControllerUrl}/getbyid?id=${id}`
    );
  }

  getBrandById(id: number): Observable<SingleResponseModel<Model>>{
    return this.httpClient.get<SingleResponseModel<Model>>
    (
      `${this.apiControllerUrl}/getbyid?id=${id}`
    );
  }

  getModelDetails(): Observable<ListResponseModel<ModelDetail>> {
    return this.httpClient.get<ListResponseModel<ModelDetail>>(
      `${this.apiControllerUrl}/getmodeldetails`
    );
  }
}
