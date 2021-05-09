import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Area} from '../models/area';
import {Observable} from 'rxjs';
import {ResponseModel} from '../models/responseModel';
import {ListResponseModel} from '../models/listResponseModel';
import {SingleResponseModel} from '../models/singleResponseModel';
import {City} from '../models/city';
import {CityDetail} from '../models/cityDetail';
import {AreaDetail} from '../models/area-detail';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  apiControllerUrl = `${environment.apiUrl}/areas`;

  constructor(private  httpClient: HttpClient) { }

  add(area: Area): Observable<ResponseModel>{
    return  this.httpClient.post<ResponseModel>
    (
  `${this.apiControllerUrl}/add`,
      area
    );
  }

  update(area: Area): Observable<ResponseModel>
  {
    return  this.httpClient.post<ResponseModel>
    (
      `${this.apiControllerUrl}/update`,
      area
    );
  }

  delete(area: Area): Observable<ResponseModel>
  {
    return  this.httpClient.post<ResponseModel>
    (
      `${this.apiControllerUrl}/delete`,
      area
    );
  }

  getAll(): Observable<ListResponseModel<Area>>{
    return  this.httpClient.get<ListResponseModel<Area>>
    (
      `${this.apiControllerUrl}/getall`
    );
  }

  getAreaById(id: number): Observable<SingleResponseModel<Area>>{
    return this.httpClient.get<SingleResponseModel<Area>>
    (
      `${this.apiControllerUrl}/getbyid?id=${id}`
    );
  }

  getCityById(id: number): Observable<SingleResponseModel<Area>>{
    return this.httpClient.get<SingleResponseModel<Area>>
    (
      `${this.apiControllerUrl}/getbyid?id=${id}`
    );
  }

  getAreaDetails(): Observable<ListResponseModel<AreaDetail>> {
    return this.httpClient.get<ListResponseModel<AreaDetail>>(
      `${this.apiControllerUrl}/getareadetails`
    );
  }
}
